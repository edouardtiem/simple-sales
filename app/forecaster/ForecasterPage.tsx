"use client"

import { JetBrains_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { trackEvent } from "@/lib/analytics"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

const faqData = [
  {
    question: "Comment le forecaster peut-il améliorer mes prévisions ?",
    answer:
      "Notre outil analyse vos données historiques et identifie les patterns cachés dans votre pipeline. Il révèle les angles morts qui faussent vos prévisions et vous donne une vision claire de votre performance future.",
  },
  {
    question: "Quelles données dois-je fournir ?",
    answer:
      "Vous pouvez importer vos données CRM (opportunités, contacts, activités) ou saisir manuellement vos informations commerciales. L'outil s'adapte à votre niveau de maturité data.",
  },
  {
    question: "Est-ce compatible avec mon CRM actuel ?",
    answer:
      "Oui, notre forecaster accepte les exports standards (CSV, Excel) de la plupart des CRM du marché : Salesforce, HubSpot, Pipedrive, etc.",
  },
  {
    question: "Combien de temps faut-il pour avoir des résultats ?",
    answer:
      "L'analyse se fait en temps réel. Dès que vous importez vos données, vous obtenez immédiatement votre score de fiabilité et vos recommandations d'optimisation.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ForecasterPage() {
  const [currentStep, setCurrentStep] = useState<"upload" | "mapping" | "analysis">("upload")

  const handleStartForecasting = () => {
    trackEvent("forecaster_start", {
      step: "upload",
      source: "main_cta",
    })
    setCurrentStep("upload")
  }

  const handleNextStep = (step: "upload" | "mapping" | "analysis") => {
    trackEvent("forecaster_step", {
      step: step,
      source: "navigation",
    })
    setCurrentStep(step)
  }

  return (
    <div className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
            <a href="/nos-guides" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">
              ← Retour aux guides
            </a>
          </div>
        </div>
      </div>

      {/* Section 1: Title and Introduction */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full mb-6">
            Outil de Forecasting
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">
            Transformez vos Données en Prévisions Fiables
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Découvrez les angles morts de votre pipeline commercial et obtenez des prévisions de vente précises basées
              sur vos données réelles.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Comment ça Fonctionne</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium flex-shrink-0 mt-1">
                  1
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-4">Importez vos Données</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Téléchargez vos données CRM (CSV, Excel) ou saisissez manuellement vos opportunités commerciales.
                    Notre système accepte tous les formats standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium flex-shrink-0 mt-1">
                  2
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-4">Mappez vos Champs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Associez vos colonnes aux champs standards (montant, probabilité, date de clôture, étape). L'outil
                    s'adapte à votre structure de données.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium flex-shrink-0 mt-1">
                  3
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-4">Analysez vos Résultats</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Obtenez instantanément votre score de fiabilité, vos prévisions optimisées et les recommandations
                    pour améliorer votre performance commerciale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Tool */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Démarrez votre Analyse</h2>

          {/* Step Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleNextStep("upload")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentStep === "upload"
                    ? "bg-[#f6c344] text-[#1a1a1a]"
                    : "bg-white text-gray-600 hover:text-[#1a1a1a]"
                }`}
              >
                1. Import
              </button>
              <div className="w-8 h-px bg-gray-300"></div>
              <button
                onClick={() => handleNextStep("mapping")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentStep === "mapping"
                    ? "bg-[#f6c344] text-[#1a1a1a]"
                    : "bg-white text-gray-600 hover:text-[#1a1a1a]"
                }`}
              >
                2. Mapping
              </button>
              <div className="w-8 h-px bg-gray-300"></div>
              <button
                onClick={() => handleNextStep("analysis")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentStep === "analysis"
                    ? "bg-[#f6c344] text-[#1a1a1a]"
                    : "bg-white text-gray-600 hover:text-[#1a1a1a]"
                }`}
              >
                3. Analyse
              </button>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 min-h-[400px]">
            {currentStep === "upload" && (
              <div className="text-center space-y-6">
                <h3 className="text-xl font-medium">Importez vos Données Commerciales</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-[#f6c344] transition-colors">
                  <div className="space-y-4">
                    <div className="text-4xl">📊</div>
                    <p className="text-gray-600">
                      Glissez-déposez votre fichier CSV/Excel ou cliquez pour sélectionner
                    </p>
                    <input type="file" accept=".csv,.xlsx,.xls" className="hidden" id="file-upload" />
                    <label
                      htmlFor="file-upload"
                      className="inline-block bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors"
                    >
                      Choisir un fichier
                    </label>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Formats acceptés: CSV, Excel (.xlsx, .xls) - Taille max: 10MB</p>
              </div>
            )}

            {currentStep === "mapping" && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-center">Mappez vos Champs de Données</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Vos Colonnes</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded border">Nom_Client</div>
                      <div className="bg-gray-50 p-3 rounded border">Montant_Deal</div>
                      <div className="bg-gray-50 p-3 rounded border">Probabilite</div>
                      <div className="bg-gray-50 p-3 rounded border">Date_Cloture</div>
                      <div className="bg-gray-50 p-3 rounded border">Etape_Pipeline</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Champs Standards</h4>
                    <div className="space-y-2">
                      <select className="w-full p-3 border rounded">
                        <option>Sélectionner...</option>
                        <option>Nom du prospect</option>
                      </select>
                      <select className="w-full p-3 border rounded">
                        <option>Sélectionner...</option>
                        <option>Montant de l'opportunité</option>
                      </select>
                      <select className="w-full p-3 border rounded">
                        <option>Sélectionner...</option>
                        <option>Probabilité de closing</option>
                      </select>
                      <select className="w-full p-3 border rounded">
                        <option>Sélectionner...</option>
                        <option>Date de clôture prévue</option>
                      </select>
                      <select className="w-full p-3 border rounded">
                        <option>Sélectionner...</option>
                        <option>Étape du pipeline</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    onClick={() => handleNextStep("analysis")}
                    className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-6 py-3 rounded-lg font-medium"
                  >
                    Valider le mapping
                  </Button>
                </div>
              </div>
            )}

            {currentStep === "analysis" && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-center">Analyse de votre Pipeline</h3>

                {/* Score de Fiabilité */}
                <div className="bg-[#f6c344] rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-[#1a1a1a] mb-2">Score de Fiabilité: 73%</h4>
                  <p className="text-[#1a1a1a]">Votre pipeline présente des opportunités d'optimisation</p>
                </div>

                {/* Métriques Clés */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-800">€847K</div>
                    <div className="text-sm text-gray-600">Pipeline Total</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-800">€312K</div>
                    <div className="text-sm text-gray-600">Prévision Ajustée</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-800">37%</div>
                    <div className="text-sm text-gray-600">Taux de Conversion</div>
                  </div>
                </div>

                {/* Recommandations */}
                <div className="space-y-4">
                  <h4 className="font-medium">Recommandations Prioritaires:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <span className="text-red-500 font-bold">⚠️</span>
                      <div>
                        <div className="font-medium text-red-800">Pipeline surchargé en début de cycle</div>
                        <div className="text-sm text-red-600">
                          43% de vos deals stagnent en prospection depuis +30 jours
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="text-yellow-500 font-bold">💡</span>
                      <div>
                        <div className="font-medium text-yellow-800">Probabilités surévaluées</div>
                        <div className="text-sm text-yellow-600">
                          Vos estimations sont 23% trop optimistes vs. historique
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-500 font-bold">✅</span>
                      <div>
                        <div className="font-medium text-green-800">Cycle de vente maîtrisé</div>
                        <div className="text-sm text-green-600">Durée moyenne conforme aux standards du secteur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-16 px-4 bg-[#f6c344]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-[#1a1a1a]">
            Pourquoi Utiliser Notre Forecaster
          </h2>
          <div className="max-w-3xl mx-auto text-[#1a1a1a]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">🎯 Prévisions Précises</h3>
                <p>
                  Réduisez l'écart entre vos prévisions et vos résultats réels grâce à une analyse basée sur vos données
                  historiques.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">🔍 Angles Morts Révélés</h3>
                <p>Identifiez les points de friction cachés dans votre pipeline qui impactent vos performances.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">⚡ Analyse Instantanée</h3>
                <p>Obtenez vos résultats en temps réel, sans attendre des semaines d'analyse manuelle.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">📊 Recommandations Actionnables</h3>
                <p>
                  Recevez des conseils concrets pour optimiser votre processus commercial et améliorer vos résultats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Prêt à Optimiser vos Prévisions ?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Transformez vos données commerciales en insights actionnables et prenez des décisions éclairées pour votre
            croissance.
          </p>
          <Button
            onClick={handleStartForecasting}
            className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-4 text-lg font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <span>Commencer l'Analyse</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Questions Fréquentes</h2>
          <div className="space-y-2">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
