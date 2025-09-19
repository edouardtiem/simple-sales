import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const { analysisData, rawData } = await req.json()

    console.log("[v0] AI Analysis Stream request:", {
      hasAnalysisData: !!analysisData,
      hasRawData: !!rawData,
      rawDataLength: Array.isArray(rawData) ? rawData.length : 0,
    })

    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
      return new Response("Aucune donnée à analyser", { status: 400 })
    }

    const sampleData = rawData.slice(0, Math.min(10, rawData.length))

    const prompt = `
Vous êtes un expert en analyse de pipeline commercial B2B. Analysez ces données et réfléchissez à voix haute pendant votre analyse.

DONNÉES D'ANALYSE :
- Nombre total d'opportunités : ${analysisData?.totalDeals || 0}
- Valeur totale du pipeline : ${analysisData?.totalPipeline || 0}€
- Pipeline pondéré : ${analysisData?.weightedPipeline || 0}€
- Taille moyenne des deals : ${analysisData?.averageDealSize || 0}€
- Distribution par étapes : ${JSON.stringify(analysisData?.dealsByStage || [])}
- Analyse des risques : ${JSON.stringify(analysisData?.riskAnalysis || {})}

DONNÉES BRUTES (échantillon) :
${JSON.stringify(sampleData, null, 2)}

INSTRUCTIONS :
1. Commencez par expliquer votre processus d'analyse
2. Analysez chaque métrique en détail
3. Identifiez les patterns et anomalies
4. Formulez vos recommandations
5. Terminez par un objet JSON avec vos conclusions

Réfléchissez à voix haute pendant toute l'analyse, puis terminez par un objet JSON valide :
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

    const result = await streamText({
      model: openai("gpt-4o-2024-08-06", {
        apiKey: process.env.OpenAI || process.env.OPENAI_API_KEY,
        reasoning: "low", // Low reasoning level for better performance
      }),
      prompt,
      maxTokens: 3000,
      temperature: 0.3,
    })

    return result.toAIStreamResponse()
  } catch (error) {
    console.error("[v0] AI Analysis Stream error:", error)
    return new Response("Erreur lors de l'analyse IA", { status: 500 })
  }
}
