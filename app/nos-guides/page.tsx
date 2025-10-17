import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Nos Guides Stratégiques B2B | Simple Sales - Ressources Gratuites",
  description:
    "Guides pratiques gratuits pour dirigeants de PME B2B : processus commercial, recrutement commercial d'élite, management. Méthodes concrètes basées sur l'expérience terrain.",
  openGraph: {
    title: "Nos Guides Stratégiques B2B | Simple Sales",
    description:
      "Collection de guides pratiques pour résoudre vos défis commerciaux : optimisation processus, recrutement, management. Actions concrètes et méthodes éprouvées.",
    url: "https://simplesales.fr/nos-guides",
    siteName: "Simple Sales",
    locale: "fr_FR",
    type: "website",
  },
  keywords: [
    "guide commercial B2B",
    "processus commercial",
    "recrutement commercial",
    "management commercial",
    "ressources gratuites",
    "formation commerciale",
    "optimisation vente",
  ],
}

export default function NosGuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Nos Guides Stratégiques pour Dirigeants de PME B2B",
            description:
              "Collection de guides pratiques pour résoudre les défis commerciaux : processus de vente, recrutement commercial, management d'équipe.",
            url: "https://simplesales.fr/nos-guides",
            publisher: {
              "@type": "Organization",
              "@id": "https://simplesales.fr/#organization",
            },
            hasPart: [
              {
                "@type": "Article",
                headline: "Comment Réparer Votre Processus Commercial et Stopper les Fuites de Revenus",
                description:
                  "Méthode en 5 étapes pour auditer votre cycle de vente, identifier les fuites de revenus cachées et transformer votre processus en machine de conversion.",
                url: "https://simplesales.fr/nos-guides/processus-commercial",
                author: {
                  "@type": "Person",
                  "@id": "https://simplesales.fr/#founder",
                },
                publisher: {
                  "@type": "Organization",
                  "@id": "https://simplesales.fr/#organization",
                },
                inLanguage: "fr-FR",
              },
              {
                "@type": "Article",
                headline: "Le Guide Définitif : Recruter un Commercial d'Élite en PME",
                description:
                  "Méthode en 3 phases pour transformer vos recrutements commerciaux en accélérateur de croissance. Inclut le test révélateur du jeu de vente.",
                url: "https://simplesales.fr/nos-guides/recruter-commercial-elite",
                author: {
                  "@type": "Person",
                  "@id": "https://simplesales.fr/#founder",
                },
                publisher: {
                  "@type": "Organization",
                  "@id": "https://simplesales.fr/#organization",
                },
                inLanguage: "fr-FR",
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer"
              >
                simple.sales
              </a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="pt-28 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-medium mb-6">
                  Nos Guides Stratégiques pour Dirigeants de PME
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Vous trouverez ici une collection de guides pratiques, sans jargon et basés sur l'expérience terrain.
                  Notre objectif : vous donner des méthodes claires et des actions concrètes pour résoudre les défis
                  commerciaux les plus complexes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Guide 1 - Processus Commercial */}
                <Link href="/nos-guides/processus-commercial" className="block">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-96 flex flex-col">
                    {/* Visual element */}
                    <div className="w-full h-28 bg-gradient-to-br from-[#f6c344] to-[#f4b82e] rounded-lg mb-5 flex items-center justify-center">
                      <div className="text-[#1a1a1a] text-2xl font-bold">📊</div>
                    </div>

                    {/* Category tag */}
                    <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                      PROCESSUS COMMERCIAL
                    </div>

                    <h2 className="text-lg font-semibold mb-4 leading-tight flex-grow">
                      Comment Réparer Votre Processus Commercial et Stopper les Fuites de Revenus
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Découvrez la méthode en 5 étapes pour auditer votre cycle de vente, identifier les "fuites" de
                      revenus cachées et transformer votre processus en une véritable machine de conversion.
                    </p>
                  </div>
                </Link>

                {/* Guide 2 - Recruitment */}
                <Link href="/nos-guides/recruter-commercial-elite" className="block">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-96 flex flex-col">
                    {/* Visual element */}
                    <div className="w-full h-28 bg-gradient-to-br from-[#f6c344] to-[#f4b82e] rounded-lg mb-5 flex items-center justify-center">
                      <div className="text-[#1a1a1a] text-2xl font-bold">🎯</div>
                    </div>

                    {/* Category tag */}
                    <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                      RECRUTEMENT
                    </div>

                    <h2 className="text-lg font-semibold mb-4 leading-tight flex-grow">
                      Le Guide Définitif : Recruter un Commercial d'Élite en PME
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      La méthode en 3 phases pour transformer vos recrutements commerciaux en accélérateur de
                      croissance. Inclut le test révélateur du "jeu de vente" pour identifier les vrais talents.
                    </p>
                  </div>
                </Link>

                {/* Placeholder card for future guides */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm opacity-50 min-h-96 flex flex-col">
                  <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 flex items-center justify-center">
                    <div className="text-gray-400 text-2xl">📈</div>
                  </div>
                  <div className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                    MANAGEMENT
                  </div>
                  <h2 className="text-lg font-semibold mb-4 text-gray-400 flex-grow">Prochain guide en préparation</h2>
                  <p className="text-gray-400 text-sm">
                    Un nouveau guide sera bientôt disponible pour vous accompagner dans vos défis managériaux.
                  </p>
                  <span className="text-gray-400 font-medium text-sm mt-auto">Bientôt disponible</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
