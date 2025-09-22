import type { Metadata } from "next"
import ForecasterPage from "./ForecasterPage"

export const metadata: Metadata = {
  title: "Fiabilisez votre Forecast : Outil d'Analyse de Pipeline Gratuit",
  description:
    "Vos prévisions de ventes sont-elles fiables ? Déposez votre CSV et obtenez en 90 secondes un diagnostic complet de votre pipeline. Identifiez les deals à risque et révélez la véritable valeur de votre forecast. Outil 100% gratuit.",
  keywords:
    "fiabiliser prévision commerciale, diagnostic pipeline ventes, calculer fiabilité pipeline, outil analyse pipeline commercial, mon forecast est-il juste, réduire incertitude forecast, outil forecast commercial gratuit, template prévision des ventes",
  openGraph: {
    title: "Fiabilisez votre Forecast : Outil d'Analyse de Pipeline Gratuit",
    description:
      "Diagnostic instantané de votre pipeline commercial en 90 secondes. Identifiez les deals à risque et optimisez vos prévisions de ventes.",
    type: "website",
    url: "https://simplesales.fr/forecaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiabilisez votre Forecast : Outil d'Analyse de Pipeline Gratuit",
    description: "Diagnostic instantané de votre pipeline commercial en 90 secondes.",
  },
}

export default function Forecaster() {
  return <ForecasterPage />
}
