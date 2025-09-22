import { type NextRequest, NextResponse } from "next/server"
import { nanoid } from "nanoid"
import { parseFile, validateParsedData } from "@/lib/file-parser"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 })
    }

    // Validate file type
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ]

    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: "Format de fichier non supporté" }, { status: 400 })
    }

    // Generate unique analysis ID
    const analysisId = nanoid()

    console.log("[v0] Starting file parsing for:", file.name)
    const parseResult = await parseFile(file)

    if (!parseResult.success || !parseResult.data) {
      return NextResponse.json({ error: parseResult.error || "Erreur lors de l'analyse du fichier" }, { status: 400 })
    }

    const validation = validateParsedData(parseResult.data)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Fichier invalide",
          details: validation.issues,
        },
        { status: 400 },
      )
    }

    console.log("[v0] File parsed successfully:", {
      name: file.name,
      headers: parseResult.data.headers,
      totalRows: parseResult.data.totalRows,
      analysisId,
    })

    return NextResponse.json({
      success: true,
      analysisId,
      message: "Fichier analysé avec succès",
      data: {
        fileName: parseResult.data.fileName,
        headers: parseResult.data.headers,
        data: parseResult.data.rows, // Include actual row data
        rows: parseResult.data.rows, // Include both for compatibility
        totalRows: parseResult.data.totalRows,
      },
    })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json({ error: "Erreur lors de l'upload" }, { status: 500 })
  }
}
