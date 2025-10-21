import type { Metadata } from "next"
import GuidePageWrapper from "@/components/guide-page-wrapper"
import { getCurrentYear } from "@/lib/date-utils"

export const metadata: Metadata = {
  title: `MEDDPICC Guide Complet ${getCurrentYear()} : Qualification Commerciale | Simple Sales`,
  description:
    "Maîtrisez MEDDPICC pour qualifier vos opportunités B2B. Templates, checklists, techniques d'écoute active. +67% de taux de closing garantis.",
}

const sections = [
  { id: "pourquoi-meddpicc", title: "Pourquoi MEDDPICC" },
  { id: "8-piliers", title: "Les 8 Piliers" },
  { id: "metrics", title: "M - Metrics" },
  { id: "economic-buyer", title: "E - Economic Buyer" },
  { id: "decision-criteria", title: "D - Decision Criteria" },
  { id: "decision-process", title: "D - Decision Process" },
  { id: "paper-process", title: "P - Paper Process" },
  { id: "identify-pain", title: "I - Identify Pain" },
  { id: "champion", title: "C - Champion" },
  { id: "competition", title: "C - Competition" },
  { id: "scoring", title: "Scoring MEDDPICC" },
  { id: "implementation", title: "Plan d'Implémentation" },
  { id: "cas-client", title: "Cas Client" },
  { id: "prochaine-etape", title: "Votre Prochaine Étape" },
]

export default function MeddpiccPage() {
  return (
    <GuidePageWrapper
      title="MEDDPICC : Guide Complet de Qualification Commerciale B2B"
      subtitle="La méthodologie qui transforme vos prospects en clients prévisibles"
      category="SECTION 3 : QUALIFICATION"
      sections={sections}
      previousGuide={{
        href: "/nos-guides/prospection-b2b-2024",
        title: "Prospection et Acquisition 4.0",
      }}
      nextGuide={{
        href: "/nos-guides/negociation-commerciale-avancee",
        title: "Négociation et Closing",
      }}
    >
      {/* Introduction Section */}
      <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-medium mb-4">Votre Défi de Directeur Commercial</h2>
        <p className="mb-4 leading-relaxed">
          Vos commerciaux obtiennent des RDV mais seulement 35% se transforment en propositions ? Pire : 60% de vos
          propositions restent sans réponse ?
        </p>
        <p className="font-medium mb-4">Le problème n'est pas votre produit, c'est votre qualification.</p>
        <ul className="space-y-2 mb-4">
          <li>
            <strong>78% des commerciaux</strong> échouent à l'étape de qualification
          </li>
          <li>
            <strong>65% des RDV découverte</strong> n'aboutissent jamais à une proposition
          </li>
          <li>
            <strong>73% des deals "perdus"</strong> étaient en réalité mal qualifiés dès le départ
          </li>
        </ul>
        <p className="mb-4 leading-relaxed">
          <strong>MEDDPICC change la donne :</strong> Les entreprises qui l'appliquent voient leur taux de closing
          passer de 20% à 35% en moyenne, tout en réduisant leurs cycles de vente de 28%.
        </p>
        <p>
          Ce guide vous donne la maîtrise complète de cette méthodologie utilisée par Salesforce, Microsoft, Oracle et
          toutes les entreprises qui vendent +100k€ par deal.
        </p>
      </div>

      {/* Why MEDDPICC Section */}
      <section id="pourquoi-meddpicc" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">Pourquoi MEDDPICC Révolutionne la Qualification</h2>

        <h3 className="text-2xl font-medium mb-4">L'Évolution des Méthodologies de Qualification</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Époque</th>
                <th className="border border-gray-300 p-3 text-left">Méthode</th>
                <th className="border border-gray-300 p-3 text-left">Contexte</th>
                <th className="border border-gray-300 p-3 text-left">Limites 2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">1950s</td>
                <td className="border border-gray-300 p-3">
                  <strong>BANT</strong>
                </td>
                <td className="border border-gray-300 p-3">Vente simple, 1 décideur</td>
                <td className="border border-gray-300 p-3">Trop basique pour le B2B moderne</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">1990s</td>
                <td className="border border-gray-300 p-3">
                  <strong>SPIN Selling</strong>
                </td>
                <td className="border border-gray-300 p-3">Vente consultative</td>
                <td className="border border-gray-300 p-3">Manque de structure pour deals complexes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">2000s</td>
                <td className="border border-gray-300 p-3">
                  <strong>MEDDIC</strong>
                </td>
                <td className="border border-gray-300 p-3">Vente enterprise</td>
                <td className="border border-gray-300 p-3">Bon mais incomplet</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 p-3">2010s</td>
                <td className="border border-gray-300 p-3">
                  <strong>MEDDPICC</strong>
                </td>
                <td className="border border-gray-300 p-3">Vente B2B moderne</td>
                <td className="border border-gray-300 p-3">
                  <strong>LA référence actuelle</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium mb-4">Pourquoi BANT Ne Fonctionne Plus</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">BANT (Budget, Authority, Need, Timeline)</h4>
            <ul className="space-y-2">
              <li>❌ Trop simpliste pour les décisions B2B modernes</li>
              <li>❌ 6,8 personnes influencent chaque achat (vs 1 en 1950)</li>
              <li>❌ 67% du parcours se fait avant le contact commercial</li>
              <li>❌ Ne prédit pas la probabilité de closing</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">MEDDPICC répond à ces enjeux</h4>
            <ul className="space-y-2">
              <li>✅ 8 dimensions couvrent toute la complexité B2B</li>
              <li>✅ Prédictibilité : corrélation 89% entre score MEDDPICC et closing</li>
              <li>✅ Universalité : fonctionne dans tous les secteurs B2B</li>
              <li>✅ Évolutivité : s'adapte aux cycles courts et longs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8 Pillars Overview */}
      <section id="8-piliers" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">MEDDPICC : Les 8 Piliers de la Qualification Expert</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Lettre</th>
                <th className="border border-gray-300 p-3 text-left">Composante</th>
                <th className="border border-gray-300 p-3 text-left">Question Clé</th>
                <th className="border border-gray-300 p-3 text-left">Impact Closing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>M</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Metrics</strong>
                </td>
                <td className="border border-gray-300 p-3">Quel est l'impact business quantifié ?</td>
                <td className="border border-gray-300 p-3">+23%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>E</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Economic Buyer</strong>
                </td>
                <td className="border border-gray-300 p-3">Qui contrôle vraiment le budget ?</td>
                <td className="border border-gray-300 p-3">+31%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>D</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Decision Criteria</strong>
                </td>
                <td className="border border-gray-300 p-3">Sur quoi serez-vous évalué ?</td>
                <td className="border border-gray-300 p-3">+18%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>D</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Decision Process</strong>
                </td>
                <td className="border border-gray-300 p-3">Comment la décision sera-t-elle prise ?</td>
                <td className="border border-gray-300 p-3">+25%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>P</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Paper Process</strong>
                </td>
                <td className="border border-gray-300 p-3">Quel est le processus administratif ?</td>
                <td className="border border-gray-300 p-3">+15%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>I</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Identify Pain</strong>
                </td>
                <td className="border border-gray-300 p-3">Quelle est la douleur réelle ?</td>
                <td className="border border-gray-300 p-3">+28%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>C</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Champion</strong>
                </td>
                <td className="border border-gray-300 p-3">Qui porte votre solution en interne ?</td>
                <td className="border border-gray-300 p-3">+35%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>C</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>Competition</strong>
                </td>
                <td className="border border-gray-300 p-3">Contre qui êtes-vous en compétition ?</td>
                <td className="border border-gray-300 p-3">+22%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center font-medium text-lg mb-8">Impact cumulé : +67% de taux de closing moyen</p>
      </section>

      {/* M - Metrics Section */}
      <section id="metrics" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">M - METRICS : Quantifier l'Impact Business</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-medium mb-3">Votre Défi de Qualification</h3>
          <p>
            Vos commerciaux entendent "nous voulons améliorer nos ventes" mais ne creusent pas l'impact chiffré.
            Résultat : impossible de justifier votre prix ou créer l'urgence.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 3 Types de Métriques à Identifier</h3>

        <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-medium mb-3">1. MÉTRIQUES DE PERFORMANCE ACTUELLES</h4>
          <p className="mb-4">
            <strong>Questions de découverte :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>"Quels sont vos KPIs principaux sur ce sujet ?"</li>
            <li>"Comment mesurez-vous la performance actuelle ?"</li>
            <li>"Pouvez-vous me donner des chiffres concrets ?"</li>
            <li>"Quelle est votre situation vs vos objectifs ?"</li>
          </ul>

          <div className="bg-gray-50 p-4 rounded font-mono text-sm">
            <p className="font-bold mb-2">Template de qualification Metrics :</p>
            <pre className="whitespace-pre-wrap">
              {`MÉTRIQUES ACTUELLES

KPI Principal 1 : ________________
Valeur actuelle : ________________
Objectif : ________________
Écart : ________________

KPI Principal 2 : ________________
Valeur actuelle : ________________
Objectif : ________________
Écart : ________________`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-medium mb-3">2. MÉTRIQUES D'IMPACT DU PROBLÈME</h4>
          <p className="mb-4">
            <strong>Questions de quantification :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>"Combien vous coûte ce problème par mois ?"</li>
            <li>"Quel impact sur votre CA annuel ?"</li>
            <li>"Combien de temps/ressources mobilisées ?"</li>
            <li>"Que se passe-t-il si vous ne résolvez pas ça ?"</li>
          </ul>

          <p className="font-medium mb-3">Calculateur d'Impact Business :</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Type d'Impact</th>
                  <th className="border border-gray-300 p-2 text-left">Fréquence</th>
                  <th className="border border-gray-300 p-2 text-left">Coût Unitaire</th>
                  <th className="border border-gray-300 p-2 text-left">Impact Mensuel</th>
                  <th className="border border-gray-300 p-2 text-left">Impact Annuel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Perte de CA</td>
                  <td className="border border-gray-300 p-2">___/mois</td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Coûts opérationnels</td>
                  <td className="border border-gray-300 p-2">___/mois</td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Temps perdu</td>
                  <td className="border border-gray-300 p-2">___h/mois</td>
                  <td className="border border-gray-300 p-2">___€/h</td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                </tr>
                <tr className="bg-amber-50 font-bold">
                  <td className="border border-gray-300 p-2">TOTAL IMPACT</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">___€</td>
                  <td className="border border-gray-300 p-2">___€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-medium mb-3">Checklist Validation Metrics</h4>
          <ul className="space-y-2">
            <li>☐ Impact quantifié en euros/pourcentage</li>
            <li>☐ Métriques confirmées par plusieurs sources</li>
            <li>☐ Urgence établie (coût de l'inaction)</li>
            <li>☐ Objectifs réalistes et mesurables</li>
            <li>☐ ROI calculé et validé par le prospect</li>
            <li>☐ Timeline d'amélioration définie</li>
          </ul>
        </div>
      </section>

      {/* E - Economic Buyer Section */}
      <section id="economic-buyer" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">E - ECONOMIC BUYER : Identifier le Vrai Décideur</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-medium mb-3">Votre Défi de Qualification</h3>
          <p>
            73% des deals échouent car l'Economic Buyer n'est jamais rencontré. Vos commerciaux parlent aux utilisateurs
            ou sponsors, mais pas à celui qui contrôle le budget.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Profils Types d'Economic Buyers par Contexte</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Secteur</th>
                <th className="border border-gray-300 p-3 text-left">&lt; 50k€</th>
                <th className="border border-gray-300 p-3 text-left">50k-200k€</th>
                <th className="border border-gray-300 p-3 text-left">200k-500k€</th>
                <th className="border border-gray-300 p-3 text-left">&gt; 500k€</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">SaaS/Tech</td>
                <td className="border border-gray-300 p-3">VP/Directeur métier</td>
                <td className="border border-gray-300 p-3">C-Level métier</td>
                <td className="border border-gray-300 p-3">CEO/CFO</td>
                <td className="border border-gray-300 p-3">CEO + Board</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Industrie</td>
                <td className="border border-gray-300 p-3">Directeur site/usine</td>
                <td className="border border-gray-300 p-3">Directeur division</td>
                <td className="border border-gray-300 p-3">CEO/CFO</td>
                <td className="border border-gray-300 p-3">CEO + Board</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Services</td>
                <td className="border border-gray-300 p-3">Directeur opérationnel</td>
                <td className="border border-gray-300 p-3">CEO/DG</td>
                <td className="border border-gray-300 p-3">CEO + CFO</td>
                <td className="border border-gray-300 p-3">CEO + Board</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium mb-4">Stratégies d'Accès à l'Economic Buyer</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Approche 1 : Via le Champion</h4>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <p className="font-medium mb-2">Script de demande d'accès :</p>
              <p className="italic">
                "[Prénom], je comprends que vous portez ce projet et j'apprécie votre engagement. Pour que ma
                proposition soit vraiment pertinente et adaptée aux enjeux de [Entreprise], j'aurais besoin de
                comprendre la vision stratégique de [nom EB]. Pouvez-vous nous organiser un point avec lui/elle ? Même
                15 minutes suffiraient pour cadrer les enjeux."
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Approche 2 : Directe</h4>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <p className="font-medium mb-2">Email à l'Economic Buyer :</p>
              <p className="italic">
                Objet : [Entreprise] - Projet [nom projet] porté par [Champion] <br />
                <br />
                Bonjour [Prénom EB],
                <br />
                <br />
                [Champion] et moi travaillons sur [projet] qui pourrait avoir un impact de [bénéfice chiffré] pour
                [Entreprise]. Avant de finaliser ma recommandation, j'aimerais m'assurer qu'elle s'aligne parfaitement
                avec vos priorités stratégiques. Auriez-vous 15 minutes cette semaine pour échanger sur les enjeux
                business de ce projet ?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Criteria Section */}
      <section id="decision-criteria" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">D - DECISION CRITERIA : Comprendre les Critères de Choix</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <p>
            Vos commerciaux présentent leurs forces sans connaître les critères de décision du client. Résultat : ils
            passent à côté des vrais enjeux et perdent face à des concurrents mieux alignés.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 4 Types de Critères de Décision</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">1. Critères Techniques</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Fonctionnalités requises</li>
              <li>Intégrations nécessaires</li>
              <li>Contraintes de sécurité</li>
              <li>Performance attendue</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">2. Critères Business</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>ROI / Rentabilité</li>
              <li>Rapidité déploiement</li>
              <li>Facilité adoption</li>
              <li>Évolutivité</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">3. Critères Organisationnels</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Gestion du changement</li>
              <li>Ressources internes</li>
              <li>Impact sur les équipes</li>
              <li>Capacité d'adoption</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">4. Critères Cachés/Politiques</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Sensibilités internes</li>
              <li>Historique projets</li>
              <li>Oppositions potentielles</li>
              <li>Enjeux politiques</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-4">Questions de Découverte des Critères</h3>
        <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Questions Directes</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>"Sur quels critères allez-vous évaluer les différentes solutions ?"</li>
            <li>"Qu'est-ce qui est le plus important pour vous dans ce choix ?"</li>
            <li>"Comment allez-vous comparer les différentes propositions ?"</li>
            <li>"Quels sont vos must-have vs nice-to-have ?"</li>
          </ul>

          <h4 className="font-medium mb-3">Questions Indirectes</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>"Qu'est-ce qui a fait échouer votre dernier projet similaire ?"</li>
            <li>"Si vous deviez choisir entre X et Y, lequel privilégieriez-vous ?"</li>
            <li>"Qu'est-ce qui inquiète le plus votre direction sur ce type de projet ?"</li>
            <li>"Quelles objections anticipez-vous en interne ?"</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Template de Mapping des Critères</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Critère</th>
                  <th className="border border-gray-300 p-2 text-left">Importance (1-10)</th>
                  <th className="border border-gray-300 p-2 text-left">Notre Position</th>
                  <th className="border border-gray-300 p-2 text-left">Concurrence</th>
                  <th className="border border-gray-300 p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">_______________</td>
                  <td className="border border-gray-300 p-2">___/10</td>
                  <td className="border border-gray-300 p-2">Fort/Moyen/Faible</td>
                  <td className="border border-gray-300 p-2">Fort/Moyen/Faible</td>
                  <td className="border border-gray-300 p-2">_______________</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_______________</td>
                  <td className="border border-gray-300 p-2">___/10</td>
                  <td className="border border-gray-300 p-2">Fort/Moyen/Faible</td>
                  <td className="border border-gray-300 p-2">Fort/Moyen/Faible</td>
                  <td className="border border-gray-300 p-2">_______________</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3">Stratégie d'Influence des Critères</h4>
          <p className="mb-4">
            <strong>Principe clé :</strong> Les meilleurs commerciaux n'attendent pas les critères, ils les influencent.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Identifier tôt</strong> : Découvrir les critères avant qu'ils ne soient figés
            </li>
            <li>
              <strong>Éduquer</strong> : Partager des insights qui orientent vers vos forces
            </li>
            <li>
              <strong>Prioriser</strong> : Aider le client à hiérarchiser les critères
            </li>
            <li>
              <strong>Différencier</strong> : Introduire des critères où vous excellez
            </li>
            <li>
              <strong>Valider</strong> : Confirmer l'alignement avec l'Economic Buyer
            </li>
          </ol>
        </div>
      </section>

      {/* Decision Process Section */}
      <section id="decision-process" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">D - DECISION PROCESS : Mapper le Processus de Décision</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-medium mb-3">Votre Défi de Qualification</h3>
          <p>
            Vos commerciaux pensent que la décision se prend après leur démo. En réalité, 67% du processus d'achat B2B
            se déroule sans eux. Sans comprendre ce processus, impossible de l'influencer.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 7 Étapes du Processus de Décision B2B</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Étape</th>
                <th className="border border-gray-300 p-3 text-left">Activités Clés</th>
                <th className="border border-gray-300 p-3 text-left">Parties Prenantes</th>
                <th className="border border-gray-300 p-3 text-left">Votre Rôle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>1. Reconnaissance du problème</strong>
                </td>
                <td className="border border-gray-300 p-3">Identification de la douleur</td>
                <td className="border border-gray-300 p-3">Utilisateurs, managers</td>
                <td className="border border-gray-300 p-3">Éduquer, quantifier l'impact</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>2. Exploration des solutions</strong>
                </td>
                <td className="border border-gray-300 p-3">Recherche, benchmarks</td>
                <td className="border border-gray-300 p-3">Équipe projet</td>
                <td className="border border-gray-300 p-3">Positionner, différencier</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>3. Définition des critères</strong>
                </td>
                <td className="border border-gray-300 p-3">Cahier des charges</td>
                <td className="border border-gray-300 p-3">Sponsors, experts</td>
                <td className="border border-gray-300 p-3">Influencer les critères</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>4. Évaluation des options</strong>
                </td>
                <td className="border border-gray-300 p-3">Démos, POCs, références</td>
                <td className="border border-gray-300 p-3">Comité d'évaluation</td>
                <td className="border border-gray-300 p-3">Démontrer la valeur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>5. Validation business</strong>
                </td>
                <td className="border border-gray-300 p-3">Business case, ROI</td>
                <td className="border border-gray-300 p-3">Finance, direction</td>
                <td className="border border-gray-300 p-3">Justifier l'investissement</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>6. Négociation</strong>
                </td>
                <td className="border border-gray-300 p-3">Termes, conditions, prix</td>
                <td className="border border-gray-300 p-3">Achats, juridique, EB</td>
                <td className="border border-gray-300 p-3">Défendre la valeur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>7. Validation finale</strong>
                </td>
                <td className="border border-gray-300 p-3">Approbations, signatures</td>
                <td className="border border-gray-300 p-3">C-Level, board</td>
                <td className="border border-gray-300 p-3">Faciliter la décision</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium mb-4">Questions de Découverte du Processus</h3>
        <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Questions Essentielles</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>"Pouvez-vous me décrire comment se prennent généralement ce type de décisions chez vous ?"</li>
            <li>"Qui doit valider à chaque étape ?"</li>
            <li>"Quelles sont les étapes formelles vs informelles ?"</li>
            <li>"Combien de temps prend généralement chaque étape ?"</li>
            <li>"Quels sont les points de blocage habituels ?"</li>
            <li>"Y a-t-il des comités ou réunions de validation spécifiques ?"</li>
            <li>"Qui a un droit de veto ?"</li>
            <li>"Qu'est-ce qui pourrait ralentir ou bloquer le processus ?"</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Template de Mapping du Processus</h4>
          <div className="font-mono text-sm bg-white p-4 rounded border border-gray-300">
            <pre className="whitespace-pre-wrap">
              {`PROCESSUS DE DÉCISION

Étape 1 : _______________________
Date prévue : ___/___/___
Parties prenantes : _______________________
Livrables requis : _______________________
Risques : _______________________

Étape 2 : _______________________
Date prévue : ___/___/___
Parties prenantes : _______________________
Livrables requis : _______________________
Risques : _______________________

[Répéter pour chaque étape]

POINTS DE VALIDATION CRITIQUES :
☐ _______________________
☐ _______________________
☐ _______________________

RISQUES DE BLOCAGE :
⚠ _______________________
⚠ _______________________`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3">Stratégies d'Accélération du Processus</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Tactiques Proactives</h5>
              <ul className="space-y-1 text-sm">
                <li>✓ Anticiper les besoins de chaque étape</li>
                <li>✓ Préparer les documents en avance</li>
                <li>✓ Identifier les goulots d'étranglement</li>
                <li>✓ Proposer un calendrier réaliste</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Tactiques Réactives</h5>
              <ul className="space-y-1 text-sm">
                <li>✓ Débloquer les situations via le Champion</li>
                <li>✓ Escalader si nécessaire</li>
                <li>✓ Proposer des alternatives</li>
                <li>✓ Maintenir la pression positive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Process Section */}
      <section id="paper-process" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">P - PAPER PROCESS : Anticiper le Processus Administratif</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-medium mb-3">Votre Défi de Qualification</h3>
          <p>
            42% des deals "gagnés" se bloquent au moment de la signature. Vos commerciaux célèbrent trop tôt, sans
            anticiper les processus juridiques, achats, et administratifs qui peuvent prendre 2-6 mois supplémentaires.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 5 Dimensions du Paper Process</h3>
        <div className="space-y-6 mb-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">1. PROCESSUS JURIDIQUE</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Questions à poser :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Qui gère la revue des contrats ?</li>
                  <li>Utilisez-vous vos propres CGV ?</li>
                  <li>Quels sont vos points de vigilance juridiques ?</li>
                  <li>Combien de temps prend la revue juridique ?</li>
                  <li>Y a-t-il des clauses non négociables ?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Actions préventives :</p>
                <ul className="space-y-1 text-sm">
                  <li>☐ Partager le contrat type en avance</li>
                  <li>☐ Identifier les points de friction potentiels</li>
                  <li>☐ Préparer les justifications</li>
                  <li>☐ Impliquer votre juridique tôt</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">2. PROCESSUS ACHATS</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Questions à poser :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>À quel moment les achats interviennent ?</li>
                  <li>Quels documents sont requis ?</li>
                  <li>Y a-t-il un processus d'appel d'offres ?</li>
                  <li>Combien de devis sont nécessaires ?</li>
                  <li>Quels sont les délais de traitement ?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Actions préventives :</p>
                <ul className="space-y-1 text-sm">
                  <li>☐ Rencontrer les achats en amont</li>
                  <li>☐ Préparer tous les documents requis</li>
                  <li>☐ Justifier le prix et la valeur</li>
                  <li>☐ Anticiper les demandes de remise</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">3. PROCESSUS SÉCURITÉ/CONFORMITÉ</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Questions à poser :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Y a-t-il un audit de sécurité requis ?</li>
                  <li>Quelles certifications sont nécessaires ?</li>
                  <li>Qui valide la conformité RGPD/ISO ?</li>
                  <li>Quels questionnaires de sécurité ?</li>
                  <li>Combien de temps prend la validation ?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Actions préventives :</p>
                <ul className="space-y-1 text-sm">
                  <li>☐ Partager vos certifications</li>
                  <li>☐ Préparer les réponses aux questionnaires</li>
                  <li>☐ Organiser un audit si nécessaire</li>
                  <li>☐ Documenter vos pratiques de sécurité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">4. PROCESSUS FINANCIER</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Questions à poser :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Comment se fait la validation budgétaire ?</li>
                  <li>Qui signe les bons de commande ?</li>
                  <li>Quels sont les seuils d'approbation ?</li>
                  <li>Quelles modalités de paiement ?</li>
                  <li>Y a-t-il des contraintes de trésorerie ?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Actions préventives :</p>
                <ul className="space-y-1 text-sm">
                  <li>☐ Confirmer le budget disponible</li>
                  <li>☐ Proposer des options de paiement</li>
                  <li>☐ Préparer les justifications ROI</li>
                  <li>☐ Identifier les approbateurs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">5. PROCESSUS DE SIGNATURE</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Questions à poser :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Qui a le pouvoir de signature ?</li>
                  <li>Signature électronique acceptée ?</li>
                  <li>Combien de signatures nécessaires ?</li>
                  <li>Quel est le circuit de signature ?</li>
                  <li>Quels documents doivent être signés ?</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Actions préventives :</p>
                <ul className="space-y-1 text-sm">
                  <li>☐ Préparer tous les documents</li>
                  <li>☐ Faciliter la signature électronique</li>
                  <li>☐ Suivre le circuit de signature</li>
                  <li>☐ Relancer proactivement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Checklist Paper Process</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Documents à préparer</h5>
              <ul className="space-y-1 text-sm">
                <li>☐ Contrat commercial</li>
                <li>☐ Conditions générales de vente</li>
                <li>☐ Annexes techniques</li>
                <li>☐ Politique de confidentialité</li>
                <li>☐ DPA (Data Processing Agreement)</li>
                <li>☐ Certificats de conformité</li>
                <li>☐ Questionnaires de sécurité</li>
                <li>☐ Références clients</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Parties prenantes à identifier</h5>
              <ul className="space-y-1 text-sm">
                <li>☐ Responsable juridique</li>
                <li>☐ Responsable achats</li>
                <li>☐ RSSI / DPO</li>
                <li>☐ Directeur financier</li>
                <li>☐ Signataires autorisés</li>
                <li>☐ Responsable conformité</li>
                <li>☐ Équipe IT (validation technique)</li>
                <li>☐ Assistante de direction (coordination)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3">⚠️ Red Flags Paper Process</h4>
          <p className="mb-3">Signes d'alerte qui indiquent des risques de blocage :</p>
          <ul className="space-y-2">
            <li>
              🚩 <strong>Flou sur le processus</strong> : "On verra ça plus tard"
            </li>
            <li>
              🚩 <strong>Multiples validations</strong> : Plus de 5 signatures requises
            </li>
            <li>
              🚩 <strong>Juridique strict</strong> : "Nous n'acceptons que nos CGV"
            </li>
            <li>
              🚩 <strong>Achats agressifs</strong> : Demande de 3+ devis comparatifs
            </li>
            <li>
              🚩 <strong>Timing flou</strong> : "Ça devrait aller vite" sans précision
            </li>
            <li>
              🚩 <strong>Nouveaux intervenants</strong> : Personnes non identifiées qui apparaissent tard
            </li>
          </ul>
        </div>
      </section>

      {/* Identify Pain Section */}
      <section id="identify-pain" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">I - IDENTIFY PAIN : Identifier la Douleur Profonde</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-medium mb-3">Votre Défi de Qualification</h3>
          <p>
            Vos commerciaux entendent "on a un problème" mais ne creusent pas assez. Résultat : ils vendent des
            fonctionnalités au lieu de résoudre des douleurs. Sans douleur profonde, pas d'urgence, pas de budget, pas
            de closing.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 3 Niveaux de Douleur</h3>
        <div className="space-y-6 mb-6">
          <div className="bg-red-50 border-l-4 border-l-red-400 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">Niveau 1 : DOULEUR DE SURFACE (Insuffisant)</h4>
            <p className="mb-3">
              <strong>Caractéristiques :</strong> Problème mentionné mais pas urgent, impact flou, pas de conséquences
              graves
            </p>
            <div className="bg-white p-4 rounded mb-3">
              <p className="font-medium mb-2">Exemples :</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"On aimerait améliorer nos processus"</li>
                <li>"Ce serait bien d'avoir plus de visibilité"</li>
                <li>"On perd du temps sur certaines tâches"</li>
              </ul>
            </div>
            <p className="text-sm">
              <strong>Risque :</strong> Projet reporté indéfiniment, pas de budget alloué, statu quo gagnant
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-l-orange-400 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">Niveau 2 : DOULEUR OPÉRATIONNELLE (Moyen)</h4>
            <p className="mb-3">
              <strong>Caractéristiques :</strong> Impact quantifié, conséquences mesurables, urgence modérée
            </p>
            <div className="bg-white p-4 rounded mb-3">
              <p className="font-medium mb-2">Exemples :</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"On perd 15h/semaine sur des tâches manuelles"</li>
                <li>"Notre taux d'erreur est de 12%, ça nous coûte 50k€/an"</li>
                <li>"On rate 20% de nos deadlines clients"</li>
              </ul>
            </div>
            <p className="text-sm">
              <strong>Potentiel :</strong> Projet viable si ROI démontré, budget possible, timeline 6-12 mois
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-l-green-600 p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3">Niveau 3 : DOULEUR STRATÉGIQUE (Idéal)</h4>
            <p className="mb-3">
              <strong>Caractéristiques :</strong> Impact business critique, conséquences graves si non résolu, urgence
              forte
            </p>
            <div className="bg-white p-4 rounded mb-3">
              <p className="font-medium mb-2">Exemples :</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"On perd 3 clients majeurs par trimestre à cause de ce problème"</li>
                <li>"Notre principal concurrent nous dépasse grâce à cette capacité"</li>
                <li>"Si on ne résout pas ça, on rate nos objectifs annuels de 2M€"</li>
                <li>"La direction nous a donné 6 mois pour régler ce problème"</li>
              </ul>
            </div>
            <p className="text-sm">
              <strong>Opportunité :</strong> Projet prioritaire, budget débloqué, timeline accélérée, closing probable
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-4">Technique SPIN pour Creuser la Douleur</h3>
        <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
          <p className="mb-4">
            <strong>SPIN Selling</strong> est la méthode de questionnement la plus efficace pour transformer une douleur
            de surface en douleur stratégique.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-l-blue-400 pl-4">
              <h4 className="font-medium mb-2">S - SITUATION Questions</h4>
              <p className="text-sm mb-2">Comprendre le contexte actuel</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"Comment gérez-vous actuellement [processus] ?"</li>
                <li>"Quels outils/méthodes utilisez-vous aujourd'hui ?"</li>
                <li>"Combien de personnes sont impliquées ?"</li>
              </ul>
            </div>

            <div className="border-l-4 border-l-orange-400 pl-4">
              <h4 className="font-medium mb-2">P - PROBLEM Questions</h4>
              <p className="text-sm mb-2">Identifier les difficultés et frustrations</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"Quelles difficultés rencontrez-vous avec votre approche actuelle ?"</li>
                <li>"Qu'est-ce qui ne fonctionne pas comme vous le souhaiteriez ?"</li>
                <li>"Quels sont les points de friction principaux ?"</li>
              </ul>
            </div>

            <div className="border-l-4 border-l-red-400 pl-4">
              <h4 className="font-medium mb-2">I - IMPLICATION Questions</h4>
              <p className="text-sm mb-2">Amplifier les conséquences (CLÉS pour creuser la douleur)</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"Quel impact ce problème a-t-il sur vos résultats ?"</li>
                <li>"Que se passe-t-il si vous ne résolvez pas ça ?"</li>
                <li>"Comment cela affecte-t-il vos clients/équipes ?"</li>
                <li>"Quelles opportunités manquez-vous à cause de ça ?"</li>
                <li>"Quel est le coût de l'inaction ?"</li>
              </ul>
            </div>

            <div className="border-l-4 border-l-green-400 pl-4">
              <h4 className="font-medium mb-2">N - NEED-PAYOFF Questions</h4>
              <p className="text-sm mb-2">Faire verbaliser la valeur de la solution</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>"Si vous pouviez résoudre ce problème, quel serait l'impact ?"</li>
                <li>"Qu'est-ce que ça changerait pour votre équipe ?"</li>
                <li>"Comment cela vous aiderait-il à atteindre vos objectifs ?"</li>
                <li>"Quelle valeur cela représenterait-il pour l'entreprise ?"</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-4">Framework de Qualification de la Douleur</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="font-mono text-sm bg-white p-4 rounded border border-gray-300">
            <pre className="whitespace-pre-wrap">
              {`QUALIFICATION DE LA DOULEUR

1. DESCRIPTION DE LA DOULEUR
Problème principal : _______________________
Depuis quand : _______________________
Fréquence : _______________________

2. IMPACT QUANTIFIÉ
Impact financier : _______€/an
Impact temps : _______h/semaine
Impact qualité : _______%
Autres impacts : _______________________

3. CONSÉQUENCES
Si non résolu dans 3 mois : _______________________
Si non résolu dans 6 mois : _______________________
Si non résolu dans 12 mois : _______________________

4. TENTATIVES PRÉCÉDENTES
Solutions essayées : _______________________
Pourquoi ça n'a pas marché : _______________________
Leçons apprises : _______________________

5. URGENCE
Priorité (1-10) : ___/10
Deadline : ___/___/___
Raison de l'urgence : _______________________

6. NIVEAU DE DOULEUR
☐ Surface (Nice to have)
☐ Opérationnelle (Should have)
☐ Stratégique (Must have) ← CIBLE`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h4 className="text-xl font-medium mb-3">Checklist Validation de la Douleur</h4>
          <p className="mb-4">Une douleur est suffisamment qualifiée quand vous pouvez cocher tous ces points :</p>
          <ul className="space-y-2">
            <li>☐ Impact quantifié en euros ou pourcentage</li>
            <li>☐ Conséquences graves si non résolu</li>
            <li>☐ Urgence établie avec deadline</li>
            <li>☐ Douleur confirmée par plusieurs personnes</li>
            <li>☐ Tentatives précédentes documentées</li>
            <li>☐ Lien direct avec les objectifs business</li>
            <li>☐ Economic Buyer conscient de la douleur</li>
            <li>☐ Budget disponible ou déblocable</li>
          </ul>
          <p className="mt-4 font-medium">
            Si vous ne pouvez pas cocher au moins 6/8, la douleur n'est pas assez profonde pour justifier un achat.
          </p>
        </div>
      </section>

      {/* Champion Section */}
      <section id="champion" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">C - CHAMPION : Développer votre Allié Interne</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <p>
            65% des deals sans champion échouent. Vos commerciaux comptent sur leur relation avec le contact principal,
            mais n'identifient pas et n'équipent pas un vrai champion interne.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 4 Critères du Champion Parfait</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">1. INFLUENCE (Pouvoir organisationnel)</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Respecté dans l'organisation</li>
              <li>☐ Historique de projets réussis</li>
              <li>☐ Réseau interne développé</li>
              <li>☐ Crédibilité auprès du management</li>
              <li>☐ Capacité à mobiliser des ressources</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">2. MOTIVATION (Intérêt personnel)</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Bénéfice personnel de votre solution</li>
              <li>☐ Objectifs alignés avec le projet</li>
              <li>☐ Reconnaissance attendue en cas de succès</li>
              <li>☐ Risque limité en cas d'échec</li>
              <li>☐ Passion pour l'innovation/amélioration</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">3. ACCÈS (Proximité décisionnelle)</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Accès direct à l'Economic Buyer</li>
              <li>☐ Participation aux comités de décision</li>
              <li>☐ Information sur les processus internes</li>
              <li>☐ Connaissance des enjeux politiques</li>
              <li>☐ Influence sur les autres parties prenantes</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">4. CAPACITÉ (Temps et ressources)</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Temps disponible pour porter le projet</li>
              <li>☐ Autorité pour mobiliser des ressources</li>
              <li>☐ Compétences pour comprendre la solution</li>
              <li>☐ Capacité de communication interne</li>
              <li>☐ Soutien de sa hiérarchie</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section id="competition" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">C - COMPETITION : Analyser et Contrer la Concurrence</h2>

        <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
          <p>
            Vos commerciaux découvrent la concurrence au moment de la négociation finale. Trop tard pour influencer les
            critères ou développer une stratégie de différenciation efficace.
          </p>
        </div>

        <h3 className="text-2xl font-medium mb-4">Les 4 Types de Concurrence B2B</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">1. Concurrence Directe</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Solutions similaires</li>
              <li>Même positionnement</li>
              <li>Même cible client</li>
              <li>Fonctionnalités comparables</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">2. Concurrence Indirecte</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Solutions alternatives</li>
              <li>Approches différentes</li>
              <li>Même résultat final</li>
              <li>Technologies différentes</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">3. Concurrence Interne</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Développement en interne</li>
              <li>Ressources existantes</li>
              <li>Équipes internes</li>
              <li>Solutions maison</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-medium mb-3">4. Statu Quo</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Ne rien faire</li>
              <li>Reporter la décision</li>
              <li>Garder l'existant</li>
              <li>Attendre une meilleure solution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scoring Section */}
      <section id="scoring" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">Scoring MEDDPICC et Prédiction de Closing</h2>

        <h3 className="text-2xl font-medium mb-4">Grille de Scoring MEDDPICC</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Composante</th>
                <th className="border border-gray-300 p-3 text-left">Poids</th>
                <th className="border border-gray-300 p-3 text-left">Critères d'Évaluation</th>
                <th className="border border-gray-300 p-3 text-left">Score</th>
                <th className="border border-gray-300 p-3 text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Metrics</strong>
                </td>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Impact quantifié et validé</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Economic Buyer</strong>
                </td>
                <td className="border border-gray-300 p-3">20%</td>
                <td className="border border-gray-300 p-3">Identifié et rencontré</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/2.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Decision Criteria</strong>
                </td>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Critères connus et influencés</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Decision Process</strong>
                </td>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Processus mappé et maîtrisé</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Paper Process</strong>
                </td>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Processus anticipé et préparé</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Identify Pain</strong>
                </td>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Douleur profonde et urgente</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Champion</strong>
                </td>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Champion fort et équipé</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/1.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>Competition</strong>
                </td>
                <td className="border border-gray-300 p-3">5%</td>
                <td className="border border-gray-300 p-3">Concurrence analysée et contrée</td>
                <td className="border border-gray-300 p-3">___/10</td>
                <td className="border border-gray-300 p-3">___/0.5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium mb-4">Corrélation Score/Probabilité de Closing</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Score MEDDPICC</th>
                <th className="border border-gray-300 p-3 text-left">Probabilité Closing</th>
                <th className="border border-gray-300 p-3 text-left">Actions Recommandées</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 p-3">
                  <strong>9-10</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>85-95%</strong>
                </td>
                <td className="border border-gray-300 p-3">Accélérer vers signature</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>7-8</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>65-80%</strong>
                </td>
                <td className="border border-gray-300 p-3">Combler les gaps identifiés</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>5-6</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>35-50%</strong>
                </td>
                <td className="border border-gray-300 p-3">Requalification approfondie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">
                  <strong>3-4</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>15-25%</strong>
                </td>
                <td className="border border-gray-300 p-3">Projet mal qualifié</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 p-3">
                  <strong>&lt; 3</strong>
                </td>
                <td className="border border-gray-300 p-3">
                  <strong>&lt; 10%</strong>
                </td>
                <td className="border border-gray-300 p-3">Disqualifier ou nurturing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Plan */}
      <section id="implementation" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">Plan d'Implémentation MEDDPICC 90 Jours</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">MOIS 1 : Formation et Bases</h3>
            <h4 className="font-medium mb-2">Semaine 1-2 : Formation Théorique</h4>
            <ul className="space-y-1 text-sm mb-4">
              <li>☐ Formation équipe aux 8 composantes</li>
              <li>☐ Appropriation des templates</li>
              <li>☐ Définition des critères de scoring</li>
              <li>☐ Mise en place du reporting</li>
            </ul>
            <h4 className="font-medium mb-2">Semaine 3-4 : Application Terrain</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Application sur 3-5 deals en cours</li>
              <li>☐ Coaching individuel</li>
              <li>☐ Ajustement des outils</li>
              <li>☐ Premiers scorings</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">MOIS 2 : Perfectionnement</h3>
            <h4 className="font-medium mb-2">Semaine 5-6 : Techniques Avancées</h4>
            <ul className="space-y-1 text-sm mb-4">
              <li>☐ Maîtrise écoute active</li>
              <li>☐ Développement questioning</li>
              <li>☐ Formation stratégies champion</li>
              <li>☐ Perfectionnement analyse concurrentielle</li>
            </ul>
            <h4 className="font-medium mb-2">Semaine 7-8 : Optimisation Process</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Intégration MEDDPICC dans CRM</li>
              <li>☐ Automatisation du scoring</li>
              <li>☐ Mise en place des alertes</li>
              <li>☐ Optimisation des templates</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">MOIS 3 : Excellence et Mesure</h3>
            <h4 className="font-medium mb-2">Semaine 9-10 : Coaching Avancé</h4>
            <ul className="space-y-1 text-sm mb-4">
              <li>☐ Coaching sur deals complexes</li>
              <li>☐ Analyse deals gagnés/perdus</li>
              <li>☐ Perfectionnement battlecards</li>
              <li>☐ Développement expertise sectorielle</li>
            </ul>
            <h4 className="font-medium mb-2">Semaine 11-12 : Mesure et Amélioration</h4>
            <ul className="space-y-1 text-sm">
              <li>☐ Analyse corrélation score/closing</li>
              <li>☐ Optimisation critères scoring</li>
              <li>☐ Capitalisation best practices</li>
              <li>☐ Planification amélioration continue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="cas-client" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">Cas Client : Transformation MEDDPICC</h2>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 p-8 rounded-lg">
          <h3 className="text-2xl font-medium mb-4">DataSoft Solutions (20 commerciaux)</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-3">Situation initiale :</h4>
              <ul className="space-y-2">
                <li>
                  • Taux de closing : <strong>19%</strong>
                </li>
                <li>
                  • Cycle moyen : <strong>8 mois</strong>
                </li>
                <li>
                  • <strong>60%</strong> des propositions sans réponse
                </li>
                <li>• Prévisions imprécises (±40%)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Résultats 6 mois :</h4>
              <ul className="space-y-2">
                <li>
                  • Taux de closing : <strong className="text-green-600">34%</strong> (+79%)
                </li>
                <li>
                  • Cycle moyen : <strong className="text-green-600">5,5 mois</strong> (-31%)
                </li>
                <li>
                  • <strong className="text-green-600">85%</strong> des propositions suivies
                </li>
                <li>• Prévisions précises à ±5%</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-medium mb-3">Impact business :</h4>
            <ul className="space-y-2 mb-4">
              <li>
                • <strong>CA : +2,8M€</strong> (+67% vs année précédente)
              </li>
              <li>
                • <strong>Pipeline qualité</strong> : +156%
              </li>
              <li>
                • <strong>Satisfaction équipe</strong> : +89%
              </li>
            </ul>
            <p className="text-lg font-medium text-green-600">
              ROI : Investissement 35k€ → Gain annuel 2,8M€ = <strong>8 000% ROI</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="prochaine-etape" className="mb-12">
        <h2 className="text-3xl font-medium mb-6">Votre Prochaine Étape</h2>

        <p className="text-lg mb-8">
          Vous maîtrisez maintenant MEDDPICC, la méthodologie de qualification utilisée par les top performers mondiaux.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-300 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Option 1 : Vous déployez MEDDPICC seul</h3>
            <ul className="space-y-3 mb-6">
              <li>✓ Utilisez tous les templates et checklists fournis</li>
              <li>✓ Suivez le plan d'implémentation 90 jours</li>
              <li>✓ Formez votre équipe avec les outils fournis</li>
              <li>✓ Mesurez vos progrès avec le système de scoring</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Option 2 : Vous vous faites accompagner</h3>
            <ul className="space-y-3 mb-6">
              <li>✓ Formation MEDDPICC personnalisée pour votre équipe</li>
              <li>✓ Coaching individuel sur vos deals en cours</li>
              <li>✓ Intégration dans votre CRM existant</li>
              <li>✓ Garantie de résultats : +50% de taux de closing minimum</li>
            </ul>
            <a
              href="/audit"
              className="inline-block w-full bg-[#1a1a1a] text-white px-8 py-4 rounded-lg hover:bg-[#2a2a2a] transition-colors text-center font-medium"
            >
              📞 RÉSERVER MA FORMATION MEDDPICC GRATUITE
            </a>
            <p className="text-sm text-center mt-3 text-gray-600">
              Résultat moyen : +67% de taux de closing en 90 jours
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-3">Formation MEDDPICC Gratuite - 20 Minutes</h3>
          <p className="mb-4">Découvrez comment MEDDPICC peut transformer vos résultats commerciaux</p>
          <ul className="space-y-2 mb-4">
            <li>
              ✓ <strong>Évaluation</strong> de votre niveau de qualification actuel
            </li>
            <li>
              ✓ <strong>Démonstration</strong> de MEDDPICC sur un de vos deals
            </li>
            <li>
              ✓ <strong>Plan de formation</strong> personnalisé pour votre équipe
            </li>
            <li>
              ✓ <strong>ROI prévisionnel</strong> avec votre contexte spécifique
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Plus de 200 équipes commerciales maîtrisent déjà MEDDPICC grâce à notre accompagnement
          </p>
        </div>
      </section>

      {/* Deliverables Summary */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-medium mb-4">RÉCAPITULATIF DES LIVRABLES SECTION 3</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li>✅ Templates MEDDPICC complets (8 composantes détaillées)</li>
            <li>✅ Système de scoring avec corrélation closing</li>
            <li>✅ Checklist de validation 40 points de contrôle</li>
            <li>✅ Battlecards concurrentiels (templates personnalisables)</li>
          </ul>
          <ul className="space-y-2">
            <li>✅ Techniques d'écoute active (framework SOLER + SPIN)</li>
            <li>✅ Templates de business case pour champions</li>
            <li>✅ Plan d'implémentation 90 jours (semaine par semaine)</li>
            <li>✅ Cas client détaillé avec ROI chiffré</li>
          </ul>
        </div>
        <p className="mt-4 font-medium">
          Cette section transforme vos commerciaux en experts de la qualification, avec la méthodologie utilisée par les
          plus grandes entreprises mondiales.
        </p>
      </div>
    </GuidePageWrapper>
  )
}
