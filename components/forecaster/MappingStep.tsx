"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface MappingStepProps {
  headers: string[]
  sampleData: any[]
  onMappingComplete: (mapping: Record<string, string | null>) => void
  onBack: () => void
}

const FIELD_LABELS = {
  deal_name: "Nom du Deal",
  amount: "Montant",
  close_date: "Date de Closing",
  stage: "Étape/Phase",
  probability: "Probabilité (%)",
  contact: "Contact",
  company: "Entreprise",
}

const FIELD_DESCRIPTIONS = {
  deal_name: "Le nom ou titre de l'opportunité commerciale",
  amount: "La valeur monétaire du deal (€, $, etc.)",
  close_date: "La date prévue de signature",
  stage: "L'étape actuelle dans le processus de vente",
  probability: "Le pourcentage de chance de conclure",
  contact: "La personne de contact principale",
  company: "Le nom de l'entreprise cliente",
}

export default function MappingStep({ headers, sampleData, onMappingComplete, onBack }: MappingStepProps) {
  const [mapping, setMapping] = useState<Record<string, string | null>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [autoMappingDone, setAutoMappingDone] = useState(false)

  const handleAutoMapping = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/forecaster/mapping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ headers, sampleData: sampleData.slice(0, 3) }),
      })

      const result = await response.json()
      if (result.success) {
        setMapping(result.mapping)
        setAutoMappingDone(true)
      }
    } catch (error) {
      console.error("Auto-mapping failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFieldChange = (field: string, header: string | null) => {
    setMapping((prev) => ({ ...prev, [field]: header }))
  }

  const getConfidenceColor = (field: string) => {
    if (!mapping[field]) return "bg-gray-100"
    return "bg-emerald-50 border-emerald-200"
  }

  const requiredFields = ["deal_name", "amount", "close_date", "stage"]
  const canProceed = requiredFields.every((field) => mapping[field])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Mapping des Colonnes</h2>
        <p className="text-slate-600">Associez vos colonnes aux champs requis pour l'analyse</p>
      </div>

      {!autoMappingDone && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-emerald-900">Mapping Automatique</h3>
                <p className="text-sm text-emerald-700">Laissez l'IA identifier automatiquement vos colonnes</p>
              </div>
              <Button onClick={handleAutoMapping} disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyse...
                  </>
                ) : (
                  "Mapper Automatiquement"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {Object.entries(FIELD_LABELS).map(([field, label]) => {
          const isRequired = requiredFields.includes(field)
          const selectedHeader = mapping[field]

          return (
            <Card key={field} className={`${getConfidenceColor(field)} transition-colors`}>
              <CardContent className="pt-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-slate-900">{label}</h4>
                      {isRequired && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Requis</span>
                      )}
                      {selectedHeader && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <p className="text-sm text-slate-600">
                      {FIELD_DESCRIPTIONS[field as keyof typeof FIELD_DESCRIPTIONS]}
                    </p>
                  </div>
                </div>

                <Select
                  value={selectedHeader || "none"}
                  onValueChange={(value) => handleFieldChange(field, value === "none" ? null : value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner une colonne..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune colonne</SelectItem>
                    {headers.map((header) => (
                      <SelectItem key={header} value={header}>
                        {header}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedHeader && sampleData.length > 0 && (
                  <div className="mt-2 p-2 bg-white rounded border">
                    <p className="text-xs text-slate-500 mb-1">Aperçu des données :</p>
                    <p className="text-sm font-mono text-slate-700">
                      {sampleData
                        .slice(0, 2)
                        .map((row) => row[selectedHeader])
                        .join(", ")}
                      ...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {!canProceed && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <p className="text-sm text-amber-800">
                Veuillez mapper au minimum : Nom du Deal, Montant, Date de Closing et Étape
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Retour
        </Button>
        <Button
          onClick={() => onMappingComplete(mapping)}
          disabled={!canProceed}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Continuer l'Analyse
        </Button>
      </div>
    </div>
  )
}
