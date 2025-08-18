import type { Metadata } from "next"
import AuditPage from "./AuditPage"

export const metadata: Metadata = {
  title: "Diagnostic Commercial - Simple Sales",
  description:
    "Complétez ce questionnaire en 5 minutes pour recevoir votre analyse personnalisée et actionnable sous 48h",
  robots: "noindex, nofollow",
}

export default function Audit() {
  return <AuditPage />
}
