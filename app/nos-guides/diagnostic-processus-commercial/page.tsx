import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Target, Calculator, FileText, BarChart3 } from "lucide-react"
import Footer from "@/components/footer"
import GuideSidebar from "@/components/guide-sidebar"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

export const metadata: Metadata = {
  title: `Audit Processus Commercial : Diagnostic Complet ${getCurrentYear()} | Simple Sales`,
  description:
    "Guide complet pour auditer votre processus commercial. Checklist 47 points, calculateur ROI, templates gratuits. Identifiez vos fuites de revenus.",
}

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-sans">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white px-4 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-sans text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
          </div>
        </div>
      </div>

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              {/* Removing prose prose-lg */}
              <article className="max-w-none">
                <div className="mb-8">
                  <Link
                    href="/nos-guides"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Retour au guide principal
                  </Link>
                </div>

                <div className="mb-6 text-sm text-gray-600">
                  <p>Dernière mise à jour : {getLastUpdateDate()}</p>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#f4d03f] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium">
                    SECTION 1 : DIAGNOSTIC
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-4 text-balance leading-tight">
                  Audit Processus Commercial : Diagnostic Complet de votre Organisation
                </h1>

                <p className="text-xl text-gray-600 mb-16 text-pretty leading-relaxed">
                  Le guide pratique pour identifier précisément où votre équipe perd de l'argent et comment y remédier
                </p>

                {/* Introduction */}
                <section className="mb-16">
                  <h2 className="text-3xl font-medium mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-[#d4a574]" />
                    Votre Défi de Directeur Commercial
                  </h2>

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-6 border-l-4 border-l-[#f4d03f]">
                    <p className="mb-4 leading-relaxed">
                      Vous le savez au fond de vous : quelque chose cloche dans vos ventes. Vos commerciaux travaillent
                      dur, vos produits sont bons, pourtant les résultats stagnent. Pire, vous avez cette sensation
                      désagréable de laisser de l'argent sur la table.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                      <p className="font-medium text-red-900 leading-relaxed">
                        La réalité brutale : 78% des entreprises B2B ne savent pas précisément où elles perdent de
                        l'argent dans leur processus commercial. Elles voient les symptômes mais pas les causes racines.
                      </p>
                    </div>

                    <p className="font-medium leading-relaxed">
                      Ce guide vous donne la méthode exacte pour diagnostiquer votre organisation commerciale comme un
                      expert et identifier vos 3 leviers d'amélioration prioritaires.
                    </p>
                  </div>
                </section>

                {/* Niveau 1: Audit Quantitatif */}
                <section id="audit-quantitatif" className="mb-16">
                  <h2 className="text-3xl font-medium mb-6 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-[#d4a574]" />
                    Les 3 Niveaux d'Audit Commercial
                  </h2>

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8 border-l-4 border-l-blue-500">
                    <h3 className="text-2xl font-medium mb-4">
                      Niveau 1 : Audit Quantitatif - Les Mathématiques de vos Ventes
                    </h3>
                    <p className="mb-6 leading-relaxed">
                      <strong>Objectif :</strong> Mesurer vos ratios de conversion réels vs benchmarks sectoriels
                    </p>

                    <h4 className="text-xl font-medium mb-4 flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-[#d4a574]" />
                      Calculateur de Ratios de Conversion
                    </h4>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left">Étape du Processus</th>
                            <th className="border border-gray-300 p-3 text-left">Votre Volume</th>
                            <th className="border border-gray-300 p-3 text-left">Volume Étape Suivante</th>
                            <th className="border border-gray-300 p-3 text-left">Taux Conversion</th>
                            <th className="border border-gray-300 p-3 text-left">Benchmark Secteur</th>
                            <th className="border border-gray-300 p-3 text-left">Écart</th>
                            <th className="border border-gray-300 p-3 text-left">Fuite Revenus</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium">Leads Générés</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3"></td>
                            <td className="border border-gray-300 p-3"></td>
                            <td className="border border-gray-300 p-3"></td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-medium">Contacts Établis</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">15-25%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">____€</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium">RDV Obtenus</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">8-15%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">____€</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-medium">Opportunités Qualifiées</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">40-60%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">____€</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium">Propositions Envoyées</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">60-80%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">____€</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-medium">Négociations Engagées</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3">→</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">70-90%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">____€</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium">Signatures Obtenues</td>
                            <td className="border border-gray-300 p-3">_____</td>
                            <td className="border border-gray-300 p-3"></td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3">20-35%</td>
                            <td className="border border-gray-300 p-3">____%</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                      <h5 className="font-medium text-blue-900 mb-3">Comment utiliser ce tableau :</h5>
                      <ol className="list-decimal list-inside space-y-2 text-blue-900 leading-relaxed">
                        <li>Remplissez vos volumes réels des 6 derniers mois</li>
                        <li>Calculez vos taux de conversion (Volume étape suivante ÷ Volume étape × 100)</li>
                        <li>Comparez avec les benchmarks sectoriels</li>
                        <li>Identifiez les plus gros écarts = vos fuites prioritaires</li>
                      </ol>
                    </div>

                    <h4 className="text-xl font-medium mb-4">Analyse des Résultats</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 leading-relaxed">
                        <div className="w-24 flex-shrink-0 font-medium">&lt; 5%</div>
                        <div>Performance correcte, optimisation fine possible</div>
                      </div>
                      <div className="flex items-start gap-3 leading-relaxed">
                        <div className="w-24 flex-shrink-0 font-medium">5-15%</div>
                        <div>Marge d'amélioration significative, action recommandée</div>
                      </div>
                      <div className="flex items-start gap-3 leading-relaxed">
                        <div className="w-24 flex-shrink-0 font-medium">&gt; 15%</div>
                        <div>Fuite majeure, intervention urgente requise</div>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-6 mb-6">
                      <h5 className="font-medium mb-3">Exemple concret :</h5>
                      <div className="font-mono text-sm space-y-2 leading-relaxed">
                        <p>Entreprise SaaS B2B (50 commerciaux)</p>
                        <p>- RDV → Opportunité : 25% (vs 50% benchmark) = -50% d'efficacité</p>
                        <p>- Impact : 200 RDV/mois × 25% de perte = 50 opportunités perdues</p>
                        <p>- Coût : 50 × 15k€ panier moyen × 30% closing = 225k€/mois de manque à gagner</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-medium mb-4">Template d'Action par Fuite Identifiée</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left">Fuite Détectée</th>
                            <th className="border border-gray-300 p-3 text-left">Cause Probable</th>
                            <th className="border border-gray-300 p-3 text-left">Action Corrective</th>
                            <th className="border border-gray-300 p-3 text-left">Délai</th>
                            <th className="border border-gray-300 p-3 text-left">Impact Attendu</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3">Leads → Contacts faible</td>
                            <td className="border border-gray-300 p-3">Mauvaise qualification marketing</td>
                            <td className="border border-gray-300 p-3">Revoir critères ICP + scoring</td>
                            <td className="border border-gray-300 p-3">2 semaines</td>
                            <td className="border border-gray-300 p-3">+20% contacts</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Contacts → RDV faible</td>
                            <td className="border border-gray-300 p-3">Scripts prospection inefficaces</td>
                            <td className="border border-gray-300 p-3">Former équipe + nouveaux scripts</td>
                            <td className="border border-gray-300 p-3">1 mois</td>
                            <td className="border border-gray-300 p-3">+35% RDV</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">RDV → Opportunité faible</td>
                            <td className="border border-gray-300 p-3">Qualification insuffisante</td>
                            <td className="border border-gray-300 p-3">Formation MEDDPICC</td>
                            <td className="border border-gray-300 p-3">2 mois</td>
                            <td className="border border-gray-300 p-3">+45% qualification</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Opportunité → Proposition faible</td>
                            <td className="border border-gray-300 p-3">Découverte incomplète</td>
                            <td className="border border-gray-300 p-3">Process découverte structuré</td>
                            <td className="border border-gray-300 p-3">1 mois</td>
                            <td className="border border-gray-300 p-3">+25% propositions</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Proposition → Négociation faible</td>
                            <td className="border border-gray-300 p-3">Propositions génériques</td>
                            <td className="border border-gray-300 p-3">Personnalisation + valeur</td>
                            <td className="border border-gray-300 p-3">3 semaines</td>
                            <td className="border border-gray-300 p-3">+30% négociations</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Négociation → Signature faible</td>
                            <td className="border border-gray-300 p-3">Gestion objections défaillante</td>
                            <td className="border border-gray-300 p-3">Formation A-CRAC</td>
                            <td className="border border-gray-300 p-3">6 semaines</td>
                            <td className="border border-gray-300 p-3">+40% closing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Niveau 2: Audit Qualitatif */}
                <section id="audit-qualitatif" className="mb-16">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8 border-l-4 border-l-green-500">
                    <h3 className="text-2xl font-medium mb-4">
                      Niveau 2 : Audit Qualitatif - Les Points de Friction Opérationnels
                    </h3>
                    <p className="mb-6 leading-relaxed">
                      <strong>Objectif :</strong> Identifier les blocages humains et organisationnels
                    </p>

                    <h4 className="text-xl font-medium mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                      Checklist d'Audit Processus Commercial (47 Points)
                    </h4>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">PROSPECTION ET GÉNÉRATION DE LEADS</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>1.</strong> Profil client idéal (ICP) clairement défini et partagé
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>2.</strong> Sources de leads diversifiées et mesurées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>3.</strong> Qualification des leads avant transmission aux commerciaux
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>4.</strong> Délai de traitement des leads &lt; 24h
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>5.</strong> Scripts de prospection testés et optimisés
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>6.</strong> Outils de prospection maîtrisés par l'équipe
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>7.</strong> Suivi systématique des actions de prospection
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">QUALIFICATION ET DÉCOUVERTE</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>8.</strong> Méthodologie de qualification structurée (MEDDPICC/BANT)
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>9.</strong> Questions de découverte standardisées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>10.</strong> Identification systématique du décideur économique
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>11.</strong> Quantification des enjeux business du prospect
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>12.</strong> Mapping des parties prenantes réalisé
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>13.</strong> Processus de décision client documenté
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>14.</strong> Concurrence identifiée et analysée
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">PROPOSITION ET NÉGOCIATION</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>15.</strong> Templates de propositions personnalisables
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>16.</strong> Délai proposition &lt; 48h après découverte
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>17.</strong> Propositions adaptées au profil du décideur
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>18.</strong> Calcul ROI intégré dans chaque proposition
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>19.</strong> Processus de relance des propositions défini
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>20.</strong> Techniques de gestion d'objections maîtrisées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>21.</strong> Grille de concessions/contreparties établie
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">CLOSING ET SIGNATURE</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>22.</strong> Signaux d'achat identifiés et exploités
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>23.</strong> Techniques de closing adaptées au contexte
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>24.</strong> Processus administratif (contrats) fluidifié
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>25.</strong> Suivi post-signature organisé
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>26.</strong> Feedback client systématiquement collecté
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>27.</strong> Analyse des deals perdus réalisée
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">MANAGEMENT ET PILOTAGE</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>28.</strong> Objectifs individuels clairs et réalistes
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>29.</strong> Reporting hebdomadaire structuré
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>30.</strong> Coaching individuel régulier (min 1h/mois)
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>31.</strong> Réunions équipe productives et cadrées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>32.</strong> KPIs de performance suivis et analysés
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>33.</strong> Plan de formation continue défini
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>34.</strong> Reconnaissance des succès organisée
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">OUTILS ET TECHNOLOGIES</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>35.</strong> CRM utilisé par 100% de l'équipe
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>36.</strong> Données CRM à jour et fiables
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>37.</strong> Automatisations basiques configurées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>38.</strong> Intégrations outils fonctionnelles
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>39.</strong> Formation aux outils régulière
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>40.</strong> Support technique accessible
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-lg mb-3 text-[#d4a574]">CULTURE ET ORGANISATION</h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>41.</strong> Valeurs commerciales partagées
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>42.</strong> Process de recrutement commercial structuré
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>43.</strong> Onboarding nouveaux commerciaux défini
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>44.</strong> Gestion des conflits organisée
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>45.</strong> Communication interne fluide
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>46.</strong> Amélioration continue encouragée
                            </label>
                          </div>
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <label>
                              <strong>47.</strong> Célébration des succès régulière
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-xl font-medium mb-4">Grille de Scoring</h4>
                      <p className="mb-4 leading-relaxed">
                        <strong>Votre Score : ___/47</strong>
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 p-3 text-left">Score</th>
                              <th className="border border-gray-300 p-3 text-left">Niveau de Maturité</th>
                              <th className="border border-gray-300 p-3 text-left">Actions Prioritaires</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">40-47</td>
                              <td className="border border-gray-300 p-3 font-medium text-green-700">Expert</td>
                              <td className="border border-gray-300 p-3">Optimisation fine, innovation</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-medium">30-39</td>
                              <td className="border border-gray-300 p-3 font-medium text-blue-700">Avancé</td>
                              <td className="border border-gray-300 p-3">Perfectionnement ciblé</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">20-29</td>
                              <td className="border border-gray-300 p-3 font-medium text-yellow-700">Intermédiaire</td>
                              <td className="border border-gray-300 p-3">Structuration approfondie</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-medium">10-19</td>
                              <td className="border border-gray-300 p-3 font-medium text-orange-700">Débutant</td>
                              <td className="border border-gray-300 p-3">Refonte complète nécessaire</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">&lt; 10</td>
                              <td className="border border-gray-300 p-3 font-medium text-red-700">Critique</td>
                              <td className="border border-gray-300 p-3">Intervention urgente requise</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Niveau 3: Audit Stratégique */}
                <section id="audit-strategique" className="mb-16">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8 border-l-4 border-l-purple-500">
                    <h3 className="text-2xl font-medium mb-4">
                      Niveau 3 : Audit Stratégique - Évaluation de Maturité Commerciale
                    </h3>
                    <p className="mb-6 leading-relaxed">
                      <strong>Objectif :</strong> Situer votre organisation vs les top performers
                    </p>

                    <h4 className="text-xl font-medium mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-[#d4a574]" />
                      Matrice de Maturité Commerciale (30 Critères)
                    </h4>

                    <p className="mb-6 leading-relaxed">
                      <strong>Évaluez chaque critère de 1 (Débutant) à 5 (Expert) :</strong>
                    </p>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left">DIMENSION</th>
                            <th className="border border-gray-300 p-3 text-left">CRITÈRE</th>
                            <th className="border border-gray-300 p-3 text-left">SCORE 1-5</th>
                            <th className="border border-gray-300 p-3 text-left">COMMENTAIRE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium" rowSpan={4}>
                              STRATÉGIE
                            </td>
                            <td className="border border-gray-300 p-3">Vision commerciale claire et partagée</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Segmentation marché précise</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Positionnement concurrentiel défini</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Objectifs SMART et réalistes</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-medium" rowSpan={4}>
                              PROCESSUS
                            </td>
                            <td className="border border-gray-300 p-3">Processus commercial documenté</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Étapes clairement définies</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Critères de passage entre étapes</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Amélioration continue organisée</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium" rowSpan={4}>
                              COMPÉTENCES
                            </td>
                            <td className="border border-gray-300 p-3">Niveau technique équipe</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Compétences comportementales</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Formation continue structurée</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Coaching régulier et efficace</td>
                            <td className="border border-gray-300 p-3">___/5</td>
                            <td className="border border-gray-300 p-3"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm text-gray-600 mb-6">
                      (Table continue avec OUTILS, MANAGEMENT, CULTURE, RÉSULTATS, ÉVOLUTION - 30 critères au total)
                    </p>

                    <div className="mt-8">
                      <h4 className="text-xl font-medium mb-4">Benchmark de Maturité</h4>
                      <p className="mb-4 leading-relaxed">
                        <strong>SCORE TOTAL : ___/150</strong>
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 p-3 text-left">Score Total</th>
                              <th className="border border-gray-300 p-3 text-left">Niveau</th>
                              <th className="border border-gray-300 p-3 text-left">Profil Organisation</th>
                              <th className="border border-gray-300 p-3 text-left">Actions Recommandées</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">120-150</td>
                              <td className="border border-gray-300 p-3 font-medium text-green-700">Champion</td>
                              <td className="border border-gray-300 p-3">Top 5% du marché</td>
                              <td className="border border-gray-300 p-3">Innovation, leadership sectoriel</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-medium">90-119</td>
                              <td className="border border-gray-300 p-3 font-medium text-blue-700">Performeur</td>
                              <td className="border border-gray-300 p-3">Top 20% du marché</td>
                              <td className="border border-gray-300 p-3">Optimisation, spécialisation</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">60-89</td>
                              <td className="border border-gray-300 p-3 font-medium text-yellow-700">Compétent</td>
                              <td className="border border-gray-300 p-3">Moyenne du marché</td>
                              <td className="border border-gray-300 p-3">Structuration, formation</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-medium">30-59</td>
                              <td className="border border-gray-300 p-3 font-medium text-orange-700">Émergent</td>
                              <td className="border border-gray-300 p-3">Sous la moyenne</td>
                              <td className="border border-gray-300 p-3">Refonte, accompagnement</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-medium">&lt; 30</td>
                              <td className="border border-gray-300 p-3 font-medium text-red-700">Critique</td>
                              <td className="border border-gray-300 p-3">Intervention urgente</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Plan d'Action */}
                <section id="plan-action" className="mb-16">
                  {/* Updated section with white background and orange left border */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8 border-l-4 border-l-orange-500">
                    <h2 className="text-3xl font-medium mb-6 flex items-center gap-3">
                      <FileText className="w-8 h-8 text-[#d4a574]" />
                      Plan d'Action Personnalisé
                    </h2>

                    <h3 className="text-2xl font-medium mb-4">Template de Plan 90 Jours</h3>

                    <div className="space-y-6">
                      <div className="border-l-4 border-[#d4a574] pl-6">
                        <h4 className="text-xl font-medium mb-3">MOIS 1 : DIAGNOSTIC ET QUICK WINS</h4>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 1-2 : État des lieux complet</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Compléter l'audit quantitatif (ratios de conversion)</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Réaliser la checklist 47 points</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Évaluer la maturité commerciale (30 critères)</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Identifier les 3 fuites principales</label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 3-4 : Actions correctives immédiates</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Corriger la fuite #1 identifiée</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Former l'équipe sur le point critique</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Mettre en place 2-3 quick wins</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Communiquer les premiers résultats</label>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded p-4">
                          <p className="font-medium text-green-900">
                            Résultats attendus Mois 1 : +10-15% d'amélioration sur le point critique
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#d4a574] pl-6">
                        <h4 className="text-xl font-medium mb-3">MOIS 2 : STRUCTURATION APPROFONDIE</h4>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 5-6 : Process et outils</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Formaliser le processus commercial optimisé</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Déployer les outils manquants</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Former l'équipe aux nouvelles méthodes</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Mettre en place le reporting structuré</label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 7-8 : Coaching et accompagnement</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Coaching individuel sur les nouvelles pratiques</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Analyse des premiers deals avec nouveau process</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Ajustements basés sur les retours terrain</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Renforcement des points faibles identifiés</label>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded p-4">
                          <p className="font-medium text-green-900">
                            Résultats attendus Mois 2 : +20-25% d'amélioration globale
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#d4a574] pl-6">
                        <h4 className="text-xl font-medium mb-3">MOIS 3 : OPTIMISATION ET PÉRENNISATION</h4>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 9-10 : Mesure et ajustement</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Mesurer l'impact des changements</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Identifier les nouveaux points d'amélioration</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Optimiser les processus déployés</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Préparer la phase d'amélioration continue</label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Semaine 11-12 : Ancrage et évolution</h5>
                          <div className="space-y-2 text-sm leading-relaxed">
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Ancrer les nouvelles habitudes</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Planifier les prochaines évolutions</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Célébrer les succès obtenus</label>
                            </div>
                            <div className="flex items-start gap-2">
                              <input type="checkbox" className="mt-1" />
                              <label>Définir les objectifs suivants</label>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded p-4">
                          <p className="font-medium text-green-900">
                            Résultats attendus Mois 3 : +30-40% d'amélioration durable
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cas Client */}
                <section id="cas-client" className="mb-16">
                  {/* Updated section with gradient background and yellow border */}
                  <div className="bg-gradient-to-br from-[#f4d03f]/10 to-[#f4d03f]/5 rounded-lg border border-[#f4d03f]/20 p-8">
                    <h2 className="text-3xl font-medium mb-6">Cas Client : Transformation Complète</h2>

                    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Entreprise : TechSolutions SaaS (25 commerciaux)</h3>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-medium mb-3 text-red-700">Situation initiale :</h4>
                          <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• CA stagnant à 8M€ depuis 2 ans</li>
                            <li>• Taux de closing : 19%</li>
                            <li>• Cycle moyen : 8 mois</li>
                            <li>• Turnover commercial : 35%</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3 text-green-700">Résultats 6 mois :</h4>
                          <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Taux de closing : 34% (+79%)</li>
                            <li>• Cycle moyen : 5,5 mois (-31%)</li>
                            <li>• CA : 12,5M€ (+56%)</li>
                            <li>• Turnover : 12% (-66%)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-6 mb-6">
                        <h4 className="font-medium mb-3">Audit réalisé :</h4>
                        <ul className="space-y-2 text-sm leading-relaxed">
                          <li>• Score maturité : 45/150 (Émergent)</li>
                          <li>• Fuite principale : RDV → Opportunité (25% vs 50% benchmark)</li>
                          <li>• Cause : Qualification insuffisante, pas de méthodologie</li>
                        </ul>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-6 mb-6">
                        <h4 className="font-medium mb-3">Plan d'action déployé :</h4>
                        <ul className="space-y-2 text-sm leading-relaxed">
                          <li>
                            • <strong>Mois 1 :</strong> Formation MEDDPICC intensive (2 jours + coaching)
                          </li>
                          <li>
                            • <strong>Mois 2 :</strong> Nouveau process de qualification + templates
                          </li>
                          <li>
                            • <strong>Mois 3 :</strong> Coaching individuel + ajustements
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6">
                        <p className="text-lg font-medium text-green-900">
                          ROI : Investissement 45k€ → Gain annuel 4,5M€ = <span className="text-2xl">10 000% ROI</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTAs */}
                <section id="prochaine-etape" className="mb-16">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
                    <h2 className="text-3xl font-medium mb-6">Votre Prochaine Étape</h2>

                    <p className="mb-8 leading-relaxed">
                      Vous avez maintenant tous les outils pour auditer votre processus commercial comme un expert et
                      identifier vos leviers d'amélioration prioritaires.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-medium mb-4">Option 1 : Vous lancez l'audit seul</h3>
                        <ul className="space-y-3 mb-6 text-sm leading-relaxed">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Utilisez tous les templates et checklists fournis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Suivez le plan d'action 90 jours étape par étape</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Mesurez vos progrès avec les KPIs recommandés</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border-2 border-[#d4a574] rounded-lg p-6 bg-[#d4a574]/5 shadow-sm">
                        <h3 className="text-xl font-medium mb-4">Option 2 : Vous vous faites accompagner</h3>
                        <ul className="space-y-3 mb-6 text-sm leading-relaxed">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                            <span>Audit express gratuit de 20 minutes pour identifier vos priorités</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                            <span>Diagnostic personnalisé avec plan d'action sur-mesure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                            <span>Accompagnement dans l'implémentation pour garantir les résultats</span>
                          </li>
                        </ul>
                        <a
                          href="/audit"
                          className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-lg hover:bg-[#1a1a1a]/90 transition-colors w-full justify-center"
                        >
                          Réserver mon audit gratuit
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <p className="text-sm text-center mt-3 text-gray-600">
                          Résultat moyen : +34% de performances en 90 jours
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <Link
                    href="/nos-guides"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Retour au guide principal
                  </Link>
                  <Link
                    href="/nos-guides/prospection-b2b-2024"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    Suivant : Prospection et Acquisition 4.0
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-8 text-center text-sm text-gray-600">
                  <p className="italic leading-relaxed">
                    Cette section vous a donné les outils pour diagnostiquer précisément votre organisation commerciale.
                    La section suivante vous révèle comment générer un pipeline prévisible avec les techniques de
                    prospection moderne.
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
