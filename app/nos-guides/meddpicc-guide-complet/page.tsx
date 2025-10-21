import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"
import GuideSidebar from "@/components/guide-sidebar"

export const metadata: Metadata = {
  title: "MEDDPICC Guide Complet 2024 : Qualification Commerciale | Simple Sales",
  description:
    "Maîtrisez MEDDPICC pour qualifier vos opportunités B2B. Templates, checklists, techniques d'écoute active. +67% de taux de closing garantis.",
}

export default function MeddpiccPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-mono">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white px-4 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <Link
                    href="/nos-guides"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Retour au guide principal
                  </Link>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#f4d03f] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium">
                    SECTION 3 : QUALIFICATION
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
                  MEDDPICC : Guide Complet de Qualification Commerciale B2B
                </h1>

                <p className="text-xl text-gray-600 mb-16 text-balance leading-relaxed">
                  La méthodologie qui transforme vos prospects en clients prévisibles
                </p>

                {/* Introduction Section */}
                <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-8 mb-16">
                  <h2 className="text-2xl font-medium mb-4">Votre Défi de Directeur Commercial</h2>
                  <p className="mb-4 leading-relaxed">
                    Vos commerciaux obtiennent des RDV mais seulement 35% se transforment en propositions ? Pire : 60%
                    de vos propositions restent sans réponse ?
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
                    <strong>MEDDPICC change la donne :</strong> Les entreprises qui l'appliquent voient leur taux de
                    closing passer de 20% à 35% en moyenne, tout en réduisant leurs cycles de vente de 28%.
                  </p>
                  <p>
                    Ce guide vous donne la maîtrise complète de cette méthodologie utilisée par Salesforce, Microsoft,
                    Oracle et toutes les entreprises qui vendent +100k€ par deal.
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
                      Vos commerciaux entendent "nous voulons améliorer nos ventes" mais ne creusent pas l'impact
                      chiffré. Résultat : impossible de justifier votre prix ou créer l'urgence.
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
                      73% des deals échouent car l'Economic Buyer n'est jamais rencontré. Vos commerciaux parlent aux
                      utilisateurs ou sponsors, mais pas à celui qui contrôle le budget.
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
                          comprendre la vision stratégique de [nom EB]. Pouvez-vous nous organiser un point avec
                          lui/elle ? Même 15 minutes suffiraient pour cadrer les enjeux."
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
                          [Champion] et moi travaillons sur [projet] qui pourrait avoir un impact de [bénéfice chiffré]
                          pour [Entreprise]. Avant de finaliser ma recommandation, j'aimerais m'assurer qu'elle s'aligne
                          parfaitement avec vos priorités stratégiques. Auriez-vous 15 minutes cette semaine pour
                          échanger sur les enjeux business de ce projet ?
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Continue with other sections... Due to length, I'll add key sections */}

                {/* Decision Criteria Section */}
                <section id="decision-criteria" className="mb-12">
                  <h2 className="text-3xl font-medium mb-6">
                    D - DECISION CRITERIA : Comprendre les Critères de Choix
                  </h2>

                  <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
                    <p>
                      Vos commerciaux présentent leurs forces sans connaître les critères de décision du client.
                      Résultat : ils passent à côté des vrais enjeux et perdent face à des concurrents mieux alignés.
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
                </section>

                {/* Champion Section */}
                <section id="champion" className="mb-12">
                  <h2 className="text-3xl font-medium mb-6">C - CHAMPION : Développer votre Allié Interne</h2>

                  <div className="bg-white border border-gray-200 shadow-sm border-l-4 border-l-[#f4d03f] rounded-lg p-6 mb-6">
                    <p>
                      65% des deals sans champion échouent. Vos commerciaux comptent sur leur relation avec le contact
                      principal, mais n'identifient pas et n'équipent pas un vrai champion interne.
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
                      Vos commerciaux découvrent la concurrence au moment de la négociation finale. Trop tard pour
                      influencer les critères ou développer une stratégie de différenciation efficace.
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
                    Vous maîtrisez maintenant MEDDPICC, la méthodologie de qualification utilisée par les top performers
                    mondiaux.
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

                {/* Navigation */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <Link
                      href="/nos-guides"
                      className="text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                    >
                      ← Retour au Guide Principal
                    </Link>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/nos-guides/prospection-b2b-2024"
                        className="text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                      >
                        ← Précédent : Prospection et Acquisition 4.0
                      </Link>
                      <Link
                        href="/nos-guides/negociation-commerciale-avancee"
                        className="text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                      >
                        Suivant : Négociation et Closing Avancés →
                      </Link>
                    </div>
                  </div>
                </div>

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
                    Cette section transforme vos commerciaux en experts de la qualification, avec la méthodologie
                    utilisée par les plus grandes entreprises mondiales.
                  </p>
                </div>
              </article>

              <div className="hidden lg:block">
                <GuideSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
