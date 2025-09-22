# Configuration Notion pour Simple Sales Forecaster

## Variables d'environnement requises

\`\`\`env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_PAGE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

## Structure de la base de données Notion

Créez une base de données Notion avec les propriétés suivantes :

### Propriétés requises :

1. **Email** (Title) - L'adresse email du lead
2. **Lead Type** (Select) - Options: "Initial", "Qualified"
3. **Overall Score** (Number) - Score global de l'analyse (0-100)
4. **Total Pipeline** (Number) - Valeur totale du pipeline en euros
5. **Weighted Pipeline** (Number) - Pipeline pondéré en euros
6. **Total Deals** (Number) - Nombre total de deals
7. **High Risk Deals** (Number) - Nombre de deals à haut risque
8. **Medium Risk Deals** (Number) - Nombre de deals à risque moyen
9. **Low Risk Deals** (Number) - Nombre de deals à faible risque
10. **Created At** (Date) - Date de création du lead
11. **Status** (Select) - Options: "New", "Contacted", "Qualified", "Converted", "Lost"

## Configuration de l'intégration

1. Créez une intégration Notion sur https://www.notion.so/my-integrations
2. Copiez le token d'intégration dans `NOTION_TOKEN`
3. Partagez votre base de données avec l'intégration
4. Copiez l'ID de la base de données dans `NOTION_PAGE_ID`

## Utilisation

L'API synchronise automatiquement :
- Les leads initiaux (sans analyse)
- Les leads qualifiés (avec données d'analyse complètes)
- Les notifications Slack en temps réel
- Les webhooks Make.com pour l'automatisation
