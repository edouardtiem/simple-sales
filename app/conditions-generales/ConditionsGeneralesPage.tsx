"use client"

import { JetBrains_Mono } from "next/font/google"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

export default function ConditionsGeneralesPage() {
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
          <h1 className="text-3xl font-medium mb-8">Conditions Générales d'Utilisation & de Vente (CGU/CGV)</h1>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-medium mb-4">1. Objet</h2>
              <div className="space-y-4">
                <p>
                  Les présentes conditions régissent l'utilisation du site simplesales.fr ainsi que les prestations
                  proposées par Edouard Tiem :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Le scan gratuit de la machine de vente</li>
                  <li>L'audit commercial approfondi</li>
                  <li>L'accompagnement en abonnement mensuel</li>
                </ul>
                <p className="font-medium">
                  Toute utilisation du site implique l'acceptation sans réserve des présentes conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">2. Prestations proposées</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">a. Scan gratuit</h3>
                  <div className="space-y-2 ml-4">
                    <p>
                      <strong>Format :</strong> document PDF synthétique (env. 4 pages)
                    </p>
                    <p>
                      <strong>Basé sur :</strong> données publiques (site web, LinkedIn) + réponses au questionnaire
                    </p>
                    <p>
                      <strong>Délai de livraison :</strong> sous 48h ouvrées (hors congés)
                    </p>
                    <p>
                      <strong>Aucun engagement requis</strong>
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                      <p className="text-amber-800">
                        <span className="font-medium">⚠️ Important :</span> Ce scan n'est pas un audit interne, mais un
                        retour externe structuré, à visée d'amélioration commerciale.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">b. Audit payant</h3>
                  <div className="space-y-2 ml-4">
                    <p>
                      <strong>Tarif :</strong> 1 299 € HT
                    </p>
                    <p>
                      <strong>Comprend :</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Un entretien structuré de 2h (à distance)</li>
                      <li>
                        Un diagnostic approfondi : état des lieux, ce qui fonctionne bien, ce qui freine la performance
                      </li>
                      <li>Un plan d'action clair à 30, 60 et 90 jours</li>
                    </ul>
                    <p>
                      <strong>Délai de livraison :</strong> sous 48h ouvrées après l'entretien
                    </p>
                    <p className="font-medium text-red-600">
                      Le paiement est requis avant l'entretien, exclusivement en ligne via Stripe
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">c. Abonnement (optionnel)</h3>
                  <div className="space-y-2 ml-4">
                    <p>
                      <strong>Tarif :</strong> 399 € HT / mois
                    </p>
                    <p>
                      <strong>Comprend :</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Des demandes illimitées, traitées une à la fois</li>
                      <li>Réponse sous 48h ouvrées (hors congés)</li>
                      <li>Un traitement combinant expertise humaine et intelligence artificielle</li>
                    </ul>
                    <p className="font-medium text-red-600">
                      Le paiement est requis avant la première demande, exclusivement en ligne via Stripe
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">3. Modalités de paiement</h2>
              <div className="space-y-4">
                <p>Toutes les prestations payantes sont à régler en ligne via Stripe.</p>
                <p className="font-medium">Aucun virement ni autre moyen de paiement n'est accepté.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Audit :</strong> paiement exigé avant la date de l'entretien
                  </li>
                  <li>
                    <strong>Abonnement :</strong> paiement avant la première demande (renouvellement automatique chaque
                    mois)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">4. Rétractation</h2>
              <div className="space-y-2">
                <p>En cas de prestation déjà entamée (ex : audit réalisé), aucun remboursement ne pourra être exigé.</p>
                <p>
                  Si le paiement a été effectué mais que la prestation n'a pas débuté, un remboursement peut être
                  envisagé sur simple demande à{" "}
                  <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                    edouard@tiemh.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">5. Propriété intellectuelle</h2>
              <div className="space-y-2">
                <p>
                  Tous les contenus (scan, audit, recommandations) produits par Edouard Tiem restent sa propriété
                  intellectuelle.
                </p>
                <p>Ils ne peuvent être reproduits, diffusés ou réutilisés sans autorisation écrite préalable.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">6. Responsabilité</h2>
              <div className="space-y-2">
                <p>Les prestations ont pour objectif d'apporter un éclairage externe et des pistes d'optimisation.</p>
                <p>Elles ne constituent ni une garantie de résultat, ni un engagement contractuel de performance.</p>
                <p className="font-medium">
                  Le client reste responsable de l'exécution ou non des recommandations fournies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">7. Données personnelles</h2>
              <p>
                Les données collectées sont utilisées uniquement pour le bon déroulement des prestations.
                <br />
                Voir notre{" "}
                <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                  politique de confidentialité
                </a>{" "}
                pour plus de détails.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">8. Litiges</h2>
              <div className="space-y-2">
                <p>En cas de litige, un règlement amiable sera recherché en priorité.</p>
                <p>À défaut, les tribunaux compétents seront ceux du ressort du siège social d'Edouard Tiem.</p>
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
