import type { Metadata } from "next"
import ForecasterPage from "./ForecasterPage"

export const metadata: Metadata = {
  title: "Simple Sales Forecaster - Analysez votre pipeline commercial",
  description:
    "Uploadez votre fichier CRM et obtenez une analyse complète de votre pipeline commercial avec des recommandations personnalisées.",
}

export default function Forecaster() {
  return <ForecasterPage />
}
