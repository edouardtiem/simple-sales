"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface GuideSection {
  id: string
  title: string
}

const guideSections: GuideSection[] = [
  {
    id: "diagnostic",
    title: "1. Diagnostic & Fondamentaux",
  },
  {
    id: "prospection",
    title: "2. Prospection & Acquisition 4.0",
  },
  {
    id: "meddpicc",
    title: "3. Qualification MEDDPICC",
  },
  {
    id: "negociation",
    title: "4. Négociation & Closing",
  },
  {
    id: "technologies",
    title: "5. Technologies & Performance",
  },
  {
    id: "calculateurs",
    title: "Calculateurs Gratuits",
  },
]

export default function GuideSidebar() {
  const [activeSection, setActiveSection] = useState<string>("overview")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    guideSections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  const getProgressHeight = () => {
    if (activeSection === "overview") return "8%"
    if (activeSection === "diagnostic") return "25%"
    if (activeSection === "prospection") return "40%"
    if (activeSection === "meddpicc") return "55%"
    if (activeSection === "negociation") return "70%"
    if (activeSection === "technologies") return "85%"
    if (activeSection === "calculateurs") return "100%"
    return "8%"
  }

  return (
    <aside className="sticky top-24 space-y-6">
      {/* Plan du Cycle de Vente */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-semibold mb-4 text-[#1a1a1a]">Plan du Guide</h3>
        <nav className="space-y-2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
          <div
            className="absolute left-0 w-1 bg-[#f6c344] rounded-full transition-all duration-300 ease-out"
            style={{
              top: 0,
              height: getProgressHeight(),
            }}
          />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`block w-full text-left text-sm py-2 px-3 pl-6 rounded transition-colors ${
              activeSection === "overview" || (!activeSection && window.scrollY < 100)
                ? "bg-[#f6c344] text-[#1a1a1a] font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Vue d'ensemble
          </button>

          {guideSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`block w-full text-left text-sm py-2 px-3 pl-6 rounded transition-colors ${
                activeSection === section.id
                  ? "bg-[#f6c344] text-[#1a1a1a] font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* CTA Audit */}
      <div className="bg-[#1a1a1a] text-white rounded-lg p-6">
        <h3 className="text-sm font-semibold mb-2">Besoin d'aide ?</h3>
        <p className="text-sm text-gray-300 mb-4">Audit Express gratuit - 20 minutes</p>
        <Link
          href="/audit"
          className="block w-full bg-[#f6c344] text-[#1a1a1a] text-center py-2 px-4 rounded font-medium hover:bg-[#f4b82e] transition-colors text-sm"
        >
          Réserver mon audit
        </Link>
      </div>
    </aside>
  )
}
