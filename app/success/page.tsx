import type { Metadata } from "next"
import SuccessPage from "./SuccessPage"

export const metadata: Metadata = {
  title: "Merci ! - Simple Sales",
  description: "Votre demande a été envoyée avec succès. Vous recevrez votre scan commercial sous 48h.",
}

export default function Success() {
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
      <SuccessPage />
    </>
  )
}
