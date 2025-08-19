"use client"

import { JetBrains_Mono } from "next/font/google"
import Link from "next/link"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["Monaco", "Menlo", "Ubuntu Mono", "monospace"],
})

export default function MentionsLegalesPage() {
  return (
    <main className={`${jetbrainsMono.variable} min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono`}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity">
              simple.sales
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-medium mb-8">Mentions Légales</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Éditeur du site</h2>
              <p>
                <strong>Raison sociale :</strong> ETH
                <br />
                <strong>Forme juridique :</strong> SASU
                <br />
                <strong>Adresse :</strong> 22 Place de l'ancienne boucherie, 14000, Caen
                <br />
                <strong>Téléphone :</strong> +33 6 33 24 16 59
                <br />
                <strong>Email :</strong> edouard@tiemh.com
                <br />
                <strong>Directeur de la publication :</strong> Edouard Tiem
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Hébergement</h2>
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
                <br />
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                <br />
                <strong>Site web :</strong>{" "}
                <a href="https://vercel.com" className="text-blue-600 hover:underline">
                  https://vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
                propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mt-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                le signaler par email, à l'adresse contact@simple-sales.fr, en décrivant le problème de la manière la
                plus précise possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Liens hypertextes</h2>
              <p>
                Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources
                disponibles sur Internet. Simple Sales ne dispose d'aucun moyen pour contrôler les sites en connexion
                avec ses sites internet.
              </p>
              <p className="mt-4">
                Simple Sales ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
                Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
                contenu de ces sites ou sources externes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-[#1a1a1a]">Droit applicable</h2>
              <p>
                Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit
                français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de
                toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour
                connaître de ce litige.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">Dernière mise à jour : 15 janvier 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
