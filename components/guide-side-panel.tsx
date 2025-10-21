"use client"
import { useEffect, useState } from "react"
import { Linkedin, Mail, MessageCircle, Copy, Check } from "lucide-react"

export interface GuideSection {
  id: string
  title: string
}

interface GuideSidePanelProps {
  sections: GuideSection[]
  guideTitle?: string
}

export default function GuideSidePanel({ sections, guideTitle = "Plan du Guide" }: GuideSidePanelProps) {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [copied, setCopied] = useState(false)

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

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections])

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
    const sectionIndex = sections.findIndex((s) => s.id === activeSection)
    if (sectionIndex === -1) return "0%"
    return `${((sectionIndex + 1) / (sections.length + 1)) * 100}%`
  }

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const title = "Guide SimpleSales"
    const message = "Découvrez ce guide complet pour améliorer vos performances commerciales"

    switch (platform) {
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        break
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
          message + " " + url,
        )}`
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(message + " " + url)}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
  }

  return (
    <aside className="sticky top-24 space-y-6">
      {/* Plan du Guide */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-semibold mb-4 text-[#1a1a1a]">{guideTitle}</h3>
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

          {sections.map((section) => (
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

      {/* Partager ces méthodes */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-semibold mb-2 text-[#1a1a1a]">Partager ces méthodes</h3>
        <p className="text-sm text-gray-600 mb-4">Déployez ce guide dans les meilleures conditions</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleShare("linkedin")}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => handleShare("email")}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
          >
            <Mail className="w-4 h-4 text-gray-600" />
            <span>Email</span>
          </button>
          <button
            onClick={() => handleShare("whatsapp")}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => handleShare("copy")}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copié !</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-600" />
                <span>Copier</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}
