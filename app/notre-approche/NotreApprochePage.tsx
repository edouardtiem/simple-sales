"use client"

import { JetBrains_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import ContactModal from "@/components/contact-modal"
import { trackEvent } from "@/lib/analytics"
import Footer from "@/components/footer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

const faqData = [
  {
    question: "Le diagnostic est-il vraiment gratuit ? Quel est le piège ?",
    answer:
      "Oui. Il n'y a pas de piège. C'est notre façon de vous démontrer notre valeur en 30 minutes. Si vous y voyez clair, c'est une victoire. Si vous souhaitez aller plus loin, nous en discutons.",
  },
  {
    question: "Est-ce que je ne vais pas simplement subir un pitch commercial ?",
    answer:
      "Non. Notre promesse est de vous livrer une analyse objective et des recommandations concrètes, que nous décidions de travailler ensemble ou non. La valeur est dans la session elle-même.",
  },
  {
    question: "Est-ce adapté à la taille de mon entreprise ?",
    answer:
      "Notre méthode est conçue spécifiquement pour les PME et ETI de services B2B, de 15 à 500 salariés, qui disposent d'une équipe commerciale structurée.",
  },
  {
    question: "Je n'ai pas le temps pour ça en ce moment.",
    answer:
      "Nous comprenons. C'est justement pour les leaders qui manquent de temps que nous avons conçu un processus efficace qui ne demande que 5 minutes de préparation et 30 minutes d'échange pour un maximum de clarté.",
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

export default function NotreApprochePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = (position: string) => {
    trackEvent("cta_click", {
      variant: "notre_approche",
      cta_position: position,
    })
    setIsModalOpen(true)
  }

  return (
    <main className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="notre_approche" />

      {/* Section 1: Title and Introduction */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">
            De la Clarté à la Croissance : Notre Parcours en 3 Étapes
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Vos ventes ralentissent ? Le vrai problème est rarement celui que vous croyez. Nous avons conçu une
              méthode simple et directe pour révéler vos angles morts et vous fournir un plan d'action chirurgical.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Step 1 - Strategic Diagnosis */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">ÉTAPE 1 : Le Diagnostic Stratégique (Offert)</h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">Pour qui ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les dirigeants de PME et ETI de services B2B (15-500 salariés) qui sentent que leur croissance stagne
                malgré leurs efforts, et qui veulent comprendre pourquoi leurs ventes ne décollent pas comme prévu.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">La promesse :</h3>
              <p className="text-gray-700 leading-relaxed">
                En 30 minutes d'échange, nous identifions les 3 angles morts qui freinent réellement votre croissance et
                vous repartez avec une feuille de route claire pour débloquer votre situation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Comment ça marche ?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-gray-700">Vous remplissez notre questionnaire stratégique en 5 minutes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-gray-700">
                    Nous analysons vos réponses et préparons votre diagnostic personnalisé
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-gray-700">
                    Nous nous retrouvons 30 minutes pour décortiquer vos résultats ensemble
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Vous repartez avec :</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-[#f6c344] font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Une feuille de route stratégique</strong> avec vos 3 priorités d'action
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#f6c344] font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Un plan d'attaque concret</strong> pour les 90 prochains jours
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#f6c344] font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>La clarté totale</strong> sur ce qui bloque vraiment votre croissance
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button
                className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-4 text-lg font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto"
                onClick={() => handleCTAClick("step1")}
              >
                <span>Démarrer mon Diagnostic Offert</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Step 2 - Acceleration Plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-2">ÉTAPE 2 : Le Plan d'Accélération Commercial</h2>
            <p className="text-2xl font-bold text-[#1a1a1a]">(3 000 € HT)</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">Pour qui ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les dirigeants qui ont réalisé leur diagnostic et qui veulent passer à l'action avec un plan détaillé,
                personnalisé et immédiatement opérationnel.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">La promesse :</h3>
              <p className="text-gray-700 leading-relaxed">
                En 4 semaines, nous transformons vos angles morts en un système commercial structuré, avec des processus
                clairs, des outils adaptés et une feuille de route précise pour les 6 prochains mois.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Comment ça marche ?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-gray-700">Audit approfondi de votre écosystème commercial actuel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-gray-700">Co-construction de votre nouveau système commercial</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-gray-700">Livraison de votre plan d'accélération personnalisé</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Vous repartez avec :</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Votre playbook commercial complet</strong> avec processus, scripts et outils
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Un plan d'implémentation détaillé</strong> sur 6 mois
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Les KPIs et tableaux de bord</strong> pour piloter votre performance
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-600 italic">
                *Disponible uniquement après la réalisation du Diagnostic Stratégique.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Step 3 - Strategic Partnership */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-2">ÉTAPE 3 : Le Partenariat Stratégique</h2>
            <p className="text-2xl font-bold text-[#1a1a1a]">(2 500 € HT / mois)</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">Pour qui ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les dirigeants qui veulent un partenaire stratégique pour piloter l'implémentation de leur plan
                d'accélération et garantir l'atteinte de leurs objectifs de croissance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">La promesse :</h3>
              <p className="text-gray-700 leading-relaxed">
                Nous devenons votre directeur commercial externe. Nous pilotions l'exécution de votre plan, ajustons la
                stratégie en temps réel et vous accompagnons jusqu'à l'atteinte de vos objectifs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Comment ça marche ?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-gray-700">Sessions de pilotage hebdomadaires (1h/semaine)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-gray-700">Support continu par email et téléphone</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-gray-700">Ajustements stratégiques en temps réel</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Support Continu :</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Pilotage :</h4>
                  <div className="space-y-1 ml-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Analyse des KPIs et ajustement des actions</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Optimisation continue des processus</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Management :</h4>
                  <div className="space-y-1 ml-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Coaching individuel des commerciaux</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Animation des réunions commerciales</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Négociation :</h4>
                  <div className="space-y-1 ml-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Participation aux négociations stratégiques</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-700 text-sm">Support sur les deals complexes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-600 italic">
                *Sur invitation, après la livraison du Plan d'Accélération. Engagement minimum de 3 mois.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Vos Questions, Nos Réponses</h2>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-16 px-4 bg-[#f5f1eb]">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-xl md:text-2xl font-medium mb-8">
            Prêt à retrouver la clarté et à débloquer votre croissance ?
          </p>
          <Button
            className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-4 text-lg font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto"
            onClick={() => handleCTAClick("final")}
          >
            <span>Démarrer mon Diagnostic Offert</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
