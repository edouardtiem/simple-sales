import type { Metadata } from "next"
import PolitiqueConfidentialitePage from "./PolitiqueConfidentialitePage"

export const metadata: Metadata = {
  title: "Politique de confidentialité - Simple Sales",
  description: "Politique de confidentialité du site Simple Sales",
}

export default function PolitiqueConfidentialite() {
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
      <PolitiqueConfidentialitePage />
    </>
  )
}
