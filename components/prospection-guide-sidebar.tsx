"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface GuideSection {
  id: string
  title: string
}

const guideSections: GuideSection[] = [
  {
    id: "challenge",
    title: "Le Défi",
  },
  {
    id: "statistics",
    title: "État de la Prospection 2024",
  },
  {
    id: "pillars",
    title: "3 Piliers Modernes",
  },
  {
    id: "cold-calling",
    title: "Cold Calling 3.0",
  },
  {
    id: "social-selling",
    title: "Social Selling LinkedIn",
  },
  {
    id: "ai-automation",
    title: "IA et Automation",
  },
  {
    id: "multichannel",
    title: "Orchestration Multicanale",
  },
  {
    id: "implementation",
    title: "Plan d'Implémentation",
  },
  {
    id: "case-study",
    title: "Cas Client",
  },
]

export default function ProspectionGuideSidebar() {
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
    const sectionIndex = guideSections.findIndex((s) => s.id === activeSection)
    if (sectionIndex === -1) return "0%"
    return `${((sectionIndex + 1) / (guideSections.length + 1)) * 100}%`
  }

  return (
    <aside className="sticky top-24 space-y-6">
      {/* Plan du Guide Prospection */}
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
            Introduction
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
