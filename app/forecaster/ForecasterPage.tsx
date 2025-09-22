"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import MappingStep from "@/components/forecaster/MappingStep"
import AnalysisDashboard from "@/components/forecaster/AnalysisDashboard"

export default function ForecasterPage() {
  const [currentStep, setCurrentStep] = useState<"mapping" | "analysis">("mapping")
  const [mappingData, setMappingData] = useState<any>(null)

  const handleMappingComplete = (data: any) => {
    setMappingData(data)
    setCurrentStep("analysis")
  }

  const handleBackToMapping = () => {
    setCurrentStep("mapping")
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
            <Link href="/" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="pt-20 pb-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 text-center">
              <div
                className={`${currentStep === "mapping" ? "bg-[#f6c344]" : "bg-white border-2 border-gray-300"} text-[#1a1a1a] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mx-auto mb-2 transition-colors`}
              >
                1
              </div>
              <div className="text-sm font-medium text-gray-800">Mapping</div>
            </div>

            <div className="w-8 h-px bg-gray-300"></div>

            <div className="flex-1 text-center">
              <div
                className={`${currentStep === "analysis" ? "bg-[#f6c344]" : "bg-white border-2 border-gray-300"} text-[#1a1a1a] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mx-auto mb-2 transition-colors`}
              >
                2
              </div>
              <div className="text-sm font-medium text-gray-800">Analyse</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {currentStep === "mapping" ? (
        <MappingStep onComplete={handleMappingComplete} />
      ) : (
        <AnalysisDashboard mappingData={mappingData} onBack={handleBackToMapping} />
      )}

      <Footer />
    </div>
  )
}
