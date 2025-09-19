import Papa from "papaparse"
import * as XLSX from "xlsx"

export interface ParsedData {
  headers: string[]
  rows: Record<string, any>[]
  totalRows: number
  fileName: string
}

export interface ParseResult {
  success: boolean
  data?: ParsedData
  error?: string
}

export async function parseFile(file: File): Promise<ParseResult> {
  try {
    const fileType = file.type
    const fileName = file.name

    if (fileType === "text/csv") {
      return await parseCSV(file, fileName)
    } else if (
      fileType === "application/vnd.ms-excel" ||
      fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return await parseExcel(file, fileName)
    } else {
      return {
        success: false,
        error: "Format de fichier non supporté",
      }
    }
  } catch (error) {
    console.error("[v0] File parsing error:", error)
    return {
      success: false,
      error: "Erreur lors de l'analyse du fichier",
    }
  }
}

async function parseCSV(file: File, fileName: string): Promise<ParseResult> {
  return new Promise((resolve) => {
    console.log("[v0] Starting CSV parsing for:", fileName)
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim(),
      complete: (results) => {
        if (results.errors.length > 0) {
          console.error("[v0] CSV parsing errors:", results.errors)
          resolve({
            success: false,
            error: "Erreur lors de l'analyse du fichier CSV",
          })
          return
        }

        const headers = results.meta.fields || []
        const rows = results.data as Record<string, any>[]

        const validRows = rows.filter((row) => {
          return Object.values(row).some(
            (value) => value !== null && value !== undefined && String(value).trim() !== "",
          )
        })

        console.log("[v0] CSV parsed successfully:", {
          headers: headers.length,
          totalRows: validRows.length,
          originalRows: rows.length,
        })

        resolve({
          success: true,
          data: {
            headers,
            rows: validRows,
            totalRows: validRows.length,
            fileName,
          },
        })
      },
      error: (error) => {
        console.error("[v0] CSV parsing error:", error)
        resolve({
          success: false,
          error: "Erreur lors de l'analyse du fichier CSV",
        })
      },
    })
  })
}

async function parseExcel(file: File, fileName: string): Promise<ParseResult> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const workbook = XLSX.read(arrayBuffer, { type: "array" })

    // Get first worksheet
    const firstSheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[firstSheetName]

    // Convert to JSON with header row
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    }) as any[][]

    if (jsonData.length === 0) {
      return {
        success: false,
        error: "Le fichier Excel est vide",
      }
    }

    // First row as headers
    const headers = jsonData[0].map((header: any) => String(header).trim())

    // Convert remaining rows to objects
    const rows = jsonData
      .slice(1)
      .map((row: any[]) => {
        const obj: Record<string, any> = {}
        headers.forEach((header, index) => {
          obj[header] = row[index] || ""
        })
        return obj
      })
      .filter((row) => {
        return Object.values(row).some((value) => value !== "")
      })

    return {
      success: true,
      data: {
        headers,
        rows,
        totalRows: rows.length,
        fileName,
      },
    }
  } catch (error) {
    console.error("[v0] Excel parsing error:", error)
    return {
      success: false,
      error: "Erreur lors de l'analyse du fichier Excel",
    }
  }
}

export function validateParsedData(data: ParsedData): { isValid: boolean; issues: string[] } {
  const issues: string[] = []

  // Check if we have headers
  if (!data.headers || data.headers.length === 0) {
    issues.push("Aucune en-tête détectée dans le fichier")
  }

  // Check if we have data rows
  if (!data.rows || data.rows.length === 0) {
    issues.push("Aucune donnée détectée dans le fichier")
  }

  // Check for minimum required columns (we need at least 3 columns for basic analysis)
  if (data.headers && data.headers.length < 3) {
    issues.push("Le fichier doit contenir au moins 3 colonnes pour l'analyse")
  }

  // Check for reasonable data size
  if (data.rows && data.rows.length > 10000) {
    issues.push("Le fichier contient trop de lignes (maximum 10,000)")
  }

  return {
    isValid: issues.length === 0,
    issues,
  }
}
