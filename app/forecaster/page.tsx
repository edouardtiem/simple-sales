import type { Metadata } from "next"
import ForecasterPage from "./ForecasterPage"

export const metadata: Metadata = {
  title: "Diagnostic Commercial Gratuit | Analysez Votre Pipeline de Vente",
  description:
    "Obtenez un diagnostic complet de votre processus commercial en 5 minutes. Identifiez les blocages de votre pipeline et découvrez des solutions concrètes pour augmenter vos ventes.",
  keywords: "diagnostic commercial, analyse pipeline, processus vente, blocage commercial, audit commercial gratuit",
  openGraph: {
    title: "Diagnostic Commercial Gratuit | Analysez Votre Pipeline de Vente",
    description:
      "Obtenez un diagnostic complet de votre processus commercial en 5 minutes. Identifiez les blocages de votre pipeline et découvrez des solutions concrètes pour augmenter vos ventes.",
    type: "website",
  },
  robots: "index, follow",
}

export default function Page() {
  return <ForecasterPage />
}
