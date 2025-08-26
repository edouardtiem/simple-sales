"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

declare global {
  interface Window {
    lintrk?: (action: string, data?: any) => void
  }
}

export default function SuccessPage() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  useEffect(() => {
    // Track page view
    trackEvent("page_view", {
      page: "success",
      conversion_type: "audit_completed",
    })

    // Track LinkedIn conversion
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: 16776666 })
    }

    // Load Reclaim.ai script
    const script = document.createElement("script")
    script.src = "https://meet.reclaimai.com/scripts/embed-scheduling-link.0.x.x.js"
    script.setAttribute("data-id", "fe9852cd-9af0-4cc9-a166-6d22b5f946f9")
    script.setAttribute("data-redirect", "NONE")
    script.onload = () => setIsScriptLoaded(true)
    script.onerror = () => {
      console.error("Failed to load Reclaim.ai script")
      setIsScriptLoaded(false)
    }

    const embedContainer = document.getElementById("reclaim-embed")
    if (embedContainer) {
      embedContainer.appendChild(script)
    }

    return () => {
      // Cleanup script if component unmounts
      if (embedContainer && script.parentNode) {
        embedContainer.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f1eb] font-mono">
      {/* Header */}
      <div className="border-b border-gray-200 bg-[#f5f1eb] px-4 py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <a href="/" className="text-sm text-[#1a1a1a] hover:opacity-70 transition-opacity">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl text-center space-y-12">
          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-tight">
            Votre audit est prêt à être activé.
          </h1>

          {/* Confirmation Paragraph */}
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            <p>
              <strong>Félicitations !</strong> Vos réponses ont été enregistrées. Pour transformer ces données brutes en
              une stratégie claire, la dernière étape est une session de restitution de 30 minutes avec moi.
            </p>
            <p>C'est au cours de cet échange (offert et 100% confidentiel) que la vraie valeur se crée.</p>
          </div>

          {/* Value Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-6">Pourquoi un appel est essentiel ?</h2>
            <p className="text-gray-700 mb-4">Un simple PDF est statique. Notre échange permettra de :</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#f6c344] mr-3">▪</span>
                <span>Valider vos angles morts pour assurer une analyse chirurgicale.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f6c344] mr-3">▪</span>
                <span>Révéler l'impact chiffré de ces freins sur votre performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f6c344] mr-3">▪</span>
                <span>Définir LA première action concrète que vous pourrez lancer dès la fin de notre appel.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-[#1a1a1a]">
              Planifiez votre session stratégique ci-dessous pour débloquer votre analyse complète :
            </h2>

            {/* Reclaim.ai Embed */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 min-h-[500px] flex items-center justify-center">
              {!isScriptLoaded ? (
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#f6c344] mx-auto"></div>
                  <p className="text-gray-600">Chargement du calendrier...</p>
                </div>
              ) : null}
              <div id="reclaim-embed" className="w-full"></div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="pt-8">
            <p className="text-xs text-center text-gray-500 leading-relaxed max-w-lg mx-auto">
              Nous avons déjà fixé un rendez-vous ? Parfait, ces réponses nous serviront de base pour notre discussion.
              Inutile de réserver un nouveau créneau.
              <br />
              Vous préférez attendre ? Une version très résumée de votre analyse vous sera envoyée par email.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
