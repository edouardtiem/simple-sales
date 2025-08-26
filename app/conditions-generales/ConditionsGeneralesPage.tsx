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

export default function ConditionsGeneralesPage() {
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
          <h1 className="text-3xl font-medium mb-8">Conditions Générales d'Utilisation et de Vente</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 1 - Objet</h2>
              <p>
                Les présentes conditions générales d'utilisation et de vente (CGU/CGV) régissent l'utilisation du site
                web simple-sales.fr et la fourniture des services de diagnostic commercial proposés par Simple Sales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 2 - Acceptation des conditions</h2>
              <p>
                L'utilisation du site web et la commande de nos services impliquent l'acceptation pleine et entière des
                présentes CGU/CGV. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 3 - Processus de commande</h2>
              <p>Pour bénéficier du diagnostic gratuit :</p>
              <ol className="list-decimal list-inside mt-4 space-y-2">
                <li>Remplissez le formulaire de contact sur notre site</li>
                <li>Complétez le questionnaire de diagnostic qui vous sera envoyé</li>
                <li>Recevez votre rapport d'analyse sous 48h</li>
                <li>Planifiez votre session de conseil gratuite</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 4 - Prix et paiement</h2>
              <p>
                <strong>Diagnostic gratuit :</strong> Le diagnostic initial et la session de conseil de 30 minutes sont
                entièrement gratuits, sans engagement de votre part.
              </p>
              <p className="mt-4">
                <strong>Services payants :</strong> Les services d'accompagnement personnalisés font l'objet d'un devis
                sur mesure. Les prix sont exprimés en euros TTC. Le paiement s'effectue selon les modalités convenues
                dans le devis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 5 - Droit de rétractation</h2>
              <p>
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être
                exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de
                rétractation et dont l'exécution a commencé avec votre accord préalable exprès.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 6 - Obligations du client</h2>
              <p>Le client s'engage à :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Fournir des informations exactes et complètes</li>
                <li>Respecter les rendez-vous planifiés ou les annuler au moins 24h à l'avance</li>
                <li>Utiliser les services dans le cadre de son activité professionnelle</li>
                <li>Ne pas divulguer les informations confidentielles échangées lors des sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 7 - Obligations de Simple Sales</h2>
              <p>Simple Sales s'engage à :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Fournir un diagnostic personnalisé et de qualité</li>
                <li>Respecter la confidentialité des informations communiquées</li>
                <li>Livrer le rapport d'analyse dans les délais annoncés (48h)</li>
                <li>Assurer la disponibilité pour la session de conseil gratuite</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 8 - Confidentialité</h2>
              <p>
                Simple Sales s'engage à maintenir la confidentialité de toutes les informations communiquées par le
                client dans le cadre de la prestation. Ces informations ne seront utilisées que dans le cadre de la
                mission confiée et ne seront pas divulguées à des tiers sans autorisation expresse du client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 9 - Responsabilité</h2>
              <p>
                Simple Sales ne saurait être tenue responsable des dommages indirects, tels que la perte de chiffre
                d'affaires, de bénéfices ou de clientèle, résultant de l'utilisation ou de l'impossibilité d'utiliser
                les services proposés.
              </p>
              <p className="mt-4">
                La responsabilité de Simple Sales est limitée au montant des sommes effectivement versées par le client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 10 - Force majeure</h2>
              <p>
                Simple Sales ne pourra être tenue responsable de tout retard ou inexécution consécutif à la survenance
                d'un cas de force majeure habituellement reconnu par la jurisprudence française.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 11 - Modification des CGU/CGV</h2>
              <p>
                Simple Sales se réserve le droit de modifier les présentes CGU/CGV à tout moment. Les modifications
                entreront en vigueur dès leur publication sur le site web. Il appartient au client de consulter
                régulièrement les CGU/CGV en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Article 12 - Droit applicable et juridiction</h2>
              <p>
                Les présentes CGU/CGV sont soumises au droit français. En cas de litige, et après tentative de
                résolution amiable, les tribunaux français seront seuls compétents.
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
