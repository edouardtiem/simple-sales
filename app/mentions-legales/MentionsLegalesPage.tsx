"use client"

import { JetBrains_Mono } from "next/font/google"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

export default function MentionsLegalesPage() {
  return (
    <div className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-medium mb-8">Mentions légales</h1>

          <div className="space-y-8 text-base leading-relaxed">
            <p>
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
              confiance dans l'économie numérique, il est porté à la connaissance des utilisateurs du site les présentes
              mentions légales.
            </p>

            <section>
              <h2 className="text-xl font-medium mb-4">1. Éditeur du site</h2>
              <div className="space-y-2">
                <p>
                  <strong>Nom :</strong> Edouard Tiem
                </p>
                <p>
                  <strong>Statut juridique :</strong> SASU
                </p>
                <p>
                  <strong>SIRET :</strong> 850 365 701 00026
                </p>
                <p>
                  <strong>Adresse :</strong> 22 Place de l'Ancienne Boucherie
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                    edouard@tiemh.com
                  </a>
                </p>
                <p>
                  <strong>Responsable de publication :</strong> Edouard Tiem
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">2. Hébergeur</h2>
              <div className="space-y-2">
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu du site (textes, images, graphismes, logo, vidéos, etc.) est la propriété
                exclusive d'Edouard Tiem, sauf mentions contraires.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces
                éléments est interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">4. Limitation de responsabilité</h2>
              <p>
                Le contenu du site est fourni à titre informatif. Bien que les informations soient mises à jour
                régulièrement, Edouard Tiem ne peut être tenu responsable d'inexactitudes, d'erreurs ou d'omissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">5. Données personnelles</h2>
              <div className="space-y-2">
                <p>
                  Les données collectées via les formulaires sont destinées uniquement à l'usage professionnel d'Edouard
                  Tiem. Elles ne sont ni vendues ni cédées à des tiers.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit
                  d'accès, de rectification, de suppression et d'opposition.
                </p>
                <p>
                  Pour l'exercer, envoyez un email à :{" "}
                  <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                    edouard@tiemh.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">6. Cookies</h2>
              <p>
                Le site peut utiliser des cookies pour mesurer l'audience ou améliorer l'expérience utilisateur. Vous
                pouvez configurer votre navigateur pour les refuser.
              </p>
            </section>
          </div>

          {/* Back to home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
