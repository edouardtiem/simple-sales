import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { headers, sampleData } = await request.json()

    const mapping = await performMapping(headers, sampleData)

    return NextResponse.json({
      success: true,
      mapping,
      confidence: mapping.confidence || 0.8,
    })
  } catch (error) {
    console.error("Mapping error:", error)
    return NextResponse.json({ success: false, error: "Failed to map columns" }, { status: 500 })
  }
}

async function performMapping(headers: string[], sampleData: any[]) {
  const mapping: Record<string, string | null> = {
    deal_name: null,
    amount: null,
    close_date: null,
    stage: null,
    probability: null,
    contact: null,
    company: null,
    notes: null,
    next_activity_date: null,
  }

  const confidence = { total: 0, count: 0 }

  // Smart mapping based on common patterns
  headers.forEach((header) => {
    const lowerHeader = header.toLowerCase().trim()

    // Deal name mapping
    if (
      lowerHeader.includes("deal") ||
      lowerHeader.includes("opportunity") ||
      lowerHeader.includes("nom") ||
      lowerHeader.includes("name")
    ) {
      mapping.deal_name = header
      confidence.total += 0.9
      confidence.count++
    }

    // Amount mapping
    if (
      lowerHeader.includes("amount") ||
      lowerHeader.includes("montant") ||
      lowerHeader.includes("value") ||
      lowerHeader.includes("prix") ||
      lowerHeader.includes("€") ||
      lowerHeader.includes("$")
    ) {
      mapping.amount = header
      confidence.total += 0.95
      confidence.count++
    }

    // Date mapping
    if (
      lowerHeader.includes("date") ||
      lowerHeader.includes("close") ||
      lowerHeader.includes("closing") ||
      lowerHeader.includes("échéance")
    ) {
      mapping.close_date = header
      confidence.total += 0.9
      confidence.count++
    }

    // Stage mapping
    if (
      lowerHeader.includes("stage") ||
      lowerHeader.includes("étape") ||
      lowerHeader.includes("phase") ||
      lowerHeader.includes("status")
    ) {
      mapping.stage = header
      confidence.total += 0.85
      confidence.count++
    }

    // Probability mapping
    if (
      lowerHeader.includes("probability") ||
      lowerHeader.includes("prob") ||
      lowerHeader.includes("%") ||
      lowerHeader.includes("chance")
    ) {
      mapping.probability = header
      confidence.total += 0.8
      confidence.count++
    }

    // Contact mapping
    if (
      lowerHeader.includes("contact") ||
      lowerHeader.includes("person") ||
      lowerHeader.includes("owner") ||
      lowerHeader.includes("responsable")
    ) {
      mapping.contact = header
      confidence.total += 0.7
      confidence.count++
    }

    // Company mapping
    if (
      lowerHeader.includes("company") ||
      lowerHeader.includes("entreprise") ||
      lowerHeader.includes("client") ||
      lowerHeader.includes("account")
    ) {
      mapping.company = header
      confidence.total += 0.7
      confidence.count++
    }

    // Notes mapping
    if (
      lowerHeader.includes("note") ||
      lowerHeader.includes("comment") ||
      lowerHeader.includes("description") ||
      lowerHeader.includes("remarque")
    ) {
      mapping.notes = header
      confidence.total += 0.8
      confidence.count++
    }

    // Next activity date mapping
    if (
      lowerHeader.includes("next") ||
      lowerHeader.includes("prochaine") ||
      lowerHeader.includes("activity") ||
      lowerHeader.includes("activité") ||
      lowerHeader.includes("follow") ||
      lowerHeader.includes("suivi")
    ) {
      mapping.next_activity_date = header
      confidence.total += 0.8
      confidence.count++
    }
  })

  return {
    ...mapping,
    confidence: confidence.count > 0 ? confidence.total / confidence.count : 0.5,
    method: "rule-based",
  }
}
