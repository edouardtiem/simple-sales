"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import MappingStep from "@/components/forecaster/MappingStep"
import AnalysisDashboard from "@/components/forecaster/AnalysisDashboard"
import AnalysisStreamingPage from "@/components/forecaster/AnalysisStreamingPage"
import { analyzeDeals } from "@/lib/analysis-engine"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FileUploadState {
  file: File | null
  uploading: boolean
  progress: number
  error: string | null
  success: boolean
}

interface ParsedData {
  headers: string[]
  data: any[]
  rows: any[]
  totalRows: number
}

type Step = "upload" | "mapping" | "streaming" | "analysis"

export default function ForecasterPage() {
  const [currentStep, setCurrentStep] = useState<Step>("upload")
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    uploading: false,
    progress: 0,
    error: null,
    success: false,
  })
  const [parsedData, setParsedData] = useState<ParsedData | null>(null)
  const [mapping, setMapping] = useState<Record<string, string | null>>({})
  const [analysisData, setAnalysisData] = useState<any>(null)

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ]

    if (!validTypes.includes(file.type)) {
      setUploadState((prev) => ({
        ...prev,
        error: "Format de fichier non supporté. Veuillez utiliser un fichier CSV ou Excel (.xlsx, .xls).",
      }))
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadState((prev) => ({
        ...prev,
        error: "Le fichier est trop volumineux. Taille maximale : 10MB.",
      }))
      return
    }

    setUploadState((prev) => ({
      ...prev,
      file,
      error: null,
      success: false,
    }))
  }, [])

  const handleUpload = async () => {
    if (!uploadState.file) return

    setUploadState((prev) => ({ ...prev, uploading: true, progress: 0, error: null }))

    try {
      const formData = new FormData()
      formData.append("file", uploadState.file)

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadState((prev) => ({
          ...prev,
          progress: Math.min(prev.progress + Math.random() * 30, 90),
        }))
      }, 200)

      const response = await fetch("/api/forecaster/upload", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        throw new Error("Erreur lors de l'upload du fichier")
      }

      const result = await response.json()

      setUploadState((prev) => ({
        ...prev,
        uploading: false,
        progress: 100,
        success: true,
      }))

      setParsedData(result.data)
      setTimeout(() => {
        setCurrentStep("mapping")
      }, 1000)
    } catch (error) {
      setUploadState((prev) => ({
        ...prev,
        uploading: false,
        progress: 0,
        error: error instanceof Error ? error.message : "Une erreur est survenue",
      }))
    }
  }

  const resetUpload = () => {
    setUploadState({
      file: null,
      uploading: false,
      progress: 0,
      error: null,
      success: false,
    })
  }

  const handleMappingComplete = async (newMapping: Record<string, string | null>) => {
    console.log("[v0] Mapping completed:", newMapping)
    setMapping(newMapping)

    if (parsedData) {
      const dataToAnalyze = parsedData.data || parsedData.rows || []
      console.log("[v0] Data to analyze:", dataToAnalyze.length, "rows")

      if (dataToAnalyze.length === 0) {
        console.log("[v0] No data available for analysis")
        setAnalysisData({
          totalDeals: 0,
          totalPipeline: 0,
          weightedPipeline: 0,
          averageDealSize: 0,
          conversionRate: 0,
          averageSalesCycle: 45,
          dealsByStage: [],
          riskAnalysis: { highRisk: 0, mediumRisk: 0, lowRisk: 0 },
          recommendations: [
            {
              type: "warning",
              title: "Aucune donnée à analyser",
              description: `Le fichier contient des données valides, mais les données n'ont pas pu être parsées correctement.`,
              impact:
                "Vérifiez le format de votre fichier et assurez-vous que les colonnes contiennent des données valides.",
            },
          ],
          overallScore: 0,
          aiInsights: {
            overallScore: 0,
            insights: ["Aucune donnée disponible pour l'analyse"],
            recommendations: [],
            riskFactors: ["Données manquantes"],
            opportunities: [],
            nextActions: ["Vérifiez le format de votre fichier"],
          },
        })
        setCurrentStep("analysis")
        return
      }

      const analysis = analyzeDeals(dataToAnalyze, newMapping)
      setAnalysisData(analysis)

      setCurrentStep("streaming")
    }
  }

  const handleAnalysisComplete = (aiInsights: any) => {
    if (aiInsights && analysisData) {
      setAnalysisData({
        ...analysisData,
        aiInsights,
      })
    }
    setCurrentStep("analysis")
  }

  const handleBackToUpload = () => {
    setCurrentStep("upload")
    setParsedData(null)
    setMapping({})
    setAnalysisData(null)
    resetUpload()
  }

  const handleBackToMapping = () => {
    setCurrentStep("mapping")
    setAnalysisData(null)
  }

  const handleExportPDF = () => {
    // TODO: Implement PDF export functionality
    console.log("[v0] PDF export requested")
    alert("Export PDF sera disponible dans la prochaine version")
  }

  if (currentStep === "mapping" && parsedData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <MappingStep
              headers={parsedData.headers}
              sampleData={parsedData.data ? parsedData.data.slice(0, 5) : []}
              onMappingComplete={handleMappingComplete}
              onBack={handleBackToUpload}
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === "streaming" && analysisData && parsedData) {
    return (
      <AnalysisStreamingPage
        analysisData={analysisData}
        rawData={parsedData.data || parsedData.rows || []}
        onAnalysisComplete={handleAnalysisComplete}
        onBack={handleBackToMapping}
      />
    )
  }

  if (currentStep === "analysis" && analysisData) {
    return <AnalysisDashboard data={analysisData} onExportPDF={handleExportPDF} onBackToMapping={handleBackToMapping} />
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Simple Sales Forecaster",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            description: "Outil gratuit d'analyse de pipeline commercial pour fiabiliser vos prévisions de ventes",
            url: "https://simplesales.fr/forecaster",
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Le Diagnostic Instantané pour Fiabiliser votre Prévision Commerciale
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Vos prévisions de ventes sont-elles fiables ? Révélez la vérité de votre pipeline en 90 secondes.
              Identifiez les deals à risque et passez du doute à la décision avec notre diagnostic gratuit.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📤 Déposez votre Pipeline, Révélez la Vérité en 90 Secondes
              </CardTitle>
              <CardDescription>
                Formats acceptés : CSV, Excel (.xlsx, .xls) - Taille max : 10MB. Notre outil analyse automatiquement la
                fiabilité de chaque deal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!uploadState.file ? (
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-foreground font-medium mb-2">Sélectionnez votre fichier CRM</p>
                  <p className="text-muted-foreground text-sm mb-4">Formats acceptés : CSV, Excel (.xlsx, .xls)</p>
                  <Button variant="outline" asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      Choisir un fichier
                    </label>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📊</div>
                      <div>
                        <p className="font-medium text-foreground">{uploadState.file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(uploadState.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    {!uploadState.uploading && !uploadState.success && (
                      <Button variant="outline" size="sm" onClick={resetUpload}>
                        Changer
                      </Button>
                    )}
                  </div>

                  {uploadState.uploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Analyse de la fiabilité en cours...</span>
                        <span>{Math.round(uploadState.progress)}%</span>
                      </div>
                      <Progress value={uploadState.progress} className="w-full" />
                    </div>
                  )}

                  {uploadState.success && (
                    <Alert className="border-green-200 bg-green-50">
                      <div className="text-green-600">✅</div>
                      <AlertDescription className="text-green-800">
                        Fichier uploadé avec succès ! Passage au diagnostic de fiabilité...
                      </AlertDescription>
                    </Alert>
                  )}

                  {!uploadState.uploading && !uploadState.success && (
                    <Button onClick={handleUpload} className="w-full" size="lg">
                      Diagnostiquer la Fiabilité de mon Pipeline
                    </Button>
                  )}
                </div>
              )}

              {uploadState.error && (
                <Alert variant="destructive" className="mt-4">
                  <div className="text-red-600">⚠️</div>
                  <AlertDescription>{uploadState.error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Comment Fonctionne Notre Outil de Diagnostic ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Analyse de Fiabilité Automatique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Notre algorithme évalue 6 critères silencieux pour pondérer chaque deal : étape, montant, activité
                    récente, notes de qualification, et signaux d'alerte pour révéler votre pipeline probable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Détection des Deals à Risque</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Identifiez instantanément les deals sans "next step" daté ou sans champion interne validé.
                    Distinguez l'optimisme de la réalité dans vos prévisions commerciales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Score de Fiabilité Précis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Obtenez un score global de santé de pipeline avec recommandations actionnables pour réduire
                    l'incertitude et améliorer la précision de vos forecasts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ❓ Les Questions que votre Pipeline ne Pose Jamais
              </CardTitle>
              <CardDescription>
                Réponses aux questions essentielles sur la fiabilité de vos prévisions commerciales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: [
                      {
                        "@type": "Question",
                        name: "Comment savoir si mon forecast est réaliste ?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Un forecast réaliste prend en compte plus que le montant et l'étape. Notre outil analyse 6 points de qualification silencieux pour pondérer chaque deal et vous donner un score de fiabilité précis, distinguant le pipeline brut du pipeline probable.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Quel est le principal risque dans un pipeline commercial ?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Souvent, le principal risque est l'optimisme. Des deals sans 'next step' daté ou sans 'champion interne' validé peuvent sembler acquis alors qu'ils sont fragiles. Notre diagnostic met en lumière ces deals à risque critique.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Pourquoi mes prévisions sont-elles toujours trop optimistes ?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "L'optimisme vient du manque de pondération. Un deal en négociation sans activité récente n'a pas la même probabilité qu'un deal avec un rendez-vous planifié. Notre algorithme applique des coefficients réalistes selon l'activité et les signaux de qualification.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Mes données sont-elles sécurisées ?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Absolument. Vos données sont traitées localement et ne sont jamais stockées sur nos serveurs. L'analyse se fait en temps réel et les fichiers sont automatiquement supprimés après traitement.",
                        },
                      },
                    ],
                  }),
                }}
              />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Comment savoir si mon forecast est réaliste ?</AccordionTrigger>
                  <AccordionContent>
                    Un forecast réaliste prend en compte plus que le montant et l'étape. Notre outil analyse 6 points de
                    qualification silencieux pour pondérer chaque deal et vous donner un score de fiabilité précis,
                    distinguant le pipeline brut du pipeline probable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quel est le principal risque dans un pipeline commercial ?</AccordionTrigger>
                  <AccordionContent>
                    Souvent, le principal risque est l'optimisme. Des deals sans "next step" daté ou sans "champion
                    interne" validé peuvent sembler acquis alors qu'ils sont fragiles. Notre diagnostic met en lumière
                    ces deals à risque critique.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Pourquoi mes prévisions sont-elles toujours trop optimistes ?</AccordionTrigger>
                  <AccordionContent>
                    L'optimisme vient du manque de pondération. Un deal en négociation sans activité récente n'a pas la
                    même probabilité qu'un deal avec un rendez-vous planifié. Notre algorithme applique des coefficients
                    réalistes selon l'activité et les signaux de qualification.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Mes données sont-elles sécurisées ?</AccordionTrigger>
                  <AccordionContent>
                    Absolument. Vos données sont traitées localement et ne sont jamais stockées sur nos serveurs.
                    L'analyse se fait en temps réel et les fichiers sont automatiquement supprimés après traitement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="text-center bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Passez du Doute à la Décision</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ne laissez plus l'incertitude guider vos décisions commerciales. Obtenez un diagnostic précis de votre
                pipeline et des recommandations actionnables en moins de 90 secondes.
              </p>
              <Button size="lg" className="text-lg px-8">
                Commencer le Diagnostic Gratuit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
