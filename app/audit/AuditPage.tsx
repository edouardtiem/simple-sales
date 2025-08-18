"use client"

import { JetBrains_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react"
import { useState } from "react"
import { trackEvent } from "@/lib/analytics"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

const faqData = [
  {
    question: "En quoi consiste exactement ce diagnostic gratuit ?",
    answer:
      "Une analyse rapide de votre organisation commerciale basée sur des questions stratégiques. Nous identifions précisément vos angles morts et opportunités d'amélioration.",
  },
  {
    question: "Quelle est la valeur de ce diagnostic ?",
    answer:
      "Nos clients utilisent régulièrement ce diagnostic pour identifier des opportunités générant +15-30% de conversion. Sa valeur marchande est de 1 500€, offert dans le cadre de notre conversation.",
  },
  {
    question: "Est-ce vraiment sans engagement ?",
    answer:
      "Absolument. Aucune carte bancaire, aucune obligation. Vous recevez votre analyse complète et décidez ensuite si vous souhaitez aller plus loin.",
  },
  {
    question: "Combien de temps me prendra ce questionnaire ?",
    answer: "5 minutes pour répondre aux questions. Vous recevrez l'analyse sous 48h ouvrées.",
  },
  {
    question: "Comment mes données sont-elles protégées ?",
    answer:
      "Toutes vos données sont sécurisées et traitées conformément au RGPD. Elles sont utilisées uniquement pour votre diagnostic et ne sont jamais partagées avec des tiers. Vous pouvez à tout moment exercer vos droits d'accès, de modification ou de suppression de vos informations via notre page de Politique de confidentialité.",
  },
  {
    question: "Que se passera-t-il après le diagnostic ?",
    answer:
      "Vous recevrez votre analyse par email. Nous vous proposerons un échange de 30 minutes pour la parcourir ensemble si vous le souhaitez.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="mt-4">
          <div className="text-gray-600 whitespace-pre-line">{answer}</div>
        </div>
      )}
    </div>
  )
}

export default function AuditPage() {
  const handleCTAClick = (position: string) => {
    trackEvent("audit_cta_click", {
      cta_position: position,
      page: "audit",
    })
    window.location.href = "/onboarding"
  }

  return (
    <main className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4">
        <div className="container mx-auto">
          <div className="text-left">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-32 pt-20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
            Suite à notre échange, votre diagnostic commercial est prêt
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Complétez ce questionnaire en 5 minutes pour recevoir votre analyse personnalisée et actionnable sous 48h
          </p>
          <Button
            className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-6 text-xl font-medium rounded-lg"
            onClick={() => handleCTAClick("hero")}
          >
            Démarrer mon diagnostic gratuit →
          </Button>
        </div>
      </section>

      {/* Section Rappel */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Comme évoqué lors de notre conversation, ce diagnostic vous permettra d'identifier rapidement :
            </p>
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#f6c344] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Les angles morts dans votre processus commercial actuel</strong> - Une analyse des meilleures
                  pratiques de votre marché
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#f6c344] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Les opportunités immédiates d'amélioration</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <blockquote className="bg-white p-8 rounded-lg border-l-4 border-[#f6c344] shadow-sm">
              <p className="text-xl md:text-2xl italic mb-6 text-gray-800">
                "Edouard a identifié en 30 minutes ce que nous cherchions depuis des mois. Son diagnostic a transformé
                notre approche commerciale et généré +18% de conversion en moins de 60 jours."
              </p>
              <div className="text-gray-600">
                <p className="font-medium text-lg">Thomas L.</p>
                <p>Head of Sales - Service informatique</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section CTA Principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Votre diagnostic commercial gratuit et sans engagement
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Quelques questions ciblées pour révéler les opportunités cachées de votre organisation commerciale :
            </p>

            <div className="space-y-6 mb-12">
              <Button
                className="w-full md:w-auto bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-6 text-xl font-medium rounded-lg"
                onClick={() => handleCTAClick("main_cta")}
              >
                Commencer mon diagnostic gratuit maintenant →
              </Button>
            </div>

            {/* Réassurance */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-sm">Analyse personnalisée sous 48h ouvrées</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-sm">Recommandations actionnables immédiatement</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-sm">Accès prioritaire à notre calendrier si vous souhaitez approfondir</span>
              </div>
            </div>

            {/* Protection des données */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                🔒 Vos données sont protégées et traitées conformément à notre{" "}
                <a href="/politique-confidentialite" className="underline hover:text-[#1a1a1a]">
                  Politique de protection des données
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof avec logos */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-lg font-medium mb-8">Ils nous font confiance</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 py-6">
              <Image
                src="/images/chargemap-logo.png"
                alt="Chargemap"
                width={100}
                height={40}
                className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
              />
              <Image
                src="/images/planity-logo.png"
                alt="Planity"
                width={100}
                height={40}
                className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
              />
              <Image
                src="/images/sodexo-logo.png"
                alt="Sodexo"
                width={100}
                height={40}
                className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
              />
              <Image
                src="/images/brigad-logo.png"
                alt="Brigad"
                width={100}
                height={40}
                className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F6F1EB] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto border-t border-gray-200 px-4 py-8">
        <div className="text-center text-sm space-y-6">
          {/* CTA LinkedIn */}
          <div className="pt-2">
            <Button
              onClick={() => window.open("https://www.linkedin.com/in/edouard-tiem", "_blank")}
              className="bg-[#0077B5] hover:bg-[#005885] text-white px-6 py-3 rounded-lg flex items-center mx-auto gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connectons-nous
            </Button>
          </div>

          {/* Liens légaux */}
          <div className="pt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a
              href="/mentions-legales"
              className="text-xs text-gray-500 hover:text-[#1a1a1a] transition-colors underline"
            >
              Mentions légales
            </a>
            <span className="text-xs text-gray-300">•</span>
            <a
              href="/politique-confidentialite"
              className="text-xs text-gray-500 hover:text-[#1a1a1a] transition-colors underline"
            >
              Politique de confidentialité
            </a>
            <span className="text-xs text-gray-300">•</span>
            <a
              href="/conditions-generales"
              className="text-xs text-gray-500 hover:text-[#1a1a1a] transition-colors underline"
            >
              CGU/CGV
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
