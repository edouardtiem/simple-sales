"use client"

import type React from "react"

import { useState } from "react"

interface MappingStepProps {
  onComplete: (data: any) => void
}

export default function MappingStep({ onComplete }: MappingStepProps) {
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    teamSize: "",
    avgDealSize: "",
    salesCycle: "",
    currentChallenges: [] as string[],
    pipelineStages: "",
    conversionRate: "",
    monthlyLeads: "",
  })

  const challenges = [
    "Pipeline qui stagne",
    "Cycle de vente trop long",
    "Taux de conversion faible",
    "Équipe commerciale démotivée",
    "Manque de prospects qualifiés",
    "Difficultés de closing",
    "Prévisions imprécises",
    "Processus commercial flou",
  ]

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      currentChallenges: prev.currentChallenges.includes(challenge)
        ? prev.currentChallenges.filter((c) => c !== challenge)
        : [...prev.currentChallenges, challenge],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete(formData)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full mb-6">
            Diagnostic Commercial
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">Analysons Votre Situation Commerciale</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Quelques questions pour comprendre votre contexte et identifier les leviers d'amélioration de votre
            performance commerciale.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Secteur d'activité</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData((prev) => ({ ...prev, industry: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  required
                >
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="tech">Technologie</option>
                  <option value="services">Services B2B</option>
                  <option value="manufacturing">Industrie</option>
                  <option value="consulting">Conseil</option>
                  <option value="finance">Finance</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>

            {/* Team & Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Taille de l'équipe commerciale</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData((prev) => ({ ...prev, teamSize: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="1-2">1-2 personnes</option>
                  <option value="3-5">3-5 personnes</option>
                  <option value="6-10">6-10 personnes</option>
                  <option value="10+">Plus de 10</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ticket moyen (€)</label>
                <input
                  type="number"
                  value={formData.avgDealSize}
                  onChange={(e) => setFormData((prev) => ({ ...prev, avgDealSize: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  placeholder="ex: 50000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cycle de vente moyen</label>
                <select
                  value={formData.salesCycle}
                  onChange={(e) => setFormData((prev) => ({ ...prev, salesCycle: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="1-3">1-3 mois</option>
                  <option value="3-6">3-6 mois</option>
                  <option value="6-12">6-12 mois</option>
                  <option value="12+">Plus de 12 mois</option>
                </select>
              </div>
            </div>

            {/* Current Challenges */}
            <div>
              <label className="block text-sm font-medium mb-4">
                Quels sont vos principaux défis actuels ? (plusieurs choix possibles)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {challenges.map((challenge) => (
                  <label key={challenge} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.currentChallenges.includes(challenge)}
                      onChange={() => handleChallengeToggle(challenge)}
                      className="w-4 h-4 text-[#f6c344] border-gray-300 rounded focus:ring-[#f6c344]"
                    />
                    <span className="text-sm">{challenge}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pipeline Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Taux de conversion global (%)</label>
                <input
                  type="number"
                  value={formData.conversionRate}
                  onChange={(e) => setFormData((prev) => ({ ...prev, conversionRate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  placeholder="ex: 15"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Leads mensuels</label>
                <input
                  type="number"
                  value={formData.monthlyLeads}
                  onChange={(e) => setFormData((prev) => ({ ...prev, monthlyLeads: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
                  placeholder="ex: 50"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-8 py-4 font-medium rounded-lg transition-colors text-lg"
              >
                Analyser Mon Pipeline 🔍
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
