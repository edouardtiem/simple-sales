import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "simple.sales",
  description:
    "Audit commercial gratuit en 48h pour dirigeants et directeurs commerciaux. 3 leviers concrets pour améliorer vos ventes. +50 entreprises accompagnées. Livré sous 48h.",
  icons: {
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={jetbrainsMono.variable}>
      <body className="font-mono">
        <Script
          src="https://app.lemlist.com/api/visitors/tracking?k=NPtst5jGEtlTfexZH1hwoKuHD8ekFDW3Qog%2BiV7SQww%3D&t=tea_2XDo294Wtks6F4K9e"
          strategy="afterInteractive"
        />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics debug={process.env.NODE_ENV === "development"} />
      </body>
    </html>
  )
}
