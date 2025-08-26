"use client"

import { JetBrains_Mono } from "next/font/google"
import ContactForm from "@/components/contact-form"
import ContactModal from "@/components/contact-modal"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown, ChevronUp, ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { trackEvent, useScrollTracking } from "@/lib/analytics"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

// URL de prise de RDV Calendly
const CALENDLY_URL = "https://app.reclaim.ai/m/edouard-tiem/scan-de-votre-machine-de-vente-simple-sales"

const faqData = [
  {
    question: "📌 Pour quels types d'entreprises ce service est-il conçu ?",
    answer:
      "Nous accompagnons des entreprises B2B de toutes tailles : startups, PME, ETI. Tous secteurs confondus : industrie, BTP, services, conseil, tech.\nL'important, c'est d'avoir une équipe commerciale ou un enjeu de développement structuré.",
  },
  {
    question: "🧠 Que contient le diagnostic approfondi ?",
    answer:
      "Un échange de 2h pour faire le point sur l'organisation commerciale : cycle de vente, CRM, pipe, outils, management, process ou toute autre problématique que vous pourriez rencontrer.\nPuis un livrable sous 48h ouvrées avec :\n\n• un état des lieux clair\n• ce qui fonctionne / ce qui bloque\n• un plan d'action à 30 / 60 / 90 jours",
  },
  {
    question: "⏱ Combien de temps prend le diagnostic ?",
    answer: "L'entretien dure 2h. Le livrable est envoyé sous 48h ouvrées (hors congés), après réception du paiement.",
  },
  {
    question: "💬 Puis-je poser des questions après le diagnostic ?",
    answer:
      "Le diagnostic est un livrable structuré. Pour du suivi dans le temps ou des échanges réguliers, l'offre d'accompagnement mensuel est plus adaptée, la bonne nouvelle c'est que vous avez un mois offert.",
  },
  {
    question: "🧭 Que comprend l'accompagnement mensuel ?",
    answer:
      "• Demandes illimitées (traitées une à la fois)\n• Réponse sous 48h ouvrées\n• Sujets couverts : KPI, management, recadrage, objectifs, pay plan, closing de deals, process, outils\n• Expertise humaine\n• Résiliable à tout moment\n\n**Ce n'est pas du coaching opérationnel ou du management externalisé.**",
  },
  {
    question: "🔄 Que signifie \"demandes illimitées\" dans l'offre d'accompagnement mensuel ?",
    answer:
      "Vous pouvez poser autant de questions que nécessaire (ex. : structurer un bonus, revoir un process, analyser un pipeline, cadrer un manager, etc.).\nElles sont traitées **une par une**, avec une **réponse sous 48h ouvrées**. Dès qu'une demande est close, vous pouvez en envoyer une nouvelle.",
  },
  {
    question: "🤔 Ce service inclut-il du coaching opérationnel ?",
    answer:
      "Non. Ce n'est pas une offre de coaching ou de management externalisé.\nC'est un appui stratégique pour prendre de meilleures décisions et accélérer les résultats commerciaux.",
  },
  {
    question: "🔐 Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Vos données ne sont jamais partagées avec des tiers. Elles sont utilisées uniquement pour personnaliser l'accompagnement. Pas de spam, pas de revente de données.",
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

export default function ClientPageAI() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  const handleTakeAppointment = () => {
    trackEvent("calendly_click", {
      variant: "ai_version",
      cta_position: "services_section",
    })

    try {
      window.open(CALENDLY_URL, "_blank")
    } catch (error) {
      console.error("Error opening Calendly:", error)
    }
  }

  const handleCTAClick = (position: string) => {
    trackEvent("cta_click", {
      variant: "ai_version",
      cta_position: position,
    })
    setIsModalOpen(true)
  }

  // Gérer l'affichage du CTA flottant et le tracking du scroll
  const cleanupScrollTracking = useScrollTracking("ai_version")

  useEffect(() => {
    // Track page view
    trackEvent("page_view", {
      variant: "ai_version",
    })

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = windowHeight + scrollY >= documentHeight - 200 // 200px avant le bas

      // Afficher le CTA après 100px de scroll mais le cacher quand on arrive en bas
      setShowFloatingCTA(scrollY > 100 && !isNearBottom)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (cleanupScrollTracking) cleanupScrollTracking()
    }
  }, [])

  return (
    <main id="top" className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Brand Name */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4">
        <div className="container mx-auto">
          <div className="text-left md:text-left">
            <a
              href="#top"
              className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              simple.sales
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="ai_version" />

      {/* CTA Flottant */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showFloatingCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => handleCTAClick("floating")}
          className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-6 py-3 rounded-full shadow-lg font-medium text-sm md:text-base whitespace-nowrap"
        >
          Je commande mon scan gratuit
        </Button>
      </div>

      {/* BLOC 1 : Hero Section - Donner envie en 5 secondes */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-32 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl [font-family:var(--font-jetbrains-mono),Monaco,Menlo,'Ubuntu_Mono',monospace]">
            Prêt à muscler
            <br />
            votre machine de vente ?
          </h1>
          <div className="mx-auto max-w-[520px] lg:max-w-[640px]">
            <h2 className="mt-8 text-base md:text-lg font-medium">Pas de blabla que des résultats !</h2>
          </div>
          <div className="mt-16">
            <Button
              className="w-full md:w-auto bg-[#f6c344] px-8 py-6 text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg"
              onClick={() => handleCTAClick("hero")}
            >
              Je commande mon scan gratuit
            </Button>
          </div>

          {/* Social proof rapide */}
          <div className="mt-12 text-sm text-gray-600">+100 directions commerciales accompagnées</div>
        </div>
      </section>

      {/* BLOC 2 : Problèmes courants - Identification */}
      <section className="bg-[#F9FAFB] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium md:text-3xl mb-12 text-center">Ça vous parle ?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Je navigue à vue. Impossible de prévoir le revenu.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Mon CRM ment. Le pipe réel est ailleurs.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Je suis les deals au feeling. Pas de méthode, pas de rigueur.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Des deals bloquent, je ne sais même pas pourquoi.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">J'ai formé, ça n'a rien changé.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Chacun fait sa sauce. Mon équipe tire dans tous les sens.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                className="w-full md:w-auto bg-[#f6c344] px-8 py-6 text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg"
                onClick={() => handleCTAClick("problems_section")}
              >
                Je commande mon scan gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qui suis-je ? */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="text-center md:text-left">
              <div className="relative w-64 h-64 mx-auto md:mx-0 overflow-hidden rounded-full">
                <Image
                  src="/images/edouard-tiem-photo.jpg"
                  alt="Edouard Tiem - Consultant Commercial"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full object-top"
                  priority
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>

            {/* Texte */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-xl">
                <strong>Simple Sales</strong>
              </p>
              <p className="text-lg">
                Fondé par <strong>Edouard Tiem</strong>, fort de <strong>15 ans</strong> d'expérience dans la vente dont{" "}
                <strong>8 années</strong> en tant que directeur commercial.
              </p>
              <p className="text-lg">
                Nous nous sommes entourés des <strong>meilleurs experts du marché</strong> pour accompagner +100
                directions commerciales. Pas de blabla. Pas de slides. Juste des résultats.
              </p>
              <p className="text-xl font-medium">
                <strong>Notre mission : booster votre machine de vente !</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof avec logos */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-lg font-medium mb-8">Ils me font confiance</h3>
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
      </section>

      {/* Section IA - Nouvelle */}
      <section className="bg-[#F8FAFB] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium md:text-3xl mb-12 text-center">🎯 Ma méthode en 2024</h2>

            <div className="text-center mb-8">
              <p className="text-xl font-medium mb-6">Fini les analyses Excel qui prennent des semaines.</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">
                    <strong>Mes outils intelligents</strong> font le gros du travail d'analyse
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">
                    <strong>Moi je me concentre</strong> sur ce qui compte : vous donner les bonnes actions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">
                    <strong>Résultat</strong> : plus de précision, moins de blabla, même tarif
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-xl font-medium">L'IA accélère, l'humain décide. Point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 : Et après ? - Préparer la suite sans forcer */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium md:text-3xl mb-12 text-center">L'accompagnement</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diagnostic Approfondi */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-medium mb-4">Diagnostic Approfondi</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 font-medium italic">Je passe à l'action</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Échange structuré de 2h</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Débrief stratégique de 1h</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Diagnostic clair</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Plan d'action 30 / 60 / 90 jours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Livrable complet sous 48h ouvrées</span>
                    </li>
                    <li className="flex items-start space-x-2 mt-4 pt-2 border-t border-gray-100">
                      <span className="text-lg">🎁</span>
                      <span className="font-medium text-green-700">1 mois d'accompagnement offert (valeur 399€)</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-medium">3 000€ HT</p>
                  <p className="text-sm text-gray-600 mt-1">(2 500€ HT en distanciel)</p>
                </div>
              </div>

              {/* Accompagnement mensuel */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-medium mb-4">Accompagnement mensuel</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 font-medium italic">Je m'entoure pour décider plus vite, et mieux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Demandes illimitées (traitées une par une)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Réponse sous 48h ouvrées</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>KPI, management, recadrage, objectifs, pay plan, closing, process, outils</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Expertise 100% humaine</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Résiliable à tout moment</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-medium">1 500€ HT/mois</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic mb-6">"Pour transformer les alertes en plan d'action."</p>

              {/* CTA pour prise de rendez-vous */}
              <Button
                className="bg-[#f6c344] px-8 py-4 text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg flex items-center mx-auto"
                onClick={handleTakeAppointment}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Prenons rendez-vous
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F6F1EB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-lg italic mb-4">
                  "Clair, sans détour, utile dès le lendemain. Edouard a identifié en 48h ce que nous cherchions depuis
                  des mois."
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">Sophie M.</p>
                  <p>Directrice du Développement Commercial</p>
                  <p>Industrie : BTP</p>
                  <p>+40 commerciaux</p>
                </div>
              </blockquote>
              <blockquote className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-lg italic mb-4">
                  "Enfin un audit commercial qui va à l'essentiel. 3 actions concrètes qui ont immédiatement amélioré
                  nos résultats."
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">Thomas L.</p>
                  <p>Head of Sales</p>
                  <p>Service informatique</p>
                  <p>+60 commerciaux</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi ça fonctionne */}
      <section className="bg-[#F9FAFB] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium md:text-3xl mb-12 text-center">🧠 Pourquoi cela fonctionne ?</h2>

            <div className="text-center mb-8">
              <p className="text-xl mb-6">Vous voulez des résultats concrets, pas des PowerPoints ?</p>
              <p className="text-lg mb-8">Chez Simple Sales, on combine :</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <p className="text-lg">Une approche ultra personnalisée</p>
              </div>

              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <p className="text-lg">Une exécution standardisée</p>
              </div>

              <div className="flex items-start space-x-3">
                <ArrowRight className="h-6 w-6 text-[#f6c344] mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <strong>Des outils d'analyse dernière génération</strong>
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-xl font-medium mb-4">
                <strong>Résultat :</strong> +20% de croissance en moyenne, jusqu'à +45% chez certains.
              </p>
              <p className="text-lg">
                🎯 <strong>Le secret ?</strong> Un scan commercial offert, livré en 48h.
              </p>
              <p className="text-lg mt-2">Sans blabla. Juste les bons leviers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dans 3 mois */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium md:text-3xl mb-12 text-center">
            💬 Dans 3 mois, voici ce que vous pourriez me dire...
          </h2>

          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-lg font-medium text-green-800 mb-3">🟢 "Je sais enfin prévoir mon revenu à 3 mois."</p>
              <p className="text-gray-700">
                Les actions sont claires, les routines tiennent, la machine avance. On voit désormais où
                l'automatisation peut vraiment nous faire gagner du temps — sans risque, sans casser ce qui marche.
                Avant, on bricolait. Maintenant, on sait par où commencer.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-lg font-medium text-green-800 mb-3">
                🟢 "On ne traite plus que les opportunités à haut potentiel."
              </p>
              <p className="text-gray-700">
                Résultat : cycle de vente réduit de 25%, plus de temps sur les vrais deals. Pour la première fois, on
                réfléchit à intégrer de l'IA, sans peur de tout déstructurer. Edouard a rendu l'équipe plus efficace,
                sans dénaturer notre métier.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-lg font-medium text-green-800 mb-3">🟢 "Les commerciaux sont enfin moteurs."</p>
              <p className="text-gray-700">
                Avant : ils subissaient. Aujourd'hui : ils proposent, s'investissent, prennent en maturité. Et la
                qualité de vie au travail a suivi.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-lg font-medium text-green-800 mb-3">
                🟢 "Notre CRM reflète enfin la réalité du pipe."
              </p>
              <p className="text-gray-700">
                Les prévisions sont fiables, les décisions plus rapides. C'est devenu un vrai outil de pilotage, pas
                juste un outil de reporting.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-lg font-medium text-green-800 mb-3">
                🟢 "On est passé d'un fonctionnement artisanal… à une machine bien huilée."
              </p>
              <p className="text-gray-700">Sans perdre notre culture. Juste en structurant ce qui devait l'être.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="w-full md:w-auto bg-[#f6c344] px-8 py-6 text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg"
              onClick={() => handleCTAClick("future_results_section")}
            >
              Je commande mon scan gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-medium md:text-3xl">Je commande mon scan gratuit</h2>
            <ContactForm variant="ai_version" formType="page_bottom" />
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="bg-[#F6F1EB] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-medium md:text-2xl mb-8 text-center">
              <strong>Questions fréquentes</strong>
            </h2>
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
