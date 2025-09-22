interface Deal {
  [key: string]: any
}

interface AnalysisResult {
  totalPipeline: number
  weightedPipeline: number
  averageDealSize: number
  conversionRate: number
  averageSalesCycle: number
  totalDeals: number
  dealsByStage: Array<{ stage: string; count: number; value: number }>
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
  monthlyPipeline: Array<{
    month: string
    totalValue: number
    weightedValue: number
    dealCount: number
    deals: any[]
  }>
  enhancedDeals: any[]
}

export function analyzeDeals(deals: Deal[], mapping: Record<string, string | null>): AnalysisResult {
  if (!deals || !Array.isArray(deals) || deals.length === 0) {
    return {
      totalPipeline: 0,
      weightedPipeline: 0,
      averageDealSize: 0,
      conversionRate: 0,
      averageSalesCycle: 45,
      totalDeals: 0,
      dealsByStage: [],
      riskAnalysis: { highRisk: 0, mediumRisk: 0, lowRisk: 0 },
      recommendations: [
        {
          type: "warning",
          title: "Aucune donnée à analyser",
          description: "Le fichier ne contient pas de données valides ou les données n'ont pas pu être parsées.",
          impact: "Vérifiez le format de votre fichier",
        },
      ],
      overallScore: 0,
      monthlyPipeline: [],
      enhancedDeals: [],
    }
  }

  const mappedDeals = deals.map((deal) => ({
    name: deal[mapping.deal_name || ""] || "Deal sans nom",
    amount: Number.parseFloat(deal[mapping.amount || ""] || "0") || 0,
    closeDate: deal[mapping.close_date || ""] || "",
    stage: deal[mapping.stage || ""] || "Inconnu",
    probability: Number.parseFloat(deal[mapping.probability || ""] || "50") || 50,
    contact: deal[mapping.contact || ""] || "",
    company: deal[mapping.company || ""] || "",
    notes: deal[mapping.notes || ""] || "",
    nextActivityDate: deal[mapping.next_activity_date || ""] || "",
  }))

  const enhancedMappedDeals = mappedDeals.map((deal) => ({
    ...deal,
    enhancedProbability: calculateEnhancedProbability(deal),
  }))

  const totalPipeline = mappedDeals.reduce((sum, deal) => sum + deal.amount, 0)
  const weightedPipeline = enhancedMappedDeals.reduce(
    (sum, deal) => sum + (deal.amount * deal.enhancedProbability) / 100,
    0,
  )
  const averageDealSize = totalPipeline / mappedDeals.length || 0
  const totalDeals = mappedDeals.length

  const stageGroups = mappedDeals.reduce(
    (acc, deal) => {
      const stage = deal.stage
      if (!acc[stage]) {
        acc[stage] = { count: 0, value: 0 }
      }
      acc[stage].count++
      acc[stage].value += deal.amount
      return acc
    },
    {} as Record<string, { count: number; value: number }>,
  )

  const dealsByStage = Object.entries(stageGroups)
    .map(([stage, data]) => ({
      stage,
      count: data.count,
      value: data.value,
    }))
    .sort((a, b) => getStageOrder(a.stage) - getStageOrder(b.stage))

  const riskAnalysis = mappedDeals.reduce(
    (acc, deal) => {
      if (deal.probability >= 70) acc.lowRisk++
      else if (deal.probability >= 40) acc.mediumRisk++
      else acc.highRisk++
      return acc
    },
    { highRisk: 0, mediumRisk: 0, lowRisk: 0 },
  )

  const recommendations = generateRecommendations(mappedDeals, {
    totalPipeline,
    weightedPipeline,
    averageDealSize,
    riskAnalysis,
  })

  const overallScore = calculateOverallScore(mappedDeals, {
    totalPipeline,
    weightedPipeline,
    riskAnalysis,
  })

  const monthlyPipeline = calculateMonthlyPipeline(enhancedMappedDeals)

  const enhancedDeals = enhancedMappedDeals // Declare enhancedDeals variable

  return {
    totalPipeline,
    weightedPipeline,
    averageDealSize,
    conversionRate: 0,
    averageSalesCycle: 45,
    totalDeals,
    dealsByStage,
    riskAnalysis,
    recommendations,
    overallScore,
    monthlyPipeline,
    enhancedDeals,
  }
}

function generateRecommendations(
  deals: any[],
  metrics: {
    totalPipeline: number
    weightedPipeline: number
    averageDealSize: number
    riskAnalysis: { highRisk: number; mediumRisk: number; lowRisk: number }
  },
): Array<{
  type: "critical" | "warning" | "success"
  title: string
  description: string
  impact: string
}> {
  const recommendations = []

  if (metrics.riskAnalysis.highRisk > deals.length * 0.3) {
    recommendations.push({
      type: "critical" as const,
      title: "Trop de deals à haut risque",
      description: `${metrics.riskAnalysis.highRisk} deals ont une probabilité inférieure à 40%. Concentrez-vous sur la qualification et le nurturing.`,
      impact: "Réduction du risque de 25%",
    })
  }

  const avgDealSize = metrics.averageDealSize
  const bigDeals = deals.filter((deal) => deal.amount > avgDealSize * 2).length
  if (bigDeals > deals.length * 0.2) {
    recommendations.push({
      type: "warning" as const,
      title: "Pipeline concentré sur de gros deals",
      description: "Diversifiez votre pipeline avec plus de deals de taille moyenne pour réduire les risques.",
      impact: "Stabilisation du chiffre d'affaires",
    })
  }

  if (metrics.riskAnalysis.lowRisk > deals.length * 0.5) {
    recommendations.push({
      type: "success" as const,
      title: "Excellente qualification des deals",
      description: "Plus de 50% de vos deals ont une forte probabilité de closing. Continuez sur cette lancée !",
      impact: "Maintien de la performance",
    })
  }

  return recommendations
}

function calculateOverallScore(
  deals: any[],
  metrics: {
    totalPipeline: number
    weightedPipeline: number
    riskAnalysis: { highRisk: number; mediumRisk: number; lowRisk: number }
  },
): number {
  let score = 50

  const pipelineRatio = metrics.weightedPipeline / metrics.totalPipeline
  score += pipelineRatio * 30

  const lowRiskRatio = metrics.riskAnalysis.lowRisk / deals.length
  const highRiskRatio = metrics.riskAnalysis.highRisk / deals.length
  score += lowRiskRatio * 40 - highRiskRatio * 20

  const avgAmount = metrics.totalPipeline / deals.length
  const variance = deals.reduce((acc, deal) => acc + Math.pow(deal.amount - avgAmount, 2), 0) / deals.length
  const diversity = Math.min(variance / (avgAmount * avgAmount), 1)
  score += (1 - diversity) * 10

  return Math.max(0, Math.min(100, Math.round(score)))
}

function calculateEnhancedProbability(deal: any): number {
  const stage = deal.stage.toLowerCase()
  const hasNextActivity = deal.nextActivityDate && deal.nextActivityDate.trim() !== ""
  const notes = deal.notes.toLowerCase()

  const isWarningNote =
    notes.includes("warning") ||
    notes.includes("relancé") ||
    notes.includes("pas de retour") ||
    notes.includes("difficile") ||
    notes.includes("bloqué") ||
    notes.includes("problème") ||
    notes.includes("silence") ||
    notes.includes("ne répond pas") ||
    notes.includes("injoignable") ||
    notes.includes("report") ||
    notes.includes("annulé")

  const isPositiveNote =
    notes.includes("intéressé") ||
    notes.includes("positif") ||
    notes.includes("avance") ||
    notes.includes("rdv") ||
    notes.includes("meeting") ||
    notes.includes("proposition") ||
    notes.includes("budget") ||
    notes.includes("validé") ||
    notes.includes("ok")

  let baseProbability = 50
  if (stage.includes("discovery") || stage.includes("découverte")) baseProbability = 5
  else if (stage.includes("appointment") || stage.includes("scheduled"))
    baseProbability = 12 // Added appointment scheduled stage
  else if (stage.includes("qualification")) baseProbability = 18
  else if (stage.includes("proposal") || stage.includes("proposition")) baseProbability = 40
  else if (stage.includes("negotiation") || stage.includes("négociation")) baseProbability = 55
  else if (stage.includes("closing") || stage.includes("signature")) baseProbability = 75
  else if (stage.includes("won") || stage.includes("gagné")) baseProbability = 100
  else if (stage.includes("lost") || stage.includes("perdu")) baseProbability = 0

  let finalProbability = baseProbability

  if (hasNextActivity) {
    if (isPositiveNote) {
      finalProbability = Math.min(baseProbability * 2.2, 95)
    } else if (!isWarningNote) {
      finalProbability = Math.min(baseProbability * 1.5, 80)
    } else {
      finalProbability = Math.max(baseProbability * 0.3, 3)
    }
  } else {
    if (isWarningNote) {
      finalProbability = Math.max(baseProbability * 0.05, 1) // Even more aggressive for warning + no activity
    } else {
      finalProbability = Math.max(baseProbability * 0.2, 3) // More aggressive for no activity
    }
  }

  if (!hasNextActivity && baseProbability >= 40) {
    finalProbability = Math.min(finalProbability, 8)
  }

  return Math.round(Math.max(0, Math.min(100, finalProbability)))
}

function calculateMonthlyPipeline(deals: any[]): Array<{
  month: string
  totalValue: number
  weightedValue: number
  dealCount: number
  deals: any[]
}> {
  const monthlyData: Record<
    string,
    {
      totalValue: number
      weightedValue: number
      dealCount: number
      deals: any[]
    }
  > = {}

  deals.forEach((deal) => {
    if (!deal.closeDate) return

    try {
      const closeDate = new Date(deal.closeDate)
      if (isNaN(closeDate.getTime())) return

      const monthKey = `${closeDate.getFullYear()}-${String(closeDate.getMonth() + 1).padStart(2, "0")}`

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          totalValue: 0,
          weightedValue: 0,
          dealCount: 0,
          deals: [],
        }
      }

      monthlyData[monthKey].totalValue += deal.amount
      monthlyData[monthKey].weightedValue += (deal.amount * deal.enhancedProbability) / 100
      monthlyData[monthKey].dealCount++
      monthlyData[monthKey].deals.push(deal)
    } catch (error) {
      // Skip invalid dates
    }
  })

  return Object.entries(monthlyData)
    .map(([month, data]) => ({
      month,
      ...data,
    }))
    .sort((a, b) => a.month.localeCompare(b.month))
}

function getStageOrder(stage: string): number {
  const stageLower = stage.toLowerCase()
  if (stageLower.includes("discovery") || stageLower.includes("découverte")) return 1
  if (stageLower.includes("appointment") || stageLower.includes("scheduled")) return 2
  if (stageLower.includes("qualification")) return 3
  if (stageLower.includes("proposal") || stageLower.includes("proposition")) return 4
  if (stageLower.includes("negotiation") || stageLower.includes("négociation")) return 5
  if (stageLower.includes("closing") || stageLower.includes("signature")) return 6
  if (stageLower.includes("won") || stageLower.includes("gagné")) return 7
  if (stageLower.includes("lost") || stageLower.includes("perdu")) return 8
  return 9 // Unknown stages at the end
}
