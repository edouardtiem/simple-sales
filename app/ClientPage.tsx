"use client"

import { JetBrains_Mono } from "next/font/google"
import ContactForm from "@/components/contact-form"
import ContactModal from "@/components/contact-modal"
import ConversionChart from "@/components/conversion-chart"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Building2,
  Settings,
  Clock,
  ClipboardList,
  Search,
  Trophy,
} from "lucide-react"
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
    question: "Quel est le « piège » ? Pourquoi est-ce gratuit ?",
    answer:
      "C'est simple : c'est la meilleure façon pour nous de prouver notre valeur. Notre conviction est que si l'analyse gratuite que nous vous offrons est suffisamment percutante, certains dirigeants voudront naturellement aller plus loin avec nous. Si ce n'est pas votre cas, vous repartez avec une analyse objective de vos angles morts, sans aucune pression ni obligation. C'est notre investissement initial pour mériter votre confiance.",
    icon: "HelpCircle",
  },
  {
    question: "Est-ce que c'est vraiment adapté à mon entreprise ?",
    answer:
      "Oui. Ce diagnostic a été spécifiquement conçu pour les dirigeants de PME et d'ETI de services B2B (de 15 à 500 salariés). Il ne s'agit pas d'une approche de grand groupe diluée, mais d'une analyse centrée sur les leviers de croissance agiles qui fonctionnent dans votre contexte : cycles de vente rapides, équipes polyvalentes et besoin de résultats tangibles.",
    icon: "Building2",
  },
  {
    question: "Vais-je recevoir un simple rapport automatisé ?",
    answer:
      "Non. C'est un processus hybride qui garantit la pertinence. Notre système analyse les données brutes de votre questionnaire pour identifier des schémas. Mais ensuite, chaque rapport est personnellement revu, enrichi et validé par moi-même (Edouard) pour m'assurer que les angles morts identifiés correspondent à votre réalité de terrain. C'est ce qui nous permet de vous apporter une réelle valeur en 48h.",
    icon: "Settings",
  },
  {
    question: "Combien de temps cela va-t-il vraiment me prendre ?",
    answer:
      "Nous respectons votre temps. Le processus est radicalement efficace :\n\n1. 5 minutes chrono pour remplir le questionnaire en ligne.\n2. Vous recevez votre rapport d'analyse personnalisé sous 48h.\n3. Vous réservez une session de travail de 30 minutes avec moi pour discuter des résultats.",
    icon: "Clock",
  },
  {
    question: "Que se passe-t-il juste après avoir rempli le questionnaire ?",
    answer:
      "Dès que vous validez le questionnaire, vous accédez directement à mon agenda pour choisir le créneau de 30 minutes qui vous arrange pour notre session de travail. Si vous préférez attendre, pas d'inquiétude : vous retrouverez ce même lien dans l'email contenant votre score pour réserver notre session plus tard. C'est vous qui gardez le contrôle.",
    icon: "ArrowRight",
  },
]

function FAQItem({ question, answer, icon }: { question: string; answer: string; icon: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const IconComponent =
    {
      HelpCircle,
      Building2,
      Settings,
      Clock,
      ArrowRight,
    }[icon] || HelpCircle

  return (
    <div className="border-b border-gray-200 py-6">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center space-x-3">
          <IconComponent className="h-5 w-5 text-gray-600 flex-shrink-0" strokeWidth={1.5} />
          <h3 className="text-lg font-medium">{question}</h3>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="mt-4 ml-8">
          <div className="text-gray-600 whitespace-pre-line leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  )
}

export default function ClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)
  const cleanupScrollTracking = useScrollTracking("original")

  const handleTakeAppointment = () => {
    trackEvent("calendly_click", {
      variant: "original",
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
      variant: "original",
      cta_position: position,
    })
    setIsModalOpen(true)
  }

  // Gérer l'affichage du CTA flottant et le tracking du scroll
  useEffect(() => {
    // Track page view
    trackEvent("page_view", {
      variant: "original",
    })

    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowFloatingCTA(scrollY > 100) // Afficher après 100px de scroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (cleanupScrollTracking) cleanupScrollTracking()
    }
  }, [])

  return (
    <main id="top" className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header simplifié - sans CTA */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
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
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="original" />

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
          Obtenir mon Score Gratuit
        </Button>
      </div>

      {/* Hero Section avec animation typewriter */}
      <section className="min-h-[34vh] md:min-h-[42vh] flex flex-col px-4 py-7 md:py-10 pt-28 md:pt-32">
        <div className="flex-1"></div>
        <div className="container mx-auto text-center">
          <h1
            className="text-xl font-medium tracking-tight md:text-2xl lg:text-3xl [font-family:var(--font-jetbrains-mono),Monaco,Menlo,'Ubuntu_Mono',monospace] mb-7"
            style={{ lineHeight: "1.8" }}
          >
            Vos ventes stagnent ?<br />
            Le vrai problème est rarement celui que vous croyez.
          </h1>
          <div className="mx-auto max-w-md lg:max-w-lg">
            <h2 className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg font-medium text-gray-700 leading-relaxed">
              Notre diagnostic gratuit révèle les 3 angles morts qui freinent réellement votre croissance.
            </h2>
          </div>
          <div className="mt-10 md:mt-14 flex justify-center">
            <Button
              className="group bg-[#f6c344] px-5 md:px-8 py-3 md:py-5 text-base md:text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3 w-auto max-w-sm md:max-w-none"
              onClick={() => handleCTAClick("hero")}
            >
              <span className="text-center leading-tight">Révéler mon Score d'Efficacité</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
            </Button>
          </div>
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 italic">
            Gratuit, sans engagement et 100% confidentiel
          </p>

          {/* Social proof avec logos - directement sous le CTA */}
          <div className="mt-10 md:mt-14">
            <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">
              Une approche éprouvée auprès de leaders comme :
            </h3>
            <div className="flex flex-wrap items-end justify-center gap-5 md:gap-7 py-3 md:py-5">
              <div className="h-9 md:h-11 flex items-end">
                <Image
                  src="/images/chargemap-logo.png"
                  alt="Chargemap"
                  width={110}
                  height={44}
                  className="h-7 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity transform translate-y-1"
                />
              </div>
              <div className="h-9 md:h-11 flex items-end">
                <Image
                  src="/images/planity-logo.png"
                  alt="Planity"
                  width={110}
                  height={44}
                  className="h-7 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity transform translate-y-0.5"
                />
              </div>
              <div className="h-9 md:h-11 flex items-end">
                <Image
                  src="/images/sodexo-logo.png"
                  alt="Sodexo"
                  width={110}
                  height={44}
                  className="h-7 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity transform -translate-y-1"
                />
              </div>
              <div className="h-9 md:h-11 flex items-end">
                <Image
                  src="/images/brigad-logo.png"
                  alt="Brigad"
                  width={110}
                  height={44}
                  className="h-7 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity transform translate-y-0.25"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </section>

      {/* Section graphique avec fond divisé */}
      <section
        className="relative py-3 md:py-5 lg:py-7 -mt-3 md:-mt-5"
        /* Réduit le padding vertical de py-3 md:py-7 lg:py-10 à py-3 md:py-5 lg:py-7 et ajusté les marges négatives pour que le graphique reste visible sur petits écrans */
        style={{
          background: `linear-gradient(to bottom, #F5F1EB 50%, #1F2937 50%)`,
        }}
      >
        <ConversionChart />
      </section>

      {/* Section "Les Signes qui ne Trompent Pas" - réinsérée */}
      <section className="bg-[#1F2937] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-medium md:text-2xl mb-7 text-center text-white">
              Les Signes qui ne Trompent Pas
            </h2>

            <p className="text-base text-gray-300 text-center mb-14 max-w-lg mx-auto">
              Derrière chaque plateau de performance, je retrouve systématiquement une combinaison de ces symptômes :
            </p>

            <div className="relative">
              {/* Layout responsive avec CSS Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 items-center">
                {/* Points de gauche (desktop) / Points du haut (mobile) */}
                <div className="space-y-7 order-1 lg:order-1">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      Vous pilotez vos <span className="text-[#f6c344] font-semibold">prévisions</span> à l'
                      <strong>instinct</strong>, et chaque fin de trimestre est une source de{" "}
                      <span className="text-red-400 font-semibold">stress</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      Des <span className="text-[#f6c344] font-semibold">deals</span> qui semblaient gagnés{" "}
                      <span className="text-red-400 font-semibold">se bloquent</span> au <strong>dernier moment</strong>
                      , et vous <strong>ne savez pas pourquoi</strong>.
                    </p>
                  </div>
                </div>

                {/* Image centrale */}
                <div className="flex justify-center order-2 lg:order-2">
                  <div className="relative w-full max-w-sm lg:max-w-md">
                    <Image
                      src="/images/stressed-businessman.png"
                      alt="Dirigeant stressé par les notifications commerciales"
                      width={340}
                      height={340}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Points de droite (desktop) / Points du bas (mobile) */}
                <div className="space-y-7 order-3 lg:order-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      Vous avez l'impression de <span className="text-red-400 font-semibold">subir</span> votre{" "}
                      <span className="text-[#f6c344] font-semibold">CRM</span> au lieu de l'utiliser comme une
                      véritable arme de croissance.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      Vous avez encore le <span className="text-red-400 font-semibold">goût amer</span> de cette
                      dernière <span className="text-[#f6c344] font-semibold">formation coûteuse</span> qui{" "}
                      <strong>n'a rien changé</strong> sur le terrain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Points supplémentaires en bas */}
              <div className="mt-10 grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                    Votre <span className="text-[#f6c344] font-semibold">chiffre d'affaires</span> repose sur les
                    épaules d'un ou deux <span className="text-[#f6c344] font-semibold">"héros"</span>, et vous{" "}
                    <span className="text-red-400 font-semibold">redoutez</span> le jour où ils partiront.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                    Vous entendez vos commerciaux présenter l'offre de 5 manières différentes,{" "}
                    <span className="text-red-400 font-semibold">diluant</span> votre message et votre force de frappe.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-14">
              <Button
                className="w-auto md:w-auto bg-[#f6c344] px-5 md:px-8 py-3 md:py-5 text-sm md:text-base font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg max-w-sm md:max-w-none mx-auto"
                onClick={() => handleCTAClick("problems_section")}
              >
                Obtenir mon Score Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle section : Plan en 3 étapes */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-medium md:text-2xl mb-14 text-center">
            Votre Plan vers la Performance en 3 Étapes Simples
          </h2>

          <div className="grid md:grid-cols-3 gap-7">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                <ClipboardList className="h-10 w-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-3">1. Clarifiez votre Situation</h3>
              <p className="text-gray-600 leading-relaxed">
                En 5 minutes, notre questionnaire stratégique vous aide à mettre des mots précis sur vos défis et vos
                objectifs.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                <Search className="h-10 w-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-3">2. Révélez vos Angles Morts</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous analysons vos réponses et identifions les 3 points de friction qui freinent réellement votre
                croissance.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-3">3. Identifiez votre Levier N°1</h3>
              <p className="text-gray-600 leading-relaxed">
                Lors d'une session de 30 minutes, nous définissons ensemble l'action prioritaire qui aura le plus
                d'impact sur vos résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle section : Rôles et Mission */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl md:text-2xl font-medium text-center mb-12">
              <strong>Edouard Tiem</strong>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Première colonne : Photo + première partie du texte */}
              <div className="space-y-8">
                {/* Photo d'Edouard - centrée et plus grande */}
                <div className="flex justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                    <Image
                      src="/images/edouard-tiem.png"
                      alt="Edouard Tiem, fondateur de Simple Sales"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Première partie du texte - mieux structurée */}
                <div className="space-y-6 text-left">
                  <p className="text-base leading-relaxed">
                    Après <span className="font-semibold text-[#1a1a1a]">15 ans</span> à diriger des équipes
                    commerciales, j'ai vu la même histoire se répéter : des{" "}
                    <span className="font-semibold text-[#1a1a1a]">dirigeants brillants</span>, la tête dans le guidon,
                    qui sentaient leur <span className="text-red-600 font-semibold">croissance ralentir</span> sans en
                    comprendre la cause profonde.
                  </p>

                  <p className="text-base leading-relaxed">
                    Ils pensaient que le problème venait du{" "}
                    <span className="font-semibold text-[#1a1a1a]">closing</span>, mais la véritable faille était
                    presque toujours ailleurs : dans la <span className="text-[#f6c344] font-semibold">découverte</span>
                    , ou pire, dans l'absence d'un vrai{" "}
                    <span className="text-[#f6c344] font-semibold">moteur de prospection</span>.
                  </p>
                </div>
              </div>

              {/* Deuxième colonne : deuxième partie du texte - mieux équilibrée */}
              <div className="space-y-6 text-left flex flex-col justify-center">
                <p className="text-base leading-relaxed font-medium">
                  <strong>Une hérésie silencieuse qui coûte des millions.</strong>
                </p>

                <p className="text-base leading-relaxed">
                  Au fil du temps, j'ai compris que le{" "}
                  <span className="font-semibold text-[#1a1a1a]">véritable changement</span> ne vient jamais d'un{" "}
                  <span className="text-red-600 font-semibold">outil miracle</span>, mais de{" "}
                  <span className="text-[#f6c344] font-semibold">trois étapes immuables</span> :
                </p>

                <div className="space-y-5 text-left">
                  <div className="flex items-start space-x-4">
                    <span className="text-[#f6c344] font-bold text-xl flex-shrink-0">1.</span>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold text-[#1a1a1a]">La Prise de Conscience :</span> Oser regarder la
                      vérité en face pour diagnostiquer le{" "}
                      <span className="text-red-600 font-semibold">vrai problème</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-[#f6c344] font-bold text-xl flex-shrink-0">2.</span>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold text-[#1a1a1a]">La Méthode :</span> Appliquer le{" "}
                      <span className="text-[#f6c344] font-semibold">bon système</span>, le bon processus, au bon
                      endroit.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-[#f6c344] font-bold text-xl flex-shrink-0">3.</span>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold text-[#1a1a1a]">La Discipline :</span> Répéter le geste, comme un{" "}
                      <span className="font-semibold text-[#1a1a1a]">athlète</span>, jusqu'à ce qu'il devienne un
                      réflexe pour toute l'équipe.
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed font-medium">
                  C'est pour orchestrer ces <span className="text-[#f6c344] font-semibold">trois temps</span> que j'ai
                  fondé <span className="font-semibold text-[#1a1a1a]">Simple Sales</span> : pour transformer une prise
                  de conscience en une{" "}
                  <span className="text-[#f6c344] font-semibold">machine de croissance pérenne</span>, et vous redonner
                  le <span className="font-semibold text-[#1a1a1a]">contrôle</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-7 text-center text-xl font-medium md:text-2xl">Obtenir mon Score Gratuit</h2>
            <ContactForm variant="original" formType="page_bottom" />
          </div>
        </div>
      </section>

      {/* Section FAQ - déplacée */}
      <section className="bg-[#F6F1EB] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <h2 className="text-lg font-medium md:text-xl mb-7 text-center">
              <strong>Questions fréquentes</strong>
            </h2>
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} icon={faq.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dernier appel à l'action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-xl font-medium md:text-2xl mb-7">
              Prêt à transformer vos angles morts en opportunités ?
            </h2>
            <Button
              className="w-auto md:w-auto bg-[#f6c344] px-5 md:px-8 py-3 md:py-5 text-base md:text-lg font-medium text-[#1a1a1a] hover:bg-[#f4b82e] rounded-lg shadow-lg max-w-sm md:max-w-none mx-auto"
              onClick={() => handleCTAClick("final_cta")}
            >
              Obtenir mon Score Gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer restructuré */}
      <footer className="bg-gray-800 text-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-7">
            {/* Colonne 1 : Logo + Slogan */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">simple.sales</h3>
              <p className="text-gray-300 leading-relaxed">
                Transformer la complexité du terrain en un plan d'action d'une clarté redoutable.
              </p>
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/edouard-tiem", "_blank")}
                className="bg-[#0077B5] hover:bg-[#005885] text-white px-5 py-2 rounded-lg flex items-center gap-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connectons-nous
              </Button>
            </div>

            {/* Colonne 2 : Nos Solutions */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Nos Solutions</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Le Diagnostic (Offert)
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Le Plan d'Accélération
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Le Partenariat Stratégique
                </a>
              </div>
            </div>

            {/* Colonne 3 : Légal */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Légal</h3>
              <div className="space-y-2">
                <a href="/mentions-legales" className="block text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </a>
                <a href="/politique-confidentialite" className="block text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
                <a href="/conditions-generales" className="block text-gray-300 hover:text-white transition-colors">
                  CGU/CGV
                </a>
              </div>
            </div>
          </div>

          {/* Ligne de séparation et copyright */}
          <div className="border-t border-gray-700 mt-7 pt-5 text-center">
            <p className="text-gray-400 text-sm">© 2024 Simple Sales. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
