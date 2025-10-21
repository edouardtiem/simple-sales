import type { Metadata } from "next"
import NegociationClientPage from "./negociation-client-page"
import { getCurrentYear } from "@/lib/date-utils"

export const metadata: Metadata = {
  title: `Négociation Commerciale B2B ${getCurrentYear()} : Méthodes Avancées + Closing | Simple Sales`,
  description:
    "Maîtrisez la négociation B2B moderne : méthode A-CRAC, techniques de closing consultatives, accélération des cycles. Scripts et frameworks inclus.",
}

export default function NegociationPage() {
  return <NegociationClientPage />
}
