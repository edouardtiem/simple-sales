"use client"

import { useState, useEffect } from "react"

interface AnalysisDashboardProps {
  mappingData: any
  onBack: () => void
}

export default function AnalysisDashboard({ mappingData, onBack }: AnalysisDashboardProps) {
  const [analysis, setAnalysis] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const generateAnalysis = async () => {
      setIsLoading(true)

      try {
        const response = await fetch("/api/forecaster/ai-analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mappingData),
        })

        const result = await response.json()
        setAnalysis(result)
      } catch (error) {
        console.error("Erreur lors de l'analyse:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (mappingData) {
      generateAnalysis()
    }
  }, [mappingData])

  if (isLoading) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="animate-spin w-12 h-12 border-4 border-[#f6c344] border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-medium mb-4">Analyse en cours...</h2>
            <p className="text-gray-600">Notre IA analyse votre situation commerciale</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full mb-6">
            Diagnostic Complet
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">Votre Analyse Commerciale</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Basé sur les informations fournies, voici notre diagnostic et nos recommandations personnalisées.
          </p>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-8">
            {/* Score Global */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-medium mb-4">Score de Performance</h2>
              <div className="text-6xl font-bold text-[#f6c344] mb-4">{analysis.globalScore || "N/A"}/100</div>
              <p className="text-gray-600 leading-relaxed">
                {analysis.scoreExplanation || "Score basé sur votre situation actuelle"}
              </p>
            </div>

            {/* Diagnostic */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-medium mb-6 border-l-4 border-[#f6c344] pl-4">Diagnostic Principal</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {analysis.mainDiagnosis || "Analyse en cours..."}
                </p>
              </div>
            </div>

            {/* Recommandations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-medium mb-6">Recommandations Prioritaires</h2>
              <div className="space-y-6">
                {analysis.recommendations?.map((rec: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{rec.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{rec.description}</p>
                      {rec.impact && (
                        <div className="mt-2 text-sm text-[#f6c344] font-medium">Impact estimé: {rec.impact}</div>
                      )}
                    </div>
                  </div>
                )) || <p className="text-gray-600">Recommandations en cours de génération...</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-[#f6c344] rounded-lg p-8 text-center">
              <h2 className="text-2xl font-medium mb-6 text-[#1a1a1a]">Prêt à Passer à l'Action ?</h2>
              <p className="text-[#1a1a1a] mb-8 leading-relaxed">
                Discutons de votre situation et des solutions concrètes pour améliorer vos performances commerciales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBack}
                  className="bg-white text-[#1a1a1a] px-6 py-3 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  ← Modifier les Réponses
                </button>
                <a
                  href="/audit"
                  className="bg-[#1a1a1a] text-[#f6c344] px-6 py-3 font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Audit Complet Gratuit →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
