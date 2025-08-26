"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  // Question 1
  function: string

  // Question 2
  sector: string

  // Question 3
  teamSize: string

  // Question 4
  averageBasket: string

  // Question 5
  weeklyMeetings: string

  // Question 6
  weeklyProposals: string

  // Question 7
  weeklyContracts: string

  // Question 8
  cycleDuration: string

  // Question 9
  currentSymptom: string

  // Question 10
  firstName: string
  lastName: string
  email: string
  phone: string

  // Métadonnées
  finalChoice?: string
}

const initialFormData: FormData = {
  function: "",
  sector: "",
  teamSize: "",
  averageBasket: "",
  weeklyMeetings: "",
  weeklyProposals: "",
  weeklyContracts: "",
  cycleDuration: "",
  currentSymptom: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
}

const questions = [
  {
    id: 1,
    title: "Quelle est votre fonction principale ?",
    type: "radio",
    field: "function" as keyof FormData,
    options: [
      { value: "ceo-fondateur", label: "CEO / Fondateur" },
      { value: "directeur-commercial", label: "Directeur Commercial" },
      { value: "manager-commercial", label: "Manager Commercial" },
      { value: "autre", label: "Autre" },
    ],
    valueText: "💡 Cette information m'aide à comprendre votre perspective et les défis spécifiques à votre rôle.",
  },
  {
    id: 2,
    title: "Dans quel secteur évoluez-vous principalement ?",
    type: "radio",
    field: "sector" as keyof FormData,
    options: [
      { value: "services-b2b", label: "Services B2B (Conseil, Agence...)" },
      { value: "produits-b2b", label: "Produits B2B (Distribution...)" },
      { value: "saas-logiciel", label: "SaaS / Logiciel" },
      { value: "industrie", label: "Industrie" },
      { value: "autre", label: "Autre" },
    ],
    valueText: "💡 Essentiel pour que je puisse comparer votre performance aux bonnes références de votre marché.",
  },
  {
    id: 3,
    title: "Combien de personnes composent votre équipe commerciale ?",
    type: "radio",
    field: "teamSize" as keyof FormData,
    options: [
      { value: "seul", label: "Je suis seul(e)" },
      { value: "2-5", label: "2 à 5 personnes" },
      { value: "6-15", label: "6 à 15 personnes" },
      { value: "15+", label: "Plus de 15 personnes" },
    ],
    valueText:
      "💡 La taille de votre équipe est un indicateur clé de la complexité de votre structure et de vos processus.",
  },
  {
    id: 4,
    title: "Quel est le panier moyen d'un nouveau client ? (€ HT)",
    type: "radio",
    field: "averageBasket" as keyof FormData,
    options: [
      { value: "moins-5k", label: "Moins de 5 000€" },
      { value: "5k-15k", label: "5 000€ à 15 000€" },
      { value: "15k-50k", label: "15 000€ à 50 000€" },
      { value: "plus-50k", label: "Plus de 50 000€" },
    ],
    valueText:
      "💡 Votre panier moyen révèle la nature de votre cycle de vente. C'est une information cruciale pour l'analyse.",
  },
  {
    id: 5,
    title: "En moyenne, combien de premiers rendez-vous qualifiés votre équipe réalise-t-elle par semaine ?",
    type: "number",
    field: "weeklyMeetings" as keyof FormData,
    valueText:
      '💡 Cette métrique mesure la capacité de votre "machine" à générer des opportunités. Soyez aussi précis que possible.',
  },
  {
    id: 6,
    title: "Sur ces rendez-vous, combien de propositions commerciales sont envoyées en moyenne chaque semaine ?",
    type: "number",
    field: "weeklyProposals" as keyof FormData,
    valueText: "💡 Nous mesurons ici votre capacité à transformer un intérêt en une opportunité concrète.",
  },
  {
    id: 7,
    title: "Et finalement, combien de nouveaux contrats signez-vous en moyenne par semaine ?",
    type: "number",
    field: "weeklyContracts" as keyof FormData,
    valueText:
      "💡 C'est le résultat final. Ces trois dernières données brutes sont la clé pour calculer vos taux de conversion.",
  },
  {
    id: 8,
    title: "En moyenne, combien de temps s'écoule entre le premier contact et la signature ?",
    type: "radio",
    field: "cycleDuration" as keyof FormData,
    options: [
      { value: "moins-30j", label: "Moins de 30 jours" },
      { value: "1-3-mois", label: "1 à 3 mois" },
      { value: "3-6-mois", label: "3 à 6 mois" },
      { value: "plus-6-mois", label: "Plus de 6 mois" },
    ],
    valueText: "💡 La durée de votre cycle de vente nous aide à identifier les potentiels goulots d'étranglement.",
  },
  {
    id: 9,
    title: "Lequel de ces symptômes décrit le mieux votre situation actuelle ?",
    type: "radio",
    field: "currentSymptom" as keyof FormData,
    options: [
      {
        value: "previsions-instinct",
        label: "Vous pilotez vos prévisions à l'instinct, et chaque fin de trimestre est une source de stress",
      },
      {
        value: "deals-bloques",
        label: "Des deals qui semblaient gagnés se bloquent au dernier moment, et vous ne savez pas pourquoi",
      },
      {
        value: "crm-subi",
        label: "Vous avez l'impression de subir votre CRM au lieu de l'utiliser comme une véritable arme de croissance",
      },
      {
        value: "formation-inutile",
        label: "Vous avez encore le goût amer de cette dernière formation coûteuse qui n'a rien changé sur le terrain",
      },
      {
        value: "dependance-heros",
        label:
          "Votre chiffre d'affaires repose sur les épaules d'un ou deux \"héros\", et vous redoutez le jour où ils partiront",
      },
      {
        value: "message-dilue",
        label:
          "Vous entendez vos commerciaux présenter l'offre de 5 manières différentes, diluant votre message et votre force de frappe",
      },
    ],
    valueText:
      "💡 Votre perception est souvent l'indice le plus direct vers un angle mort. Il n'y a pas de mauvaise réponse.",
  },
  {
    id: 10,
    title: "Parfait ! Pour finir, où envoyons-nous votre analyse ?",
    type: "contact",
    valueText:
      "💡 Ces informations restent 100% confidentielles et servent uniquement à vous envoyer votre audit personnalisé.",
  },
  {
    id: 11,
    title: "Votre audit est terminé !",
    type: "final",
    valueText: "",
  },
]

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const totalSteps = questions.length
  const currentQuestion = questions[currentStep - 1]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        setIsAnimating(false)
      }, 150)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1)
        setIsAnimating(false)
      }, 150)
    }
  }

  const canProceed = () => {
    if (!currentQuestion) return false

    switch (currentQuestion.type) {
      case "radio":
        return formData[currentQuestion.field] !== ""
      case "number":
        return formData[currentQuestion.field] !== "" && !isNaN(Number(formData[currentQuestion.field]))
      case "contact":
        return formData.firstName !== "" && formData.lastName !== "" && formData.email !== ""
      case "final":
        return true
      default:
        return false
    }
  }

  const handleSubmit = async (finalChoice?: string) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    const finalFormData = {
      ...formData,
      finalChoice: finalChoice || sessionStorage.getItem("finalChoice") || "email_only",
    }

    console.log("Form submitted:", finalFormData)

    try {
      const notionResponse = await fetch("/api/notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      })

      if (!notionResponse.ok) {
        console.error("Failed to send to Notion:", await notionResponse.text())
      } else {
        console.log("Data sent to Notion successfully")
      }
    } catch (error) {
      console.error("Notion error:", error)
    }

    sessionStorage.setItem(
      "auditSubmission",
      JSON.stringify({
        formData: finalFormData,
        submittedAt: new Date().toISOString(),
      }),
    )

    router.push("/success")
  }

  const isBusinessEmail = (email: string) => {
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "msn.com",
      "aol.com",
      "icloud.com",
      "me.com",
      "free.fr",
      "orange.fr",
      "wanadoo.fr",
      "laposte.net",
      "sfr.fr",
    ]
    const domain = email.split("@")[1]?.toLowerCase()
    return domain && !personalDomains.includes(domain)
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb] font-mono">
      {/* Header */}
      <div className="border-b border-gray-200 bg-[#f5f1eb] px-4 py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm text-[#1a1a1a] hover:opacity-70 transition-opacity">
              simple.sales
            </a>
            <div className="text-sm text-gray-600">
              Question {currentStep}/{totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#f6c344] h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-200px)] flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-2xl w-full">
            <div className={`transition-opacity duration-150 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              {/* Question Title */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">{currentQuestion?.title}</h2>
              </div>

              {/* Answer Zone */}
              <div className="mb-12">
                {/* Radio Questions */}
                {currentQuestion?.type === "radio" && currentQuestion.options && (
                  <div className="space-y-4">
                    <RadioGroup
                      value={formData[currentQuestion.field]}
                      onValueChange={(value) => handleInputChange(currentQuestion.field, value)}
                      className="space-y-4"
                    >
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#f6c344] transition-colors cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                          <Label htmlFor={option.value} className="flex-1 text-base leading-relaxed cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Number Questions */}
                {currentQuestion?.type === "number" && (
                  <div className="text-center">
                    <Input
                      type="number"
                      min="0"
                      value={formData[currentQuestion.field]}
                      onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
                      placeholder="Entrez un nombre"
                      className="text-center text-xl py-4 max-w-xs mx-auto font-mono"
                    />
                  </div>
                )}

                {/* Contact Form */}
                {currentQuestion?.type === "contact" && (
                  <div className="space-y-6 max-w-md mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Jean"
                          className="font-mono"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Dupont"
                          className="font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="jean@entreprise.fr"
                        className="font-mono"
                        required
                      />
                      {formData.email && !isBusinessEmail(formData.email) && (
                        <p className="text-sm text-red-600">Veuillez utiliser une adresse email professionnelle</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone (optionnel)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* Final Page */}
                {currentQuestion?.type === "final" && (
                  <div className="text-center space-y-8">
                    <div className="text-6xl mb-6">🎯</div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4 max-w-lg mx-auto">
                      <p className="text-lg">
                        <strong>Félicitations !</strong> Vous venez de compléter votre audit express SimpleSales.
                      </p>
                      <p className="text-base">
                        📊 <strong>Votre diagnostic personnalisé</strong> vous sera envoyé par email dans les prochaines{" "}
                        <strong>48 heures</strong>.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg mx-auto">
                      <h3 className="font-medium mb-4">Souhaitez-vous discuter de vos résultats ?</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Réservez un créneau de 30 minutes pour approfondir votre analyse avec un expert.
                      </p>

                      <div className="space-y-4">
                        <Button
                          onClick={() => {
                            sessionStorage.setItem("finalChoice", "rdv")
                            window.open(
                              "https://app.reclaim.ai/m/edouard-tiem/scan-de-votre-machine-de-vente-simple-sales",
                              "_blank",
                            )
                            handleSubmit("rdv")
                          }}
                          className="w-full bg-[#f6c344] px-6 py-3 text-base font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {isSubmitting ? "Finalisation..." : "Oui, réserver un créneau"}
                        </Button>

                        <Button
                          onClick={() => {
                            sessionStorage.setItem("finalChoice", "email_only")
                            handleSubmit("email_only")
                          }}
                          variant="outline"
                          className="w-full px-6 py-3 text-base font-medium rounded-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Finalisation..." : "Non, recevoir seulement les résultats par email"}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Value Banner */}
              {currentQuestion?.valueText && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
                  <p className="text-blue-800 text-sm leading-relaxed">{currentQuestion.valueText}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        {currentQuestion?.type !== "final" && (
          <div className="flex items-center justify-between max-w-2xl mx-auto w-full">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Précédent</span>
            </Button>

            <Button
              onClick={nextStep}
              disabled={
                !canProceed() ||
                (currentQuestion?.type === "contact" && formData.email && !isBusinessEmail(formData.email))
              }
              className="flex items-center space-x-2 bg-[#f6c344] text-[#1a1a1a] hover:bg-[#f4b82e]"
            >
              <span>Suivant</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
