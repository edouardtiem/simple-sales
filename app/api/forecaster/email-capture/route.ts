import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, analysisData, timestamp } = await request.json()

    console.log("[v0] Email capture:", { email, timestamp })

    // Send to Make.com webhook for processing
    if (process.env.MAKE_WEBHOOK_URL_QUALIFIED) {
      const webhookPayload = {
        email,
        source: "simple-sales-forecaster",
        timestamp,
        analysis: {
          overallScore: analysisData.overallScore,
          totalPipeline: analysisData.totalPipeline,
          weightedPipeline: analysisData.weightedPipeline,
          totalDeals: analysisData.totalDeals,
          riskAnalysis: analysisData.riskAnalysis,
        },
        leadType: "qualified", // User completed full analysis
      }

      await fetch(process.env.MAKE_WEBHOOK_URL_QUALIFIED, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      })
    }

    try {
      await fetch("/api/forecaster/notion-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysisData,
          timestamp,
          leadType: "qualified",
        }),
      })
    } catch (notionError) {
      console.error("[v0] Notion sync failed:", notionError)
      // Don't fail the main request if Notion sync fails
    }

    // Also send to Slack for immediate notification
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: `🎯 Nouveau lead qualifié Simple Sales Forecaster`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Nouveau lead qualifié*\n📧 ${email}\n📊 Score: ${analysisData.overallScore}/100\n💰 Pipeline: ${new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(analysisData.totalPipeline)}\n🎯 ${analysisData.totalDeals} deals analysés`,
            },
          },
        ],
      }

      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackMessage),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email capture error:", error)
    return NextResponse.json({ success: false, error: "Failed to capture email" }, { status: 500 })
  }
}
