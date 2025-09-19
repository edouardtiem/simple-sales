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

    console.log("[v0] AI Analysis request:", {
      hasAnalysisData: !!analysisData,
      hasRawData: !!rawData,
      rawDataLength: Array.isArray(rawData) ? rawData.length : 0,
    })

    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
      console.log("[v0] No data available for analysis")
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

    const sampleData = rawData.slice(0, Math.min(10, rawData.length))

    const prompt = `
Analysez ce pipeline commercial et fournissez des recommandations stratégiques basées sur les données suivantes :

DONNÉES D'ANALYSE :
- Nombre total d'opportunités : ${analysisData?.totalDeals || 0}
- Valeur totale du pipeline : ${analysisData?.totalPipeline || 0}€
- Pipeline pondéré : ${analysisData?.weightedPipeline || 0}€
- Taille moyenne des deals : ${analysisData?.averageDealSize || 0}€
- Distribution par étapes : ${JSON.stringify(analysisData?.dealsByStage || [])}
- Analyse des risques : ${JSON.stringify(analysisData?.riskAnalysis || {})}

DONNÉES BRUTES (échantillon) :
${JSON.stringify(sampleData, null, 2)}

Fournissez une analyse approfondie avec :
1. Un score global de performance (0-100)
2. Des insights stratégiques sur les forces et faiblesses
3. Des recommandations concrètes et priorisées
4. L'identification des risques et opportunités
5. Un plan d'actions prioritaires

Soyez spécifique et actionnable dans vos recommandations.
`

    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: salesAnalysisSchema,
      prompt,
      maxTokens: 2000,
      temperature: 0.3,
    })

    console.log("[v0] AI Analysis completed successfully")
    return Response.json({ aiAnalysis: object })
  } catch (error) {
    console.error("[v0] AI Analysis error:", error)
    return Response.json(
      {
        error: "Erreur lors de l'analyse IA",
        aiAnalysis: {
          overallScore: 0,
          insights: ["Erreur lors de l'analyse IA"],
          recommendations: [],
          riskFactors: ["Erreur technique"],
          opportunities: [],
          nextActions: ["Réessayez l'analyse"],
        },
      },
      { status: 500 },
    )
  }
}
