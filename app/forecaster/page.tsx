import type { Metadata } from "next"
import ForecasterPage from "./ForecasterPage"

export const metadata: Metadata = {
  title: "Forecaster Commercial - Prédisez vos Ventes avec Précision | Simple Sales",
  description:
    "Transformez vos données commerciales en prévisions fiables. Notre outil de forecasting révèle vos angles morts et optimise votre pipeline de vente.",
  keywords: "forecaster commercial, prévision ventes, pipeline commercial, CRM analytics, performance commerciale",
  openGraph: {
    title: "Forecaster Commercial - Prédisez vos Ventes avec Précision",
    description:
      "Transformez vos données commerciales en prévisions fiables. Notre outil de forecasting révèle vos angles morts et optimise votre pipeline de vente.",
    type: "website",
  },
}

export default function Page() {
  return <ForecasterPage />
}
