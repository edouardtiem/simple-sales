import type { Metadata } from "next"
import NotreApprochePage from "./NotreApprochePage"

export const metadata: Metadata = {
  title: "Notre Approche - Méthodologie Simple Sales | Consulting Commercial B2B",
  description:
    "Découvrez la méthodologie Simple Sales pour transformer la complexité commerciale en plan d'action concret. Approche pragmatique basée sur 15+ ans d'expérience en direction commerciale B2B.",
  openGraph: {
    title: "Notre Approche - Méthodologie Simple Sales",
    description:
      "Méthodologie éprouvée pour transformer vos défis commerciaux en opportunités de croissance. Diagnostic, méthode et discipline.",
    url: "https://simplesales.fr/notre-approche",
    siteName: "Simple Sales",
    locale: "fr_FR",
    type: "website",
  },
  keywords: [
    "méthodologie commerciale",
    "approche consulting B2B",
    "transformation commerciale",
    "processus de vente",
    "diagnostic commercial",
    "accompagnement commercial",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Consulting Commercial B2B",
            provider: {
              "@type": "Organization",
              "@id": "https://simplesales.fr/#organization",
            },
            name: "Méthodologie Simple Sales",
            description:
              "Approche en 3 étapes pour transformer vos défis commerciaux : Prise de Conscience (diagnostic du vrai problème), Méthode (application du bon système), Discipline (répétition jusqu'à l'excellence).",
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Dirigeants et Directeurs Commerciaux de PME et ETI B2B",
            },
          }),
        }}
      />
      <NotreApprochePage />
    </>
  )
}
