import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const salesAnalysisSchema = z.object({
  overallScore: z.number().min(0).max(100).describe("Score global du pipeline sur 100"),
  insights: z.array(z.string()).describe("3-5 insights clés sur le pipeline"),
  recommendations: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        priority: z.enum(["high", "medium", "low"]),
        impact: z.string(),
      }),
    )
    .describe("Recommandations concrètes pour améliorer les ventes"),
  riskFactors: z.array(z.string()).describe("Facteurs de risque identifiés"),
  opportunities: z.array(z.string()).describe("Opportunités d'amélioration"),
  nextActions: z.array(z.string()).describe("Actions prioritaires à mettre en place"),
})

export async function POST(req: Request) {
  try {
    const { analysisData, rawData } = await req.json()

    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
      return Response.json({
        error: "Aucune donnée à analyser",
        aiAnalysis: {
          overallScore: 0,
          insights: ["Aucune donnée disponible pour l'analyse"],
          recommendations: [],
          riskFactors: ["Données manquantes"],
          opportunities: [],
          nextActions: ["Vérifiez le format de votre fichier"],
        },
      })
    }

    const prompt = `
Analysez ce pipeline commercial et fournissez des recommandations stratégiques basées sur les données suivantes :

DONNÉES D'ANALYSE :
- Nombre total d'opportunités : ${analysisData.totalDeals}
- Valeur totale du pipeline : ${analysisData.totalValue}€
- Taux de conversion moyen : ${analysisData.conversionRate}%
- Durée moyenne du cycle : ${analysisData.avgCycleTime} jours
- Distribution par étapes : ${JSON.stringify(analysisData.stageDistribution)}
- Top 5 des opportunités : ${JSON.stringify(analysisData.topDeals)}

DONNÉES BRUTES (échantillon) :
${JSON.stringify(rawData.slice(0, 10), null, 2)}

Fournissez une analyse approfondie avec :
1. Un score global de performance (0-100)
2. Des insights stratégiques sur les forces et faiblesses
3. Des recommandations concrètes et priorisées
4. L'identification des risques et opportunités
5. Un plan d'actions prioritaires

Soyez spécifique et actionnable dans vos recommandations.
`

    const { object } = await generateObject({
      model: openai.responses("gpt-5"),
      schema: salesAnalysisSchema,
      prompt,
      maxOutputTokens: 2000,
      temperature: 0.3,
    })

    return Response.json({ aiAnalysis: object })
  } catch (error) {
    console.error("AI Analysis error:", error)
    return Response.json({ error: "Erreur lors de l'analyse IA" }, { status: 500 })
  }
}
