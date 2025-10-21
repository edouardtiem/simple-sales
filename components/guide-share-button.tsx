"use client"

import { useState } from "react"
import { Share2, Linkedin, Mail, MessageCircle, Link2, Check } from "lucide-react"

interface GuideShareButtonProps {
  title: string
  url?: string
}

export function GuideShareButton({ title, url }: GuideShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")
  const shareMessage = `Découvrez ce guide : ${title}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedInUrl, "_blank", "width=600,height=600")
  }

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailShare = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareMessage + "\n\n" + shareUrl)}`
    window.location.href = emailUrl
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gray-50 hover:bg-white text-gray-900 px-5 py-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 font-medium hover:shadow-xl"
          aria-label="Partager ces méthodes"
        >
          <Share2 className="h-5 w-5 text-[#f4d03f]" />
          <span>Partager ces méthodes</span>
        </button>
      ) : (
        <div className="bg-gray-50 rounded-lg shadow-xl border border-gray-200 p-5 w-72">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2 text-gray-900">
              <Share2 className="h-5 w-5 text-[#f4d03f]" />
              <span className="font-semibold">Partager ces méthodes</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">Déployez ce guide dans les meilleures conditions</p>

          <div className="space-y-2">
            <button
              onClick={handleLinkedInShare}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:bg-gray-100 transition-colors text-left border border-gray-200"
            >
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              <span className="text-sm font-medium text-gray-700">LinkedIn</span>
            </button>

            <button
              onClick={handleEmailShare}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:bg-gray-100 transition-colors text-left border border-gray-200"
            >
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Email</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:bg-gray-100 transition-colors text-left border border-gray-200"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <span className="text-sm font-medium text-gray-700">WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-white hover:bg-gray-100 transition-colors text-left border border-gray-200"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Lien copié !</span>
                </>
              ) : (
                <>
                  <Link2 className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Copier le lien</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
