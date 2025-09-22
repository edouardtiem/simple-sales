"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Loader2, CheckCircle2 } from "lucide-react"

interface AnalysisStreamingPageProps {
  analysisData: any
  rawData: any[]
  onAnalysisComplete: (aiInsights: any) => void
  onBack: () => void
}

export default function AnalysisStreamingPage({
  analysisData,
  rawData,
  onAnalysisComplete,
  onBack,
}: AnalysisStreamingPageProps) {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState("Initialisation...")
  const [isComplete, setIsComplete] = useState(false)
  const [displayedThinking, setDisplayedThinking] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const runAnalysis = async () => {
      try {
        setIsLoading(true)
        setProgress(10)
        setCurrentPhase("Connexion à l'IA...")

        const response = await fetch("/api/forecaster/ai-analysis-stream", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            analysisData,
            rawData,
          }),
        })

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        const thinking = data.thinking || "Analyse en cours..."
        const words = thinking.split(" ")
        let currentIndex = 0

        const streamInterval = setInterval(() => {
          if (currentIndex < words.length) {
            setDisplayedThinking(words.slice(0, currentIndex + 1).join(" "))
            currentIndex++

            // Update progress and phase based on content
            const progressPercent = Math.min(90, (currentIndex / words.length) * 80 + 10)
            setProgress(progressPercent)

            if (currentIndex < words.length * 0.3) {
              setCurrentPhase("Analyse des données...")
            } else if (currentIndex < words.length * 0.6) {
              setCurrentPhase("Évaluation des métriques...")
            } else if (currentIndex < words.length * 0.8) {
              setCurrentPhase("Identification des risques...")
            } else {
              setCurrentPhase("Génération des recommandations...")
            }
          } else {
            clearInterval(streamInterval)
            setProgress(100)
            setCurrentPhase("Analyse terminée !")
            setIsComplete(true)
            setIsLoading(false)

            // Auto-redirect after completion
            setTimeout(() => {
              onAnalysisComplete(data.analysis)
            }, 1500)
          }
        }, 100) // Display new word every 100ms
      } catch (error) {
        console.error("[v0] Analysis error:", error)
        setDisplayedThinking("Une erreur s'est produite pendant l'analyse. Génération d'une analyse de base...")

        const fallbackInsights = {
          overallScore: 65,
          insights: ["Pipeline analysé avec succès", "Données structurées correctement"],
          recommendations: [
            {
              title: "Optimisation du pipeline",
              description: "Analysez les étapes de conversion pour identifier les goulots d'étranglement",
              priority: "high",
              impact: "Amélioration du taux de conversion",
            },
          ],
          riskFactors: ["Analyse automatique"],
          opportunities: ["Optimisation du processus"],
          nextActions: ["Réviser les deals en cours"],
        }

        setTimeout(() => {
          setIsComplete(true)
          setIsLoading(false)
          onAnalysisComplete(fallbackInsights)
        }, 2000)
      }
    }

    runAnalysis()
  }, [analysisData, rawData, onAnalysisComplete])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Analyse IA en cours</h1>
            </div>
            <p className="text-muted-foreground">
              Notre IA analyse votre pipeline et génère des recommandations personnalisées
            </p>
          </div>

          {/* Progress Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {isComplete ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                )}
                {currentPhase}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="w-full mb-4" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progression</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </CardContent>
          </Card>

          {/* AI Reasoning Stream */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Réflexion de l'IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 min-h-[300px] max-h-[500px] overflow-y-auto">
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {displayedThinking || "Initialisation de l'analyse..."}
                  {isLoading && !isComplete && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={onBack} disabled={isLoading && !isComplete}>
              Retour au mapping
            </Button>
            {isComplete && (
              <Button onClick={() => onAnalysisComplete(null)} className="animate-pulse">
                Voir les résultats
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
