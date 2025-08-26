"use client"

import { JetBrains_Mono } from "next/font/google"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

export default function PolitiqueConfidentialitePage() {
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
          <h1 className="text-3xl font-medium mb-8 flex items-center">
            <span className="mr-3">🔐</span>
            Politique de confidentialité
          </h1>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-medium mb-4">1. Préambule</h2>
              <div className="space-y-4">
                <p>
                  Cette politique de confidentialité a pour but d'expliquer de manière transparente comment sont
                  collectées, utilisées et protégées vos données personnelles sur le site simplesales.fr.
                </p>
                <p>
                  Edouard Tiem s'engage à respecter le Règlement Général sur la Protection des Données (RGPD – Règlement
                  UE 2016/679).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">2. Responsable du traitement</h2>
              <div className="space-y-2">
                <p>
                  <strong>Éditeur :</strong> Edouard Tiem – SASU
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
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">3. Données collectées</h2>
              <p className="mb-4">
                Nous collectons uniquement les données nécessaires au bon fonctionnement du service.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Données collectées via le formulaire :</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom</li>
                    <li>Adresse email</li>
                    <li>Poste / fonction</li>
                    <li>Taille de l'équipe commerciale</li>
                    <li>Réponses au questionnaire de qualification</li>
                    <li>Autres données librement saisies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Données techniques (le cas échéant) :</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Données de navigation (via cookies ou outils d'analyse anonymisés)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">4. Finalités du traitement</h2>
              <p className="mb-4">Les données sont collectées dans les buts suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Réaliser et livrer le scan commercial gratuit</li>
                <li>Préparer un échange de restitution personnalisé</li>
                <li>Proposer un accompagnement ou une prestation commerciale</li>
                <li>Suivre les performances du site (via analytics)</li>
              </ul>
              <p className="mt-4 font-medium">Aucune donnée n'est revendue ni transmise à des tiers non autorisés.</p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">5. Durée de conservation</h2>
              <div className="space-y-2">
                <p>
                  <strong>Données commerciales :</strong> conservées pendant 3 ans après le dernier contact actif.
                </p>
                <p>
                  <strong>Données techniques (cookies) :</strong> selon leur finalité, jusqu'à 13 mois maximum.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">6. Vos droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification ou suppression</li>
                <li>Droit à la limitation ou opposition au traitement</li>
                <li>Droit à la portabilité</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, il vous suffit d'écrire à :{" "}
                <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                  edouard@tiemh.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">7. Sécurité des données</h2>
              <div className="space-y-2">
                <p>
                  Les données sont stockées sur des outils sécurisés (formulaires, CRM, plateforme d'automatisation).
                </p>
                <p>
                  Des mesures techniques et organisationnelles sont mises en place pour éviter tout accès non autorisé.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">8. Cookies</h2>
              <div className="space-y-4">
                <p>Le site peut utiliser des cookies :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>pour assurer son bon fonctionnement,</li>
                  <li>pour mesurer l'audience (via outils anonymisés comme Plausible, Google Analytics, etc.)</li>
                </ul>
                <p>Vous pouvez refuser les cookies via les réglages de votre navigateur.</p>
              </div>
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
