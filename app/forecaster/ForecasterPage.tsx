"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import MappingStep from "@/components/forecaster/MappingStep"
import AnalysisDashboard from "@/components/forecaster/AnalysisDashboard"
import { analyzeDeals } from "@/lib/analysis-engine"

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
  totalRows: number
}

type Step = "upload" | "mapping" | "analysis"

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    multiple: false,
  })

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
      const analysis = analyzeDeals(parsedData.data, newMapping)

      // Call AI analysis API
      try {
        const aiResponse = await fetch("/api/forecaster/ai-analysis", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            analysisData: analysis,
            rawData: parsedData.data,
          }),
        })

        if (aiResponse.ok) {
          const aiResult = await aiResponse.json()
          analysis.aiInsights = aiResult.aiAnalysis
        }
      } catch (error) {
        console.error("[v0] AI analysis failed:", error)
        // Continue without AI insights if API fails
      }

      setAnalysisData(analysis)
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

  if (currentStep === "analysis" && analysisData) {
    return <AnalysisDashboard data={analysisData} onExportPDF={handleExportPDF} onBackToMapping={handleBackToMapping} />
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Simple Sales Forecaster</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uploadez votre fichier CRM et obtenez une analyse complète de votre pipeline commercial avec des
              recommandations personnalisées en moins de 90 secondes.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Importer votre fichier CRM
              </CardTitle>
              <CardDescription>Formats acceptés : CSV, Excel (.xlsx, .xls) - Taille max : 10MB</CardDescription>
            </CardHeader>
            <CardContent>
              {!uploadState.file ? (
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <input {...getInputProps()} />
                  <FileSpreadsheet className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-primary font-medium">Déposez votre fichier ici...</p>
                  ) : (
                    <>
                      <p className="text-foreground font-medium mb-2">Glissez-déposez votre fichier CRM ici</p>
                      <p className="text-muted-foreground text-sm mb-4">ou cliquez pour sélectionner un fichier</p>
                      <Button variant="outline">Choisir un fichier</Button>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileSpreadsheet className="h-8 w-8 text-primary" />
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
                        <span>Upload en cours...</span>
                        <span>{Math.round(uploadState.progress)}%</span>
                      </div>
                      <Progress value={uploadState.progress} className="w-full" />
                    </div>
                  )}

                  {uploadState.success && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Fichier uploadé avec succès ! Passage au mapping des colonnes...
                      </AlertDescription>
                    </Alert>
                  )}

                  {!uploadState.uploading && !uploadState.success && (
                    <Button onClick={handleUpload} className="w-full" size="lg">
                      Analyser mon pipeline
                    </Button>
                  )}
                </div>
              )}

              {uploadState.error && (
                <Alert variant="destructive" className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{uploadState.error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mapping Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Notre IA reconnaît automatiquement les colonnes de votre CRM (montants, dates, étapes) sans
                  configuration manuelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analyse Instantanée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Obtenez votre diagnostic complet en moins de 90 secondes avec des recommandations concrètes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rapport Détaillé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Dashboard interactif avec scores, graphiques et plan d'action personnalisé pour améliorer vos ventes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
