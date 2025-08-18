import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "simple.sales",
  description:
    "Audit commercial gratuit en 48h pour dirigeants et directeurs commerciaux. 3 leviers concrets pour améliorer vos ventes. +50 entreprises accompagnées. Livré sous 48h.",
}

export default function Home() {
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
      <ClientPage />
    </>
  )
}
