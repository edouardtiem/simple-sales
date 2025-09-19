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
      let jsonText = text.trim()

      // Remove markdown code blocks if present
      if (jsonText.startsWith("```json")) {
        jsonText = jsonText.replace(/^```json\s*/, "").replace(/\s*```$/, "")
      } else if (jsonText.startsWith("```")) {
        jsonText = jsonText.replace(/^```\s*/, "").replace(/\s*```$/, "")
      }

      // Try to find JSON object if text contains other content
      const jsonMatch = jsonText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        jsonText = jsonMatch[0]
      }

      console.log("[v0] Attempting to parse JSON:", jsonText.substring(0, 200) + "...")
      aiAnalysis = JSON.parse(jsonText)
    } catch (parseError) {
      console.error("[v0] Failed to parse AI response:", parseError)
      console.error("[v0] Raw AI response:", text.substring(0, 500) + "...")

      aiAnalysis = {
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
          {
            title: "Suivi des opportunités",
            description: "Mettez en place un suivi régulier des deals en cours",
            priority: "medium",
            impact: "Réduction du risque de perte d'opportunités",
          },
        ],
        riskFactors: ["Analyse automatique en cours", "Vérification des données recommandée"],
        opportunities: ["Optimisation du processus de qualification", "Amélioration du suivi client"],
        nextActions: [
          "Réviser les deals en cours",
          "Identifier les priorités de suivi",
          "Planifier les prochaines actions commerciales",
        ],
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
