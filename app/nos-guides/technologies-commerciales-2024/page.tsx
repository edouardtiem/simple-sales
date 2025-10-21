import { getCurrentYear } from "@/lib/date-utils"
import TechnologiesClientPage from "./content"

export const metadata = {
  title: `Technologies Commerciales ${getCurrentYear()} : Stack RevOps + KPIs Avancés | Simple Sales`,
  description:
    "Maîtrisez les technologies commerciales modernes : stack RevOps, IA, KPIs avancés, predictive analytics. Outils et frameworks inclus.",
}

export default function TechnologiesPage() {
  return <TechnologiesClientPage />
}
