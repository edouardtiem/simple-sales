import type { Metadata } from "next"
import ConditionsGeneralesPage from "./ConditionsGeneralesPage"

export const metadata: Metadata = {
  title: "Conditions générales - Simple Sales",
  description: "Conditions générales d'utilisation et de vente du site Simple Sales",
}

export default function ConditionsGenerales() {
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
      <ConditionsGeneralesPage />
    </>
  )
}
