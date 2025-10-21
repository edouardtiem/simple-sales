"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FloatingHelpCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show button when scrolled more than 200px
      setIsVisible(scrollPosition > 200)
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)

    // Check initial position
    handleScroll()

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg border border-gray-800">
        <Link href="/audit" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <span className="font-semibold">Besoin d'aide ?</span>
          <span className="text-sm text-gray-300">Audit Express gratuit - 20 minutes</span>
          <Button size="sm" className="bg-[#f4d03f] text-gray-900 hover:bg-[#f4d03f]/90 rounded-full h-8 px-4">
            Réserver mon audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
