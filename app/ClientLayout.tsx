"use client"

import type React from "react"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Scan Machine de Vente",
  description: "Audit commercial gratuit en 48h pour dirigeants et directeurs commerciaux",
  provider: {
    "@type": "Person",
    name: "Edouard Tiem",
    jobTitle: "Consultant Commercial",
    url: "https://simplesales.fr",
    sameAs: ["https://www.linkedin.com/in/edouard-tiem"],
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Scan gratuit de votre machine de vente livré en 48h",
  },
  areaServed: "France",
  serviceType: "Audit Commercial",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Dirigeants et Directeurs Commerciaux",
  },
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://simplesales.fr" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-mono">
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-mono">Chargement...</div>
              </div>
            </div>
          }
        >
          <ClientLayoutContent>{children}</ClientLayoutContent>
        </Suspense>
      </body>
    </html>
  )
}
