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
    console.log("📝 Données reçues pour:", formData.firstName || "Contact inconnu")

    // Fonction pour formater les labels des réponses
    const formatLabel = (field: string, value: string) => {
      const labels: { [key: string]: { [key: string]: string } } = {
        function: {
          "ceo-fondateur": "CEO / Fondateur",
          "directeur-commercial": "Directeur Commercial",
          "manager-commercial": "Manager Commercial",
          autre: "Autre",
        },
        sector: {
          "services-b2b": "Services B2B (Conseil, Agence...)",
          "produits-b2b": "Produits B2B (Distribution...)",
          "saas-logiciel": "SaaS / Logiciel",
          industrie: "Industrie",
          autre: "Autre",
        },
        teamSize: {
          seul: "Je suis seul(e)",
          "2-5": "2 à 5 personnes",
          "6-15": "6 à 15 personnes",
          "15+": "Plus de 15 personnes",
        },
        averageBasket: {
          "moins-5k": "Moins de 5 000€",
          "5k-15k": "5 000€ à 15 000€",
          "15k-50k": "15 000€ à 50 000€",
          "plus-50k": "Plus de 50 000€",
        },
        cycleDuration: {
          "moins-30j": "Moins de 30 jours",
          "1-3-mois": "1 à 3 mois",
          "3-6-mois": "3 à 6 mois",
          "plus-6-mois": "Plus de 6 mois",
        },
        currentSymptom: {
          "previsions-instinct": "Pilotage des prévisions à l'instinct",
          "deals-bloques": "Deals qui se bloquent au dernier moment",
          "crm-subi": "CRM subi plutôt qu'utilisé comme arme de croissance",
          "formation-inutile": "Formations coûteuses sans impact terrain",
          "dependance-heros": 'Dépendance à un ou deux "héros" commerciaux',
          "message-dilue": "Message commercial dilué et incohérent",
        },
      }
      return labels[field]?.[value] || value
    }

    // Créer une page dans la database avec le nouveau format
    const response = await notion.pages.create({
      parent: {
        database_id: cleanDatabaseId,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: `Audit ${formData.firstName} ${formData.lastName} - ${new Date().toLocaleDateString("fr-FR")}`,
              },
            },
          ],
        },
      },
      children: [
        // En-tête principal
        {
          object: "block",
          type: "heading_1",
          heading_1: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "🎯 AUDIT COMMERCIAL SIMPLE.SALES",
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
                  content: `Date de soumission : ${new Date().toLocaleString("fr-FR")}`,
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

        // Section Contact
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "👤 INFORMATIONS CONTACT",
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
                  content: `Nom complet : ${formData.firstName || ""} ${formData.lastName || ""}`,
                },
                annotations: {
                  bold: true,
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
                  content: `Email : ${formData.email || "Non renseigné"}`,
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
                  content: `Téléphone : ${formData.phone || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Profil Professionnel
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "💼 PROFIL PROFESSIONNEL",
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
                  content: `Fonction : ${formatLabel("function", formData.function) || "Non renseigné"}`,
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
                  content: `Secteur d'activité : ${formatLabel("sector", formData.sector) || "Non renseigné"}`,
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
                  content: `Taille de l'équipe commerciale : ${formatLabel("teamSize", formData.teamSize) || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Données Économiques
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "💰 DONNÉES ÉCONOMIQUES",
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
                  content: `Panier moyen client : ${formatLabel("averageBasket", formData.averageBasket) || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Métriques d'Activité
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "📊 MÉTRIQUES D'ACTIVITÉ COMMERCIALE",
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
                  content: `Rendez-vous qualifiés par semaine : ${formData.weeklyMeetings || "Non renseigné"}`,
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
                  content: `Propositions commerciales par semaine : ${formData.weeklyProposals || "Non renseigné"}`,
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
                  content: `Nouveaux contrats signés par semaine : ${formData.weeklyContracts || "Non renseigné"}`,
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
                  content: `Durée moyenne du cycle de vente : ${formatLabel("cycleDuration", formData.cycleDuration) || "Non renseigné"}`,
                },
              },
            ],
          },
        },

        // Section Diagnostic Qualitatif
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "🔍 DIAGNOSTIC QUALITATIF",
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
                  content: "Symptôme principal identifié :",
                },
                annotations: {
                  bold: true,
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
                  content: formatLabel("currentSymptom", formData.currentSymptom) || "Non renseigné",
                },
                annotations: {
                  italic: true,
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
                  content: "Impact décrit par le prospect :",
                },
                annotations: {
                  bold: true,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "quote",
          quote: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: formData.symptomImpact || "Aucun impact décrit",
                },
              },
            ],
          },
        },

        // Section Suivi
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "📋 SUIVI ET ACTIONS",
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
                  content: `Choix du prospect : ${formData.finalChoice === "rdv" ? "🗓️ Rendez-vous demandé" : "📧 Audit par email uniquement"}`,
                },
                annotations: {
                  bold: true,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "Envoyer l'audit personnalisé par email",
                },
              },
            ],
            checked: false,
          },
        },
        ...(formData.finalChoice === "rdv"
          ? [
              {
                object: "block" as const,
                type: "to_do" as const,
                to_do: {
                  rich_text: [
                    {
                      type: "text" as const,
                      text: {
                        content: "Préparer le rendez-vous de diagnostic approfondi",
                      },
                    },
                  ],
                  checked: false,
                },
              },
            ]
          : []),

        // Métadonnées techniques
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
                  content: `ID de soumission : ${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                },
                annotations: {
                  code: true,
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
