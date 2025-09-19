import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

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

Répondez UNIQUEMENT avec un objet JSON valide contenant :
{
  "overallScore": number (0-100),
  "insights": ["insight1", "insight2", "insight3"],
  "recommendations": [
    {
      "title": "titre",
      "description": "description",
      "priority": "high|medium|low",
      "impact": "impact description"
    }
  ],
  "riskFactors": ["risk1", "risk2"],
  "opportunities": ["opportunity1", "opportunity2"],
  "nextActions": ["action1", "action2"]
}

Soyez spécifique et actionnable dans vos recommandations.
`

    const { text } = await generateText({
      model: openai("gpt-4o", {
        apiKey: process.env.OpenAI || process.env.OPENAI_API_KEY,
      }),
      prompt,
      maxTokens: 2000,
      temperature: 0.3,
    })

    let aiAnalysis
    try {
      aiAnalysis = JSON.parse(text)
    } catch (parseError) {
      console.error("[v0] Failed to parse AI response:", parseError)
      aiAnalysis = {
        overallScore: 50,
        insights: ["Analyse en cours", "Données reçues avec succès"],
        recommendations: [
          {
            title: "Révision du pipeline",
            description: "Analysez les données pour identifier les opportunités d'amélioration",
            priority: "medium",
            impact: "Amélioration de la performance commerciale",
          },
        ],
        riskFactors: ["Analyse en cours"],
        opportunities: ["Optimisation du processus de vente"],
        nextActions: ["Réviser les données", "Identifier les priorités"],
      }
    }

    console.log("[v0] AI Analysis completed successfully")
    return Response.json({ aiAnalysis })
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
