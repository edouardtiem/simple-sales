"use client"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import ContactForm from "@/components/contact-form"
import { trackEvent } from "@/lib/analytics"
import { useEffect } from "react"

declare global {
  interface Window {
    lintrk?: (action: string, data?: any) => void
  }
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  variant?: "original" | "ai_version"
}

export default function ContactModal({ isOpen, onClose, variant = "original" }: ContactModalProps) {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      // Track modal open
      trackEvent("modal_open", {
        variant: variant,
        modal_type: "contact_form",
      })
    }
  }, [isOpen, variant])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-medium font-mono">Je commande mon scan gratuit</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <ContactForm onSuccess={onClose} variant={variant} formType="modal" />
        </div>
      </div>
    </div>
  )
}
