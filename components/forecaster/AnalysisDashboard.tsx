"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Target,
  Download,
  Clock,
  Brain,
  Lightbulb,
  Shield,
  Zap,
  Calendar,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import AnalysisTimer from "./AnalysisTimer"
import ValueGateModal from "./ValueGateModal"

interface AnalysisData {
  totalPipeline: number
  weightedPipeline: number
  averageDealSize: number
  conversionRate: number
  averageSalesCycle: number
  totalDeals: number
  dealsByStage: Array<{
    stage: string
    count: number
    value: number
    status?: "healthy" | "at-risk" | "lost" | "won"
    lostCount?: number
    atRiskCount?: number
  }>
  riskAnalysis: {
    highRisk: number
    mediumRisk: number
    lowRisk: number
  }
  recommendations: Array<{
    type: "critical" | "warning" | "success"
    title: string
    description: string
    impact: string
  }>
  overallScore: number
  monthlyPipeline?: Array<{
    month: string
    totalValue: number
    weightedValue: number
    dealCount: number
    deals: any[]
  }>
  enhancedDeals?: any[]
  aiInsights?: {
    overallScore: number
    insights: string[]
    recommendations: Array<{
      title: string
      description: string
      priority: "high" | "medium" | "low"
      impact: string
    }>
    riskFactors: string[]
    opportunities: string[]
    nextActions: string[]
  }
}

interface AnalysisDashboardProps {
  data: AnalysisData
  onExportPDF: () => void
  onBackToMapping: () => void
}

const COLORS = ["#10b981", "#f59e0b", "#ef4444"]

export default function AnalysisDashboard({ data, onExportPDF, onBackToMapping }: AnalysisDashboardProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [showValueGate, setShowValueGate] = useState(false)

  useEffect(() => {
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnalyzing(false)
          setIsTimerActive(true)
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const handleTimeUp = () => {
    setIsTimerActive(false)
    setShowValueGate(true)
  }

  const handleEmailSubmit = async (email: string) => {
    console.log("[v0] Email submitted:", email)

    // Send email to webhook
    try {
      const response = await fetch("/api/forecaster/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysisData: data,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit email")
      }
    } catch (error) {
      console.error("Email submission error:", error)
      throw error
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600"
    if (score >= 60) return "text-amber-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 80)
      return { label: "Excellent", variant: "default" as const, className: "bg-emerald-100 text-emerald-800" }
    if (score >= 60) return { label: "Bon", variant: "secondary" as const, className: "bg-amber-100 text-amber-800" }
    return { label: "À améliorer", variant: "destructive" as const }
  }

  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200 text-red-800"
      case "medium":
        return "bg-amber-50 border-amber-200 text-amber-800"
      case "low":
        return "bg-blue-50 border-blue-200 text-blue-800"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStageColor = (stage: any) => {
    const stageName = stage.stage.toLowerCase()

    // Rouge pour les deals perdus
    if (stageName.includes("lost") || stageName.includes("perdu") || stageName.includes("fermé - perdu")) {
      return "#ef4444" // Rouge
    }

    // Bleu pour les deals gagnés
    if (
      stageName.includes("won") ||
      stageName.includes("gagné") ||
      stageName.includes("fermé - gagné") ||
      stageName.includes("gagnés")
    ) {
      return "#3b82f6" // Bleu
    }

    // Orange pour les deals à risque ou les étapes problématiques
    if (
      stageName.includes("négociation") ||
      stageName.includes("negotiation") ||
      stageName.includes("proposition") ||
      stageName.includes("proposal") ||
      stageName.includes("qualification")
    ) {
      return "#f59e0b" // Orange
    }

    // Vert pour les étapes saines (discovery, appointment scheduled, etc.)
    return "#10b981" // Vert (défaut)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-gray-700">
            <span className="font-medium">Valeur:</span> {formatCurrency(payload[0].value)}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Nombre de deals:</span> {data.count}
          </p>
          {data.lostCount && (
            <p className="text-red-600">
              <span className="font-medium">Deals perdus:</span> {data.lostCount}
            </p>
          )}
          {data.atRiskCount && (
            <p className="text-orange-600">
              <span className="font-medium">Deals à risque:</span> {data.atRiskCount}
            </p>
          )}
        </div>
      )
    }
    return null
  }

  const formatMonthName = (monthKey: string) => {
    const [year, month] = monthKey.split("-")
    const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
    return date.toLocaleDateString("fr-FR", { month: "short", year: "numeric" })
  }

  const MonthlyTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{formatMonthName(label)}</p>
          <p className="text-gray-700">
            <span className="font-medium">Pipeline Total:</span> {formatCurrency(data.totalValue)}
          </p>
          <p className="text-blue-700">
            <span className="font-medium">Pipeline Pondéré:</span> {formatCurrency(data.weightedValue)}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Nombre de deals:</span> {data.dealCount}
          </p>
        </div>
      )
    }
    return null
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center space-y-6">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Analyse en cours...</h2>
            <p className="text-slate-600 mb-4">Notre IA analyse votre pipeline commercial</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </div>
          <div className="text-sm text-slate-500 space-y-1">
            <p>✓ Parsing des données terminé</p>
            <p>✓ Mapping des colonnes validé</p>
            <p className="animate-pulse">⏳ Calcul des scores et recommandations...</p>
          </div>
        </div>
      </div>
    )
  }

  const displayScore = data.aiInsights?.overallScore || data.overallScore
  const scoreBadge = getScoreBadge(displayScore)

  const riskData = [
    { name: "Faible risque", value: data.riskAnalysis?.lowRisk || 0, color: COLORS[0] },
    { name: "Risque moyen", value: data.riskAnalysis?.mediumRisk || 0, color: COLORS[1] },
    { name: "Risque élevé", value: data.riskAnalysis?.highRisk || 0, color: COLORS[2] },
  ]

  if (!data || data.totalDeals === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Aucune donnée à analyser</h1>
              <p className="text-slate-600 mb-6">
                Le fichier contient des données valides, mais les données n'ont pas pu être parsées correctement.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <strong>Impact:</strong> Vérifiez le format de votre fichier et assurez-vous que les colonnes
                  contiennent des données valides.
                </p>
              </div>
              <Button onClick={onBackToMapping} className="bg-emerald-600 hover:bg-emerald-700">
                Retour au mapping
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AnalysisTimer duration={90} onTimeUp={handleTimeUp} isActive={isTimerActive} />

      <ValueGateModal
        isOpen={showValueGate}
        onClose={() => setShowValueGate(false)}
        onEmailSubmit={handleEmailSubmit}
        onExportPDF={onExportPDF}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Analyse de Pipeline</h1>
              <p className="text-slate-600">Diagnostic complet de votre performance commerciale</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={onBackToMapping}>
                Modifier le mapping
              </Button>
              <Button onClick={onExportPDF} className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="w-4 h-4 mr-2" />
                Exporter PDF
              </Button>
            </div>
          </div>

          {/* Overall Score */}
          <Card className="mb-8 border-2 border-emerald-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Score Global de Performance</h3>
                  <p className="text-slate-600">
                    {data.aiInsights
                      ? "Évaluation IA de la santé de votre pipeline"
                      : "Évaluation générale de la santé de votre pipeline"}
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(displayScore)} mb-2`}>{displayScore}/100</div>
                  <Badge className={scoreBadge.className}>{scoreBadge.label}</Badge>
                  {data.aiInsights && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                      <Brain className="w-3 h-3" />
                      <span>Analyse IA</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pipeline Explanation Section */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Explication du Pipeline Pondéré</h3>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>
                      <strong>Pipeline Total :</strong> {formatCurrency(data.totalPipeline)} - Somme brute de tous vos
                      deals en cours
                    </p>
                    <p>
                      <strong>Pipeline Pondéré :</strong> {formatCurrency(data.weightedPipeline)} - Représente{" "}
                      <span className="font-semibold text-blue-600">
                        {Math.round((data.weightedPipeline / data.totalPipeline) * 100)}%
                      </span>{" "}
                      du pipeline total après ajustement des probabilités
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-blue-200">
                      <p className="font-medium text-slate-800 mb-2">Facteurs impactant la pondération :</p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li>
                          • <strong>Dates de clôture irréalistes</strong> - Deals avec des échéances trop optimistes
                        </li>
                        <li>
                          • <strong>Informations manquantes</strong> - Notes de qualification incomplètes
                        </li>
                        <li>
                          • <strong>Prochaines actions floues</strong> - Next steps sans objectifs précis
                        </li>
                        <li>
                          • <strong>Stagnation dans les étapes</strong> - Deals sans progression récente
                        </li>
                        <li>
                          • <strong>Données incohérentes</strong> - Montants ou probabilités aberrantes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {data.aiInsights && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* AI Insights */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Insights IA
                  </CardTitle>
                  <CardDescription>Analyse approfondie de votre pipeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.aiInsights.insights.map((insight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-700">{insight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk Factors & Opportunities */}
              <div className="space-y-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-red-600" />
                      Facteurs de Risque
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {data.aiInsights.riskFactors.map((risk, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                          <p className="text-xs text-slate-600">{risk}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Opportunités
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {data.aiInsights.opportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                          <p className="text-xs text-slate-600">{opportunity}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pipeline Total</p>
                    <p className="text-2xl font-bold text-slate-900">{formatCurrency(data.totalPipeline)}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pipeline Pondéré</p>
                    <p className="text-2xl font-bold text-slate-900">{formatCurrency(data.weightedPipeline)}</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Taille Moyenne Deal</p>
                    <p className="text-2xl font-bold text-slate-900">{formatCurrency(data.averageDealSize)}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Cycle de Vente</p>
                    <p className="text-2xl font-bold text-slate-900">{data.averageSalesCycle}j</p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Pipeline Chart */}
          {data.monthlyPipeline && data.monthlyPipeline.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  Pipeline par Mois
                </CardTitle>
                <CardDescription>Évolution prévue de votre pipeline sur les prochains mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.monthlyPipeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tickFormatter={formatMonthName} />
                    <YAxis tickFormatter={(value) => `${Math.round(value / 1000)}k€`} />
                    <Tooltip content={<MonthlyTooltip />} />
                    <Bar dataKey="totalValue" fill="#10b981" name="Pipeline Total" />
                    <Bar dataKey="weightedValue" fill="#3b82f6" name="Pipeline Pondéré" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Pipeline Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Pipeline Pondéré (probabilités révisées)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Répartition par Étape</CardTitle>
                <CardDescription>Distribution de vos deals dans le pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.dealsByStage}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value">
                      {data.dealsByStage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getStageColor(entry)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Étapes saines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>Étapes à risque</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Deals perdus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Deals gagnés</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analyse des Risques</CardTitle>
                <CardDescription>Répartition des deals par niveau de risque</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            {data.aiInsights && (
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Recommandations IA
                  </CardTitle>
                  <CardDescription>Actions stratégiques basées sur l'analyse IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.aiInsights.recommendations.map((rec, index) => (
                      <Alert key={index} className={`${getPriorityColor(rec.priority)} border-l-4`}>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{rec.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {rec.priority === "high"
                                ? "Priorité Haute"
                                : rec.priority === "medium"
                                  ? "Priorité Moyenne"
                                  : "Priorité Basse"}
                            </Badge>
                          </div>
                          <AlertDescription className="mb-2">{rec.description}</AlertDescription>
                          <Badge variant="outline" className="text-xs">
                            Impact: {rec.impact}
                          </Badge>
                        </div>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Next Actions */}
            {data.aiInsights && (
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Actions Prioritaires
                  </CardTitle>
                  <CardDescription>Plan d'action immédiat recommandé par l'IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.aiInsights.nextActions.map((action, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm text-slate-700">{action}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Original Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommandations Personnalisées</CardTitle>
                <CardDescription>Actions prioritaires pour améliorer votre performance</CardDescription>
              </CardHeader>
              <CardContent>
                {data.recommendations.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <Lightbulb className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-medium mb-2">Recommandations en cours de génération</h3>
                    <p className="text-sm">
                      Nous n'avons pas de recommandations personnalisées spécifiques pour ce pipeline actuellement. Les
                      recommandations sont générées en fonction de patterns détectés dans vos données commerciales et
                      nécessitent un volume suffisant d'informations pour être pertinentes.
                    </p>
                    <div className="mt-4 p-3 bg-slate-100 rounded-lg text-xs text-left">
                      <p className="font-medium mb-1">Les recommandations incluent normalement :</p>
                      <ul className="space-y-1">
                        <li>• Actions prioritaires sur les deals à risque</li>
                        <li>• Optimisations du processus commercial</li>
                        <li>• Suggestions de qualification des prospects</li>
                        <li>• Alertes sur les échéances critiques</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {data.recommendations.map((rec, index) => {
                      const Icon =
                        rec.type === "critical" ? AlertTriangle : rec.type === "warning" ? Clock : CheckCircle
                      const iconColor =
                        rec.type === "critical"
                          ? "text-red-600"
                          : rec.type === "warning"
                            ? "text-amber-600"
                            : "text-emerald-600"
                      const bgColor =
                        rec.type === "critical" ? "bg-red-50" : rec.type === "warning" ? "bg-amber-50" : "bg-emerald-50"

                      return (
                        <Alert key={index} className={`${bgColor} border-l-4`}>
                          <Icon className={`h-4 w-4 ${iconColor}`} />
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">{rec.title}</h4>
                            <AlertDescription className="text-slate-700 mb-2">{rec.description}</AlertDescription>
                            <Badge variant="outline" className="text-xs">
                              Impact: {rec.impact}
                            </Badge>
                          </div>
                        </Alert>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
