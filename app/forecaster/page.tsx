import type { Metadata } from "next"
import ForecasterPage from "./ForecasterPage"

export const metadata: Metadata = {
  title: "Forecaster - Analyse Pipeline Commercial | Simple Sales",
  description:
    "Analysez votre pipeline commercial en 90 secondes. Upload votre CRM et obtenez des recommandations personnalisées pour améliorer vos ventes.",
  keywords: "pipeline commercial, analyse CRM, forecasting, ventes B2B, diagnostic commercial",
}

export default function Forecaster() {
  return <ForecasterPage />
}
