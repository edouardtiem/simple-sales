"use client"

import { JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import Footer from "@/components/footer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

export default function PolitiqueConfidentialitePage() {
  const currentDate = new Date()
  const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2)
  const monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ]
  const dynamicDate = `${monthNames[targetDate.getMonth()]} ${targetDate.getFullYear()}`

  return (
    <main className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity">
              simple.sales
            </Link>
            <Link
              href="/"
              className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity border border-gray-300 px-3 py-1 rounded"
            >
              ← Précédent
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-medium mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Introduction</h2>
              <p>
                Simple Sales s'engage à protéger la confidentialité de vos données personnelles. Cette politique de
                confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations
                personnelles lorsque vous utilisez notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Données collectées</h2>
              <p>Nous collectons les types de données suivantes :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone
                </li>
                <li>
                  <strong>Données professionnelles :</strong> entreprise, poste, secteur d'activité
                </li>
                <li>
                  <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées
                </li>
                <li>
                  <strong>Données de questionnaire :</strong> réponses aux questions de diagnostic commercial
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Finalités du traitement</h2>
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Fournir nos services de diagnostic commercial</li>
                <li>Vous contacter pour planifier des rendez-vous</li>
                <li>Personnaliser nos recommandations</li>
                <li>Améliorer nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Base légale</h2>
              <p>Le traitement de vos données personnelles est basé sur :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Votre consentement</strong> pour l'envoi de communications marketing
                </li>
                <li>
                  <strong>L'exécution du contrat</strong> pour la fourniture de nos services
                </li>
                <li>
                  <strong>Notre intérêt légitime</strong> pour l'amélioration de nos services
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Partage des données</h2>
              <p>
                Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, sauf dans les cas
                suivants :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (hébergement, analytics) sous contrat de confidentialité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Conservation des données</h2>
              <p>
                Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles
                ont été collectées :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier contact
                </li>
                <li>
                  <strong>Données de diagnostic :</strong> 5 ans pour le suivi de la relation client
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger des données inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la suppression de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données
                </li>
                <li>
                  <strong>Droit de limitation :</strong> limiter le traitement de vos données
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                  edouard@tiemh.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Sécurité</h2>
              <p>
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération
                ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation
                du site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter
                certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données
                personnelles, vous pouvez nous contacter à :
              </p>
              <p className="mt-4">
                <strong>Email :</strong>{" "}
                <a href="mailto:edouard@tiemh.com" className="text-blue-600 hover:underline">
                  edouard@tiemh.com
                </a>
                <br />
                <strong>Adresse :</strong> 22 Place de l'ancienne boucherie, 14000, Caen
              </p>
            </section>

            <div className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">Dernière mise à jour : {dynamicDate}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity border border-gray-300 px-4 py-2 rounded"
            >
              ← Retour à la page principale
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
