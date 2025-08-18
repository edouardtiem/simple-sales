import type { Metadata } from "next"
import OnboardingForm from "./OnboardingForm"

export const metadata: Metadata = {
  title: "Questionnaire - Simple Sales",
  description: "Complétez votre profil pour recevoir votre scan commercial personnalisé sous 48h.",
}

export default function OnboardingPage() {
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
      <OnboardingForm />
    </>
  )
}
