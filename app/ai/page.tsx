import type { Metadata } from "next"
import ClientPageAI from "./ClientPageAI"

export const metadata: Metadata = {
  title: "Simple Sales - IA et Machine de Vente",
  description:
    "Diagnostic commercial en 48h avec des outils d'analyse dernière génération. L'IA accélère, l'humain décide. +50 entreprises accompagnées.",
}

export default function AIPage() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZ51W42YFS"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NZ51W42YFS');
          `,
        }}
      />
      <ClientPageAI />
    </>
  )
}
