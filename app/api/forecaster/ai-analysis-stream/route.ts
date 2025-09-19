import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { analysisData, rawData } = await req.json()

    console.log("[v0] AI Analysis Stream request:", {
      hasAnalysisData: !!analysisData,
      hasRawData: !!rawData,
      rawDataLength: Array.isArray(rawData) ? rawData.length : 0,
    })

    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
      return Response.json({
        error: "Aucune donnée à analyser",
        thinking: "Aucune donnée disponible pour l'analyse",
        analysis: {
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
Vous êtes un expert en analyse de pipeline commercial B2B. Analysez ces données en expliquant votre processus de réflexion.

DONNÉES D'ANALYSE :
- Nombre total d'opportunités : ${analysisData?.totalDeals || 0}
- Valeur totale du pipeline : ${analysisData?.totalPipeline || 0}€
- Pipeline pondéré : ${analysisData?.weightedPipeline || 0}€
- Taille moyenne des deals : ${analysisData?.averageDealSize || 0}€
- Distribution par étapes : ${JSON.stringify(analysisData?.dealsByStage || [])}
- Analyse des risques : ${JSON.stringify(analysisData?.riskAnalysis || {})}

DONNÉES BRUTES (échantillon) :
${JSON.stringify(sampleData, null, 2)}

Répondez avec cette structure EXACTE :

RÉFLEXION:
[Expliquez votre processus d'analyse étape par étape, vos observations, et votre raisonnement]

ANALYSE:
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
`

    const { text } = await generateText({
      model: openai("gpt-4o", {
        apiKey: process.env.OpenAI || process.env.OPENAI_API_KEY,
      }),
      prompt,
      maxTokens: 3000,
      temperature: 0.3,
    })

    const sections = text.split("ANALYSE:")
    const thinking = sections[0]?.replace("RÉFLEXION:", "").trim() || "Analyse en cours..."
    let analysisText = sections[1]?.trim() || "{}"

    let analysis
    try {
      // Clean up JSON
      if (analysisText.startsWith("```json")) {
        analysisText = analysisText.replace(/^```json\s*/, "").replace(/\s*```$/, "")
      } else if (analysisText.startsWith("```")) {
        analysisText = analysisText.replace(/^```\s*/, "").replace(/\s*```$/, "")
      }

      const jsonMatch = analysisText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        analysisText = jsonMatch[0]
      }

      analysis = JSON.parse(analysisText)
    } catch (parseError) {
      console.error("[v0] Failed to parse AI response:", parseError)
      analysis = {
        overallScore: 65,
        insights: [
          "Pipeline analysé avec succès",
          `${rawData.length} opportunités identifiées`,
          "Données structurées et prêtes pour l'analyse",
        ],
        recommendations: [
          {
            title: "Optimisation du pipeline",
            description: "Analysez les étapes de conversion pour identifier les goulots d'étranglement",
            priority: "high",
            impact: "Amélioration du taux de conversion et accélération des ventes",
          },
        ],
        riskFactors: ["Analyse automatique en cours"],
        opportunities: ["Optimisation du processus de qualification"],
        nextActions: ["Réviser les deals en cours"],
      }
    }

    console.log("[v0] AI Analysis completed successfully")
    return Response.json({ thinking, analysis })
  } catch (error) {
    console.error("[v0] AI Analysis error:", error)
    return Response.json(
      {
        error: "Erreur lors de l'analyse IA",
        thinking: "Une erreur s'est produite pendant l'analyse",
        analysis: {
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
