"use client"

import type React from "react"

import Link from "next/link"
import Footer from "@/components/footer"
import GuideSidePanel, { type GuideSection } from "@/components/guide-side-panel"
import { FloatingHelpCTA } from "@/components/floating-help-cta"
import { getLastUpdateDate } from "@/lib/date-utils"

interface GuidePageWrapperProps {
  children: React.ReactNode
  sections: GuideSection[]
  categoryBadge: string
  title: string
  subtitle: string
  previousGuide?: {
    href: string
    title: string
  }
  nextGuide?: {
    href: string
    title: string
  }
}

export function GuidePageWrapper({
  children,
  sections,
  categoryBadge,
  title,
  subtitle,
  previousGuide,
  nextGuide,
}: GuidePageWrapperProps) {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-sans">
      <FloatingHelpCTA />

      <div className="fixed top-0 left-0 right-0 z-10 bg-white px-4 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-sans text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              <article className="max-w-none">
                <div className="mb-8">
                  <Link
                    href="/nos-guides"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Retour au guide principal
                  </Link>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600">Dernière mise à jour : {getLastUpdateDate()}</p>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#f4d03f] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium">
                    {categoryBadge}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">{title}</h1>
                <p className="text-xl text-gray-600 mb-16 leading-relaxed">{subtitle}</p>

                {children}

                {(previousGuide || nextGuide) && (
                  <div className="border-t border-gray-200 pt-8 mt-12">
                    <div className="flex justify-between gap-4">
                      {previousGuide && (
                        <Link
                          href={previousGuide.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          ← Précédent : {previousGuide.title}
                        </Link>
                      )}
                      {nextGuide && (
                        <Link
                          href={nextGuide.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors ml-auto"
                        >
                          Suivant : {nextGuide.title} →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </article>

              <div className="hidden lg:block">
                <GuideSidePanel sections={sections} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default GuidePageWrapper
