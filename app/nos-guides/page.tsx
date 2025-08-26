import Link from "next/link"
import Footer from "@/components/footer"

export default function NosGuidesPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono">
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

      {/* Main content */}
      <main className="pt-28 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-medium mb-6">Nos Guides Stratégiques pour Dirigeants de PME</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Vous trouverez ici une collection de guides pratiques, sans jargon et basés sur l'expérience terrain.
                Notre objectif : vous donner des méthodes claires et des actions concrètes pour résoudre les défis
                commerciaux les plus complexes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Guide 1 - Processus Commercial */}
              <Link href="/nos-guides/processus-commercial" className="block">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  {/* Visual element */}
                  <div className="w-full h-28 bg-gradient-to-br from-[#f6c344] to-[#f4b82e] rounded-lg mb-5 flex items-center justify-center">
                    <div className="text-[#1a1a1a] text-2xl font-bold">📊</div>
                  </div>

                  {/* Category tag */}
                  <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-xs font-medium px-3 py-1 rounded-full mb-4">
                    PROCESSUS COMMERCIAL
                  </div>

                  <h2 className="text-lg font-semibold mb-4 leading-tight">
                    Comment Réparer Votre Processus Commercial et Stopper les Fuites de Revenus
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Découvrez la méthode en 5 étapes pour auditer votre cycle de vente, identifier les "fuites" de
                    revenus cachées et transformer votre processus en une véritable machine de conversion.
                  </p>
                </div>
              </Link>

              {/* Placeholder cards for future guides */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm opacity-50">
                <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 flex items-center justify-center">
                  <div className="text-gray-400 text-2xl">📈</div>
                </div>
                <div className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  MANAGEMENT
                </div>
                <h2 className="text-lg font-semibold mb-4 text-gray-400">Prochain guide en préparation</h2>
                <p className="text-gray-400 mb-4 text-sm">
                  Un nouveau guide sera bientôt disponible pour vous accompagner dans vos défis managériaux.
                </p>
                <span className="text-gray-400 font-medium text-sm">Bientôt disponible</span>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm opacity-50">
                <div className="w-full h-28 bg-gray-100 rounded-lg mb-5 flex items-center justify-center">
                  <div className="text-gray-400 text-2xl">🎯</div>
                </div>
                <div className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  STRATÉGIE
                </div>
                <h2 className="text-lg font-semibold mb-4 text-gray-400">Prochain guide en préparation</h2>
                <p className="text-gray-400 mb-4 text-sm">
                  Un nouveau guide sera bientôt disponible pour vous accompagner dans vos défis stratégiques.
                </p>
                <span className="text-gray-400 font-medium text-sm">Bientôt disponible</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
