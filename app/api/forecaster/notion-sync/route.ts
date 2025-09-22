import { type NextRequest, NextResponse } from "next/server"

interface NotionPageData {
  email: string
  analysisData: any
  timestamp: string
  leadType: string
}

export async function POST(request: NextRequest) {
  try {
    const { email, analysisData, timestamp, leadType }: NotionPageData = await request.json()

    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PAGE_ID) {
      console.log("[v0] Notion credentials not configured")
      return NextResponse.json({ success: false, error: "Notion not configured" }, { status: 400 })
    }

    // Create a new page in Notion database
    const notionPayload = {
      parent: {
        database_id: process.env.NOTION_PAGE_ID,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        "Lead Type": {
          select: {
            name: leadType === "qualified" ? "Qualified" : "Initial",
          },
        },
        "Overall Score": {
          number: analysisData.overallScore || 0,
        },
        "Total Pipeline": {
          number: analysisData.totalPipeline || 0,
        },
        "Weighted Pipeline": {
          number: analysisData.weightedPipeline || 0,
        },
        "Total Deals": {
          number: analysisData.totalDeals || 0,
        },
        "High Risk Deals": {
          number: analysisData.riskAnalysis?.highRisk || 0,
        },
        "Medium Risk Deals": {
          number: analysisData.riskAnalysis?.mediumRisk || 0,
        },
        "Low Risk Deals": {
          number: analysisData.riskAnalysis?.lowRisk || 0,
        },
        "Created At": {
          date: {
            start: timestamp,
          },
        },
        Status: {
          select: {
            name: "New",
          },
        },
      },
    }

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify(notionPayload),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] Notion API error:", errorData)
      throw new Error(`Notion API error: ${response.status}`)
    }

    const result = await response.json()
    console.log("[v0] Notion page created:", result.id)

    return NextResponse.json({ success: true, notionPageId: result.id })
  } catch (error) {
    console.error("[v0] Notion sync error:", error)
    return NextResponse.json({ success: false, error: "Failed to sync with Notion" }, { status: 500 })
  }
}
