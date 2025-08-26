"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, Calendar } from "lucide-react"

declare global {
  interface Window {
    lintrk?: (action: string, data?: any) => void
    gtag?: (command: string, ...args: any[]) => void
  }
}

// URL de prise de RDV Calendly
const CALENDLY_URL = "https://app.reclaim.ai/m/edouard-tiem/scan-de-votre-machine-de-vente-simple-sales"

export default function SuccessPage() {
  const [finalChoice, setFinalChoice] = useState<string | null>(null)
  const [isCalendlyBlocked, setIsCalendlyBlocked] = useState(false)

  useEffect(() => {
    // Récupérer le choix final
    const choice = sessionStorage.getItem("finalChoice")
    setFinalChoice(choice)

    // Vérifier si l'ouverture de Calendly a été bloquée
    const popupBlocked = sessionStorage.getItem("calendlyBlocked")
    if (popupBlocked === "true") {
      setIsCalendlyBlocked(true)
    }

    // Track LinkedIn conversion
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: 16776674 })
    }

    // Track Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "AW-17199584043")
    }

    // Track Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17199584043/CONVERSION_LABEL",
      })
    }
  }, [])

  const handleTakeAppointment = () => {
    try {
      window.open(CALENDLY_URL, "_blank")
    } catch (error) {
      console.error("Error opening Calendly:", error)
      setIsCalendlyBlocked(true)
    }
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="text-3xl font-medium">Votre scan est en cours.</h1>
            <p className="text-lg text-gray-600">Merci, vos réponses ont bien été enregistrées.</p>
          </div>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-lg">
              Vous allez recevoir un scan personnalisé sous 48h, avec <strong>3 leviers concrets</strong> pour améliorer
              votre performance commerciale.
            </p>
            <p className="text-gray-600">
              Ce document est basé sur vos réponses et l'analyse externe de votre présence en ligne.
            </p>
          </div>

          {/* What happens next */}
          <div className="text-left space-y-6">
            <h2 className="text-xl font-medium text-center">Ce qui va se passer maintenant</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">1.</span>
                <p>Je prends le temps d'analyser vos éléments — sans blabla, sans copier-coller</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">2.</span>
                <p>Vous recevez un scan structuré, lisible, actionnable</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">3.</span>
                <p>Si cela fait sens, on peut en discuter ensemble pour aller plus loin</p>
              </div>
            </div>
          </div>

          {/* RDV Section - Toujours présent mais adapté selon le choix */}
          <div
            className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-4 ${finalChoice === "rdv" ? "border-green-200" : ""}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {finalChoice === "rdv" ? "Votre rendez-vous" : "Accélérez vos résultats avec un rendez-vous"}
              </h3>
              {finalChoice === "rdv" && <span className="text-sm text-green-600 font-medium">En cours</span>}
            </div>

            <p className="text-sm">
              {finalChoice === "rdv" ? (
                <>
                  <strong>Vous avez choisi de prendre rendez-vous.</strong> Si vous n'avez pas pu finaliser votre
                  réservation, vous pouvez le faire maintenant. Nous échangerons pendant 30 minutes pour approfondir
                  votre situation et vous proposer des actions concrètes.
                </>
              ) : (
                <>
                  <strong>Vous pouvez encore prendre rendez-vous</strong> pour un échange de 30 minutes. C'est l'option
                  la plus efficace pour obtenir des résultats rapides et personnalisés à votre situation spécifique.
                </>
              )}
            </p>

            {isCalendlyBlocked && (
              <div className="text-amber-600 text-sm bg-amber-50 p-2 rounded">
                L'ouverture automatique de l'agenda a été bloquée par votre navigateur. Utilisez le bouton ci-dessous.
              </div>
            )}

            <Button className="w-full bg-[#f6c344] text-[#1a1a1a] hover:bg-[#f4b82e]" onClick={handleTakeAppointment}>
              {finalChoice === "rdv" ? "Reprendre votre réservation" : "Prendre un rendez-vous maintenant"}
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Signature */}
          <div className="border-t border-gray-200 pt-8 space-y-4">
            <p>À très bientôt,</p>
            <div className="space-y-2">
              <p className="font-medium">Edouard Tiem</p>
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/edouard-tiem", "_blank")}
                className="bg-[#0077B5] hover:bg-[#005885] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connectons-nous
              </Button>
            </div>
          </div>

          {/* Back to home */}
          <div className="pt-8">
            <Button variant="outline" onClick={() => (window.location.href = "/")}>
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
