import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, source = "homepage" } = await request.json()

    console.log("[v0] Initial email capture:", { email, source })

    // Send to Make.com webhook for initial leads
    if (process.env.MAKE_WEBHOOK_URL_INITIAL) {
      const webhookPayload = {
        email,
        source: `simple-sales-${source}`,
        timestamp: new Date().toISOString(),
        leadType: "initial",
      }

      await fetch(process.env.MAKE_WEBHOOK_URL_INITIAL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      })
    }

    // Sync to Notion for initial leads
    try {
      await fetch("/api/forecaster/notion-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysisData: { overallScore: 0, totalPipeline: 0, weightedPipeline: 0, totalDeals: 0 },
          timestamp: new Date().toISOString(),
          leadType: "initial",
        }),
      })
    } catch (notionError) {
      console.error("[v0] Notion sync failed for initial lead:", notionError)
    }

    // Send to Slack for initial leads
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: `📧 Nouveau lead initial Simple Sales`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Nouveau lead initial*\n📧 ${email}\n📍 Source: ${source}\n⏰ ${new Date().toLocaleString("fr-FR")}`,
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
    console.error("Initial email capture error:", error)
    return NextResponse.json({ success: false, error: "Failed to capture email" }, { status: 500 })
  }
}
