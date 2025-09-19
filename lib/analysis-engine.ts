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
  }))

  // Calculate basic metrics
  const totalPipeline = mappedDeals.reduce((sum, deal) => sum + deal.amount, 0)
  const weightedPipeline = mappedDeals.reduce((sum, deal) => sum + (deal.amount * deal.probability) / 100, 0)
  const averageDealSize = totalPipeline / mappedDeals.length || 0
  const totalDeals = mappedDeals.length

  // Analyze deals by stage
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

  const dealsByStage = Object.entries(stageGroups).map(([stage, data]) => ({
    stage,
    count: data.count,
    value: data.value,
  }))

  // Risk analysis
  const riskAnalysis = mappedDeals.reduce(
    (acc, deal) => {
      if (deal.probability >= 70) acc.lowRisk++
      else if (deal.probability >= 40) acc.mediumRisk++
      else acc.highRisk++
      return acc
    },
    { highRisk: 0, mediumRisk: 0, lowRisk: 0 },
  )

  // Generate recommendations
  const recommendations = generateRecommendations(mappedDeals, {
    totalPipeline,
    weightedPipeline,
    averageDealSize,
    riskAnalysis,
  })

  // Calculate overall score
  const overallScore = calculateOverallScore(mappedDeals, {
    totalPipeline,
    weightedPipeline,
    riskAnalysis,
  })

  return {
    totalPipeline,
    weightedPipeline,
    averageDealSize,
    conversionRate: 0, // Would need historical data
    averageSalesCycle: 45, // Would need date analysis
    totalDeals,
    dealsByStage,
    riskAnalysis,
    recommendations,
    overallScore,
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

  // High risk deals
  if (metrics.riskAnalysis.highRisk > deals.length * 0.3) {
    recommendations.push({
      type: "critical" as const,
      title: "Trop de deals à haut risque",
      description: `${metrics.riskAnalysis.highRisk} deals ont une probabilité inférieure à 40%. Concentrez-vous sur la qualification et le nurturing.`,
      impact: "Réduction du risque de 25%",
    })
  }

  // Pipeline concentration
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

  // Good performance
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
  let score = 50 // Base score

  // Pipeline health (30 points)
  const pipelineRatio = metrics.weightedPipeline / metrics.totalPipeline
  score += pipelineRatio * 30

  // Risk distribution (40 points)
  const lowRiskRatio = metrics.riskAnalysis.lowRisk / deals.length
  const highRiskRatio = metrics.riskAnalysis.highRisk / deals.length
  score += lowRiskRatio * 40 - highRiskRatio * 20

  // Deal diversity (10 points)
  const avgAmount = metrics.totalPipeline / deals.length
  const variance = deals.reduce((acc, deal) => acc + Math.pow(deal.amount - avgAmount, 2), 0) / deals.length
  const diversity = Math.min(variance / (avgAmount * avgAmount), 1)
  score += (1 - diversity) * 10

  return Math.max(0, Math.min(100, Math.round(score)))
}
