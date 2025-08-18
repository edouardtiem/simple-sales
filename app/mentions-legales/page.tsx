import type { Metadata } from "next"
import MentionsLegalesPage from "./MentionsLegalesPage"

export const metadata: Metadata = {
  title: "Mentions légales - Simple Sales",
  description: "Mentions légales du site Simple Sales",
}

export default function MentionsLegales() {
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
      <MentionsLegalesPage />
    </>
  )
}
