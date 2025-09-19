"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Mail, Download, CheckCircle } from "lucide-react"

interface ValueGateModalProps {
  isOpen: boolean
  onClose: () => void
  onEmailSubmit: (email: string) => void
  onExportPDF: () => void
}

export default function ValueGateModal({ isOpen, onClose, onEmailSubmit, onExportPDF }: ValueGateModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await onEmailSubmit(email)
      setIsSubmitted(true)

      // Auto-close after success
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setEmail("")
      }, 2000)
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleExportClick = () => {
    onExportPDF()
    onClose()
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Merci !</h3>
            <p className="text-slate-600">Votre rapport complet vous a été envoyé par email.</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Temps d'analyse écoulé
          </DialogTitle>
          <DialogDescription>
            Votre analyse gratuite de 90 secondes est terminée. Pour accéder au rapport complet avec toutes les
            recommandations, laissez-nous votre email.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Alert className="border-emerald-200 bg-emerald-50">
            <Mail className="h-4 w-4 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              <strong>Rapport complet inclus :</strong>
              <ul className="mt-2 text-sm space-y-1">
                <li>• Plan d'action détaillé (5 pages)</li>
                <li>• Recommandations personnalisées</li>
                <li>• Templates de qualification</li>
                <li>• Benchmarks sectoriels</li>
              </ul>
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Adresse email professionnelle</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre.email@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3">
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                {isSubmitting ? "Envoi..." : "Recevoir le rapport complet"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleExportClick}
                className="flex items-center gap-2 bg-transparent"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-xs text-slate-500">
              En soumettant ce formulaire, vous acceptez de recevoir des conseils commerciaux de Simple Sales.
              <br />
              Pas de spam, désinscription en 1 clic.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
