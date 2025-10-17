import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Simple Sales - Diagnostic Commercial Gratuit en 48h | Expert B2B",
  description:
    "Audit commercial gratuit en 48h pour dirigeants et directeurs commerciaux. Identifiez les 3 angles morts qui freinent votre croissance. +50 entreprises accompagnées. Résultats concrets garantis.",
  openGraph: {
    title: "Simple Sales - Diagnostic Commercial Gratuit en 48h",
    description:
      "Identifiez les 3 angles morts qui freinent votre croissance commerciale B2B. Audit gratuit livré sous 48h par Edouard Tiem, expert avec 15+ ans d'expérience.",
    url: "https://simplesales.fr",
    siteName: "Simple Sales",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Sales - Diagnostic Commercial Gratuit en 48h",
    description:
      "Identifiez les 3 angles morts qui freinent votre croissance commerciale B2B. Audit gratuit livré sous 48h.",
  },
  keywords: [
    "diagnostic commercial",
    "audit commercial gratuit",
    "consulting commercial B2B",
    "formation commerciale",
    "optimisation processus de vente",
    "closing B2B",
    "prospection LinkedIn",
    "performance commerciale",
    "PME ETI",
    "Edouard Tiem",
  ],
  authors: [{ name: "Edouard Tiem", url: "https://www.linkedin.com/in/edouard-tiem" }],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quel est le « piège » ? Pourquoi est-ce gratuit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C'est simple : c'est la meilleure façon pour nous de prouver notre valeur. Notre conviction est que si l'analyse gratuite que nous vous offrons est suffisamment percutante, certains dirigeants voudront naturellement aller plus loin avec nous. Si ce n'est pas votre cas, vous repartez avec une analyse objective de vos angles morts, sans aucune pression ni obligation.",
                },
              },
              {
                "@type": "Question",
                name: "Est-ce que c'est vraiment adapté à mon entreprise ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui. Ce diagnostic a été spécifiquement conçu pour les dirigeants de PME et d'ETI de services B2B (de 15 à 500 salariés). Il ne s'agit pas d'une approche de grand groupe diluée, mais d'une analyse centrée sur les leviers de croissance agiles qui fonctionnent dans votre contexte.",
                },
              },
              {
                "@type": "Question",
                name: "Vais-je recevoir un simple rapport automatisé ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non. C'est un processus hybride qui garantit la pertinence. Notre système analyse les données brutes de votre questionnaire pour identifier des schémas. Mais ensuite, chaque rapport est personnellement revu, enrichi et validé par Edouard pour garantir que les angles morts identifiés correspondent à votre réalité de terrain.",
                },
              },
              {
                "@type": "Question",
                name: "Combien de temps cela va-t-il vraiment me prendre ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le processus est radicalement efficace : 5 minutes chrono pour remplir le questionnaire en ligne, vous recevez votre rapport d'analyse personnalisé sous 48h, puis une session de travail de 30 minutes pour discuter des résultats.",
                },
              },
              {
                "@type": "Question",
                name: "Que se passe-t-il juste après avoir rempli le questionnaire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dès que vous validez le questionnaire, vous accédez directement à l'agenda pour choisir le créneau de 30 minutes qui vous arrange pour la session de travail. Si vous préférez attendre, vous retrouverez ce même lien dans l'email contenant votre score pour réserver la session plus tard.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Diagnostic Commercial B2B",
            provider: {
              "@type": "Organization",
              "@id": "https://simplesales.fr/#organization",
            },
            name: "Diagnostic Commercial Gratuit en 48h",
            description:
              "Audit commercial personnalisé pour identifier les 3 angles morts qui freinent votre croissance commerciale B2B. Analyse approfondie de votre processus de vente, CRM, équipe commerciale et stratégie de prospection.",
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Dirigeants et Directeurs Commerciaux de PME et ETI B2B",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              description: "Diagnostic commercial gratuit livré sous 48h avec session de travail de 30 minutes incluse",
            },
          }),
        }}
      />
      <ClientPage />
    </>
  )
}
