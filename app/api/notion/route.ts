import { Client } from "@notionhq/client"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Vérifier les variables d'environnement
    const token = process.env.NOTION_TOKEN
    const databaseId = process.env.NOTION_PAGE_ID

    if (!token) {
      console.error("❌ NOTION_TOKEN manquant")
      return NextResponse.json(
        {
          success: false,
          error: "Configuration manquante",
          details: "NOTION_TOKEN non configuré",
        },
        { status: 500 },
      )
    }

    if (!databaseId) {
      console.error("❌ NOTION_PAGE_ID manquant")
      return NextResponse.json(
        {
          success: false,
          error: "Configuration manquante",
          details: "NOTION_PAGE_ID non configuré",
        },
        { status: 500 },
      )
    }

    // Nettoyer l'ID de database
    const cleanDatabaseId = databaseId.replace(/[-\s]/g, "")

    console.log("✅ Configuration validée")
    console.log("Token format:", token.substring(0, 10) + "...")
    console.log("Database ID format:", cleanDatabaseId.substring(0, 8) + "...")

    // Initialiser le client Notion
    const notion = new Client({
      auth: token,
    })

    const formData = await request.json()
    console.log("📝 Données reçues pour:", formData.companyName || "Entreprise inconnue")

    // Créer une page dans la database avec tout le contenu dans le corps de la page
    const response = await notion.pages.create({
      parent: {
        database_id: cleanDatabaseId,
      },
      properties: {
        // Seul le titre est nécessaire (nom de la colonne peut varier)
        title: {
          title: [
            {
              text: {
                content: `Audit ${formData.companyName || "Entreprise"} - ${new Date().toLocaleDateString("fr-FR")}`,
              },
            },
          ],
        },
      },
      children: [
        // En-tête
        {
          object: "block",
          type: "heading_1",
          heading_1: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "🎯 AUDIT COMMERCIAL EXPRESS",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Entreprise: ${formData.companyName || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Site web: ${formData.companyWebsite || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Contact: ${formData.firstName || ""} ${formData.lastName || ""} - ${formData.email || ""}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Date: ${new Date().toLocaleString("fr-FR")}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "divider",
          divider: {},
        },

        // Section Entreprise
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "🏢 PROFIL ENTREPRISE",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Entreprise: ${formData.companyName || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Site web: ${formData.companyWebsite || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Fonction: ${formData.function || "Non renseigné"}${formData.functionOther ? ` (${formData.functionOther})` : ""}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Secteur: ${formData.sector || "Non renseigné"}${formData.sectorOther ? ` (${formData.sectorOther})` : ""}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Taille équipe: ${formData.teamSize || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Économique
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "💰 ANALYSE ÉCONOMIQUE",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Panier moyen: ${formData.averageBasket || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `CA annuel: ${formData.annualRevenue || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Activité
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "📊 DIAGNOSTIC ACTIVITÉ",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `RDV/semaine: ${formData.weeklyMeetings || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Propositions/semaine: ${formData.weeklyProposals || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Durée cycle: ${formData.averageCycleDuration || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Performance
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "🎯 ANALYSE CONVERSION",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Taux RDV → Proposition: ${formData.meetingToProposalRate || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Taux Proposition → Signature: ${formData.proposalToSignatureRate || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Évolution performance: ${formData.performanceEvolution || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Contact
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "📞 CONTACT",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Nom: ${formData.firstName || ""} ${formData.lastName || ""}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Email: ${formData.email || "Non renseigné"}`,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Téléphone: ${formData.phone || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Métadonnées
        {
          object: "block",
          type: "divider",
          divider: {},
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: `Choix final: ${formData.finalChoice || "Non renseigné"}`,
                },
              },
            ],
          },
        },
      ],
    })

    console.log("✅ Audit sauvegardé dans Notion Database:", response.id)

    return NextResponse.json({
      success: true,
      pageId: response.id,
      message: "Audit sauvegardé avec succès dans la database",
    })
  } catch (error: any) {
    console.error("❌ Erreur Notion:", error)

    let errorMessage = "Erreur inconnue"
    let solution = "Contactez le support"

    if (error.code === "unauthorized") {
      errorMessage = "Token Notion invalide"
      solution = "Vérifiez votre NOTION_TOKEN"
    } else if (error.code === "object_not_found") {
      errorMessage = "Database Notion introuvable"
      solution = "Vérifiez votre NOTION_PAGE_ID et que la database existe et est partagée"
    } else if (error.code === "restricted_resource") {
      errorMessage = "Accès refusé à la database"
      solution = "Partagez la database avec votre intégration"
    } else if (error.message) {
      errorMessage = error.message
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        solution: solution,
        code: error.code || "unknown",
      },
      { status: 500 },
    )
  }
}
