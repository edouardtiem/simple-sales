"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

declare global {
  interface Window {
    lintrk?: (action: string, data?: any) => void
  }
}

interface ContactFormProps {
  onSuccess?: () => void // Callback optionnel pour fermer la modal
  variant?: "original" | "ai_version"
  formType?: "modal" | "page_bottom"
}

export default function ContactForm({ onSuccess, variant = "original", formType = "page_bottom" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isBusinessEmail = (email: string) => {
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "msn.com",
      "aol.com",
      "icloud.com",
      "me.com",
      "free.fr",
      "orange.fr",
      "wanadoo.fr",
      "laposte.net",
      "sfr.fr",
    ]
    const domain = email.split("@")[1]?.toLowerCase()
    return domain && !personalDomains.includes(domain)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isBusinessEmail(formData.email)) {
      alert("Veuillez utiliser une adresse email professionnelle.")
      return
    }

    setIsSubmitting(true)

    // Track form submission
    trackEvent("form_submit", {
      variant: variant,
      form_type: formType,
      email_domain: formData.email.split("@")[1],
    })

    // Track LinkedIn lead event
    if (typeof window !== "undefined" && window.lintrk) {
      window.lintrk("track", { conversion_id: 16776666 })
    }

    // Envoyer le webhook A (initial)
    try {
      const webhookResponse = await fetch("/api/webhook-initial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!webhookResponse.ok) {
        console.error("Failed to send initial webhook:", await webhookResponse.text())
      } else {
        console.log("Initial webhook sent successfully")

        // Track successful conversion
        trackEvent("conversion", {
          variant: variant,
          form_type: formType,
          conversion_type: "form_submit_success",
        })
      }
    } catch (error) {
      console.error("Initial webhook error:", error)
    }

    // Store the basic info and redirect to detailed form
    sessionStorage.setItem("leadInfo", JSON.stringify(formData))

    // Si on est dans une modal, la fermer avant de rediriger
    if (onSuccess) {
      onSuccess()
    }

    router.push("/onboarding")
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email professionnel</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jean@entreprise.fr"
            className="font-mono"
          />
          <p className="text-xs text-gray-500">Seules les adresses email professionnelles sont acceptées</p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#f6c344] font-medium text-[#1a1a1a] hover:bg-[#f4b82e]"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Je commence mon audit gratuit"}
      </Button>
    </form>
  )
}
