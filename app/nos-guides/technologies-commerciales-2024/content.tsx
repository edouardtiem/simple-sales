"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import GuideSidebar from "@/components/guide-sidebar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Target, Zap, Award, Calendar, Cpu, BarChart3 } from "lucide-react"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

function TechnologiesClientPage() {
  const currentYear = getCurrentYear()
  const lastUpdate = getLastUpdateDate()

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-sans">
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
              <article className="max-w-none">
                <div className="mb-8">
                  <Link
                    href="/nos-guides"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Retour au guide principal
                  </Link>
                </div>

                <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Dernière mise à jour : {lastUpdate}</span>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#f4d03f] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium">
                    SECTION 5 : TECHNOLOGIES & PERFORMANCE
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
                  Technologies Commerciales {currentYear} : Comment Multiplier la Performance de Votre Équipe
                </h1>

                <p className="text-xl text-gray-600 mb-16 text-pretty leading-relaxed">
                  Le guide complet pour choisir et déployer les bons outils qui transforment vraiment vos résultats
                </p>

                {/* Introduction */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-16 border-l-4 border-l-[#f4d03f]">
                  <h2 className="text-2xl font-medium mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Votre Défi de Directeur Commercial
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Vous avez investi dans un CRM, des outils de prospection, peut-être même de l'IA... mais{" "}
                    <strong>vos commerciaux n'utilisent que 30% des fonctionnalités</strong> et les résultats ne sont
                    pas au rendez-vous ?
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Vous n'êtes pas seuls. La technologie commerciale a explosé :
                  </p>
                  <ul className="space-y-2 mb-4 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        <strong>11 000+ outils</strong> de sales tech disponibles en {currentYear}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        Les entreprises utilisent en moyenne <strong>10 outils différents</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        <strong>68% des commerciaux</strong> se disent submergés par leurs outils
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        <strong>43% du budget tech</strong> est gaspillé en licences non utilisées
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Pourtant, certaines équipes multiplient leur performance par 3 grâce à la tech.</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Ce guide vous révèle leur stack exact</strong> et comment le déployer pour des résultats
                    mesurables.
                  </p>
                </div>

                {/* Tech Landscape */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6">Le Paysage Tech Commercial en {currentYear}</h2>

                  <h3 className="text-xl font-medium mb-4">Les Chiffres qui Interpellent</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-2 text-left text-sm">Métrique</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-sm">2020</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-sm">2024</th>
                          <th className="border border-gray-200 px-4 py-2 text-center text-sm">Évolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-sm">
                            Nombre d'outils sales tech
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">7 000</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">11 000+</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-medium text-sm">
                            +57%
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium text-sm">
                            Budget tech moyen/commercial
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">3 200€</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">5 800€</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-medium text-sm">
                            +81%
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-sm">
                            Taux d'adoption moyen
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">45%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">32%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-medium text-sm">
                            -29%
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium text-sm">ROI tech déclaré</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">180%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-sm">240%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-medium text-sm">
                            +33%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <p className="font-medium mb-2">Le Paradoxe de la Sales Tech :</p>
                    <p className="text-gray-700 leading-relaxed">
                      Plus d'outils disponibles, budgets en hausse, ROI potentiel énorme... mais adoption en chute
                      libre.
                      <strong> Le problème n'est pas la technologie, c'est la stratégie de déploiement.</strong>
                    </p>
                  </div>
                </div>

                {/* Essential Stack */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <Cpu className="w-6 h-6" />
                    Le Stack Technologique Essentiel
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Voici les 5 catégories d'outils indispensables pour une équipe commerciale performante en{" "}
                    {currentYear} :
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">1. CRM : Le Cœur du Système</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        <strong>Fonction :</strong> Centraliser toutes les données clients et gérer le pipeline
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium mb-2">Top 3 Solutions {currentYear} :</p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">HubSpot CRM</p>
                            <p className="text-sm text-gray-600">✓ Gratuit jusqu'à 1M contacts</p>
                            <p className="text-sm text-gray-600">✓ Interface intuitive</p>
                            <p className="text-sm text-gray-600">✓ Intégrations natives</p>
                            <p className="text-sm text-gray-600">Prix : 0-90€/mois/user</p>
                          </div>
                          <div>
                            <p className="font-medium">Salesforce</p>
                            <p className="text-sm text-gray-600">✓ Personnalisation maximale</p>
                            <p className="text-sm text-gray-600">✓ Écosystème riche</p>
                            <p className="text-sm text-gray-600">✓ Enterprise-grade</p>
                            <p className="text-sm text-gray-600">Prix : 25-300€/mois/user</p>
                          </div>
                          <div>
                            <p className="font-medium">Pipedrive</p>
                            <p className="text-sm text-gray-600">✓ Focus pipeline management</p>
                            <p className="text-sm text-gray-600">✓ Simplicité d'usage</p>
                            <p className="text-sm text-gray-600">✓ Excellent rapport qualité/prix</p>
                            <p className="text-sm text-gray-600">Prix : 14-99€/mois/user</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-medium mb-2">Critères de Choix :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>□ Facilité d'adoption par l'équipe</li>
                          <li>□ Intégrations avec vos outils existants</li>
                          <li>□ Capacité de personnalisation</li>
                          <li>□ Qualité du support client</li>
                          <li>□ Scalabilité (croissance future)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">2. Prospection : Alimenter le Pipeline</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        <strong>Fonction :</strong> Identifier et contacter les prospects qualifiés
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium mb-2">Top 3 Solutions {currentYear} :</p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">Apollo.io</p>
                            <p className="text-sm text-gray-600">✓ 275M+ contacts B2B</p>
                            <p className="text-sm text-gray-600">✓ Séquences automatisées</p>
                            <p className="text-sm text-gray-600">✓ Intent data intégré</p>
                            <p className="text-sm text-gray-600">Prix : 49-149€/mois/user</p>
                          </div>
                          <div>
                            <p className="font-medium">LinkedIn Sales Navigator</p>
                            <p className="text-sm text-gray-600">✓ Accès réseau LinkedIn</p>
                            <p className="text-sm text-gray-600">✓ Recherches avancées</p>
                            <p className="text-sm text-gray-600">✓ InMail illimités</p>
                            <p className="text-sm text-gray-600">Prix : 79-135€/mois/user</p>
                          </div>
                          <div>
                            <p className="font-medium">Lemlist</p>
                            <p className="text-sm text-gray-600">✓ Cold email personnalisé</p>
                            <p className="text-sm text-gray-600">✓ Automatisation intelligente</p>
                            <p className="text-sm text-gray-600">✓ Warm-up intégré</p>
                            <p className="text-sm text-gray-600">Prix : 59-99€/mois/user</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">
                        3. Intelligence Conversationnelle : Améliorer les Calls
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        <strong>Fonction :</strong> Enregistrer, transcrire et analyser les appels commerciaux
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium mb-2">Top 3 Solutions {currentYear} :</p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">Gong</p>
                            <p className="text-sm text-gray-600">✓ Leader du marché</p>
                            <p className="text-sm text-gray-600">✓ IA analyse avancée</p>
                            <p className="text-sm text-gray-600">✓ Deal intelligence</p>
                            <p className="text-sm text-gray-600">Prix : Sur devis (premium)</p>
                          </div>
                          <div>
                            <p className="font-medium">Chorus.ai (ZoomInfo)</p>
                            <p className="text-sm text-gray-600">✓ Intégration Zoom native</p>
                            <p className="text-sm text-gray-600">✓ Coaching automatisé</p>
                            <p className="text-sm text-gray-600">✓ Analytics détaillés</p>
                            <p className="text-sm text-gray-600">Prix : Sur devis</p>
                          </div>
                          <div>
                            <p className="font-medium">Modjo</p>
                            <p className="text-sm text-gray-600">✓ Solution française</p>
                            <p className="text-sm text-gray-600">✓ Excellent rapport qualité/prix</p>
                            <p className="text-sm text-gray-600">✓ RGPD compliant</p>
                            <p className="text-sm text-gray-600">Prix : 40-80€/mois/user</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-medium mb-2">Impact Mesuré :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>• +28% de taux de closing (analyse des calls gagnants)</li>
                          <li>• -40% temps de formation (bibliothèque de best calls)</li>
                          <li>• +35% respect des méthodologies (coaching automatisé)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">4. Enablement : Former et Équiper</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        <strong>Fonction :</strong> Centraliser contenus, formations et playbooks
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium mb-2">Top 3 Solutions {currentYear} :</p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">Highspot</p>
                            <p className="text-sm text-gray-600">✓ Content management avancé</p>
                            <p className="text-sm text-gray-600">✓ Analytics d'utilisation</p>
                            <p className="text-sm text-gray-600">Prix : Sur devis</p>
                          </div>
                          <div>
                            <p className="font-medium">Seismic</p>
                            <p className="text-sm text-gray-600">✓ Personnalisation contenu</p>
                            <p className="text-sm text-gray-600">✓ Intégrations CRM</p>
                            <p className="text-sm text-gray-600">Prix : Sur devis</p>
                          </div>
                          <div>
                            <p className="font-medium">Notion (Alternative économique)</p>
                            <p className="text-sm text-gray-600">✓ Flexible et collaboratif</p>
                            <p className="text-sm text-gray-600">✓ Excellent rapport qualité/prix</p>
                            <p className="text-sm text-gray-600">Prix : 8-15€/mois/user</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">5. Analytics : Mesurer et Optimiser</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        <strong>Fonction :</strong> Visualiser la performance et identifier les leviers
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium mb-2">Top 3 Solutions {currentYear} :</p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">Tableau / Power BI</p>
                            <p className="text-sm text-gray-600">✓ Dashboards avancés</p>
                            <p className="text-sm text-gray-600">✓ Intégrations multiples</p>
                            <p className="text-sm text-gray-600">Prix : 12-70€/mois/user</p>
                          </div>
                          <div>
                            <p className="font-medium">Clari</p>
                            <p className="text-sm text-gray-600">✓ Revenue intelligence</p>
                            <p className="text-sm text-gray-600">✓ Forecasting IA</p>
                            <p className="text-sm text-gray-600">Prix : Sur devis</p>
                          </div>
                          <div>
                            <p className="font-medium">Google Data Studio (Gratuit)</p>
                            <p className="text-sm text-gray-600">✓ Gratuit et puissant</p>
                            <p className="text-sm text-gray-600">✓ Intégrations Google</p>
                            <p className="text-sm text-gray-600">Prix : Gratuit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Revolution */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    L'IA Générative : La Révolution en Cours
                  </h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <p className="font-medium mb-2">Le Tournant de {currentYear} :</p>
                    <p className="text-gray-700 leading-relaxed">
                      L'IA générative (ChatGPT, Claude, etc.) transforme radicalement le métier commercial.
                      <strong> Les équipes qui l'adoptent gagnent 2-3h/jour de productivité.</strong>
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">5 Cas d'Usage IA à Déployer Immédiatement</h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">1. Recherche et Qualification de Prospects</h4>
                      <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                        <strong>Prompt exemple :</strong>
                      </p>
                      <div className="bg-white rounded p-3 font-mono text-xs mb-2">
                        "Analyse cette entreprise [URL LinkedIn] et identifie : 1) Leurs 3 principaux défis business 2)
                        Les décideurs clés à contacter 3) Les signaux d'achat potentiels 4) Un angle d'approche
                        personnalisé"
                      </div>
                      <p className="text-sm text-green-600 font-medium">Gain : 15 min → 2 min par prospect</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">2. Rédaction d'Emails de Prospection</h4>
                      <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                        <strong>Prompt exemple :</strong>
                      </p>
                      <div className="bg-white rounded p-3 font-mono text-xs mb-2">
                        "Rédige un email de prospection pour [Prénom] [Nom], [Poste] chez [Entreprise]. Contexte : [pain
                        point identifié]. Ton : professionnel mais chaleureux. Objectif : obtenir un call de 15 min. Max
                        100 mots."
                      </div>
                      <p className="text-sm text-green-600 font-medium">Gain : 10 min → 1 min par email</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">3. Préparation de Calls</h4>
                      <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                        <strong>Prompt exemple :</strong>
                      </p>
                      <div className="bg-white rounded p-3 font-mono text-xs mb-2">
                        "Je vais appeler [Prénom] [Nom], [Poste] chez [Entreprise]. Voici ce que je sais : [contexte].
                        Génère : 1) 5 questions de découverte pertinentes 2) 3 objections probables et leurs réponses 3)
                        Un pitch d'accroche de 30 secondes"
                      </div>
                      <p className="text-sm text-green-600 font-medium">Gain : 20 min → 3 min par call</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">4. Analyse de Transcriptions d'Appels</h4>
                      <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                        <strong>Prompt exemple :</strong>
                      </p>
                      <div className="bg-white rounded p-3 font-mono text-xs mb-2">
                        "Analyse cette transcription d'appel commercial : [coller transcription]. Identifie : 1) Les
                        pain points exprimés 2) Les signaux d'achat 3) Les objections soulevées 4) Les next steps
                        recommandés 5) Le score MEDDPICC (1-10 par critère)"
                      </div>
                      <p className="text-sm text-green-600 font-medium">Gain : 15 min → 2 min par call</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">5. Création de Propositions Commerciales</h4>
                      <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                        <strong>Prompt exemple :</strong>
                      </p>
                      <div className="bg-white rounded p-3 font-mono text-xs mb-2">
                        "Rédige une proposition commerciale pour [Client]. Contexte : [pain points, budget, timeline].
                        Notre solution : [description]. Structure : 1) Executive Summary 2) Problématique 3) Solution
                        proposée 4) ROI attendu 5) Timeline 6) Pricing. Ton : professionnel et orienté résultats."
                      </div>
                      <p className="text-sm text-green-600 font-medium">Gain : 2h → 20 min par proposition</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="font-medium mb-2">Outils IA Recommandés :</p>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      <li>
                        <strong>ChatGPT Plus (20€/mois) :</strong> Polyvalent, excellent pour la rédaction
                      </li>
                      <li>
                        <strong>Claude Pro (20€/mois) :</strong> Meilleur pour l'analyse de longs documents
                      </li>
                      <li>
                        <strong>Perplexity Pro (20€/mois) :</strong> Excellent pour la recherche d'informations
                      </li>
                    </ul>
                    <p className="mt-3 text-sm font-medium text-blue-700">
                      ROI moyen : 5-8h gagnées/semaine/commercial = 1 200€+ de valeur/mois pour 20€ d'investissement
                    </p>
                  </div>
                </div>

                {/* Implementation Framework */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Framework de Déploiement Tech
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    La clé du succès n'est pas d'avoir les meilleurs outils, mais de les déployer correctement. Voici le
                    framework en 4 phases :
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-3">PHASE 1 : AUDIT & STRATÉGIE (Semaine 1-2)</h3>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium mb-2">Checklist d'Audit :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>□ Cartographier tous les outils actuels</li>
                          <li>□ Mesurer le taux d'adoption réel de chaque outil</li>
                          <li>□ Identifier les doublons et redondances</li>
                          <li>□ Calculer le coût total par commercial</li>
                          <li>□ Interviewer 5-10 commerciaux sur leurs pain points tech</li>
                          <li>□ Analyser les gaps entre besoins et outils</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium mb-2">Matrice de Priorisation :</p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-sm">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-2 py-1 text-left">Outil</th>
                                <th className="border border-gray-300 px-2 py-1 text-center">Impact</th>
                                <th className="border border-gray-300 px-2 py-1 text-center">Adoption</th>
                                <th className="border border-gray-300 px-2 py-1 text-center">Coût</th>
                                <th className="border border-gray-300 px-2 py-1 text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-2 py-1">CRM</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Élevé</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Faible</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Élevé</td>
                                <td className="border border-gray-300 px-2 py-1 text-center text-orange-600 font-medium">
                                  Optimiser
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-2 py-1">Outil X</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Faible</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Faible</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Moyen</td>
                                <td className="border border-gray-300 px-2 py-1 text-center text-red-600 font-medium">
                                  Supprimer
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-2 py-1">Prospection</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Élevé</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">-</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">Moyen</td>
                                <td className="border border-gray-300 px-2 py-1 text-center text-green-600 font-medium">
                                  Ajouter
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-3">PHASE 2 : SÉLECTION & TESTS (Semaine 3-4)</h3>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium mb-2">Processus de Sélection :</p>
                        <ol className="space-y-2 text-sm leading-relaxed">
                          <li>1. Shortlist de 3 solutions par catégorie</li>
                          <li>2. Démos avec les vendors (focus cas d'usage réels)</li>
                          <li>3. Période d'essai gratuite (14-30 jours)</li>
                          <li>4. Test avec 3-5 commerciaux pilotes</li>
                          <li>5. Collecte feedback structuré</li>
                          <li>6. Décision basée sur critères objectifs</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium mb-2">Grille d'Évaluation (Score /10) :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>□ Facilité d'utilisation (poids x3)</li>
                          <li>□ Adéquation aux besoins (poids x3)</li>
                          <li>□ Intégrations disponibles (poids x2)</li>
                          <li>□ Qualité du support (poids x2)</li>
                          <li>□ Rapport qualité/prix (poids x2)</li>
                          <li>□ Scalabilité (poids x1)</li>
                          <li>□ Sécurité/RGPD (poids x1)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-3">PHASE 3 : DÉPLOIEMENT (Semaine 5-8)</h3>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 5 : Configuration</p>
                          <ul className="space-y-1 text-sm leading-relaxed">
                            <li>□ Setup technique et intégrations</li>
                            <li>□ Import des données existantes</li>
                            <li>□ Personnalisation workflows</li>
                            <li>□ Tests de validation</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 6 : Formation</p>
                          <ul className="space-y-1 text-sm leading-relaxed">
                            <li>□ Session de formation générale (2h)</li>
                            <li>□ Ateliers pratiques par use case (3x 1h)</li>
                            <li>□ Création de la documentation interne</li>
                            <li>□ Vidéos tutoriels courts (&lt;5 min)</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 7-8 : Adoption</p>
                          <ul className="space-y-1 text-sm leading-relaxed">
                            <li>□ Lancement officiel avec toute l'équipe</li>
                            <li>□ Support quotidien (office hours)</li>
                            <li>□ Gamification de l'adoption</li>
                            <li>□ Célébration des quick wins</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-3">PHASE 4 : OPTIMISATION CONTINUE (Mois 3+)</h3>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium mb-2">Rituels d'Optimisation :</p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                          <li>
                            <strong>Hebdomadaire :</strong> Review des métriques d'adoption
                          </li>
                          <li>
                            <strong>Mensuel :</strong> Session de partage de best practices
                          </li>
                          <li>
                            <strong>Trimestriel :</strong> Audit complet et ajustements
                          </li>
                          <li>
                            <strong>Annuel :</strong> Revue stratégique du stack tech
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KPIs */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6" />
                    KPIs Tech à Suivre
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium mb-3">Adoption & Utilisation</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Taux d'adoption (% users actifs)</span>
                          <span className="font-medium">Objectif : &gt;80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Fréquence d'utilisation (jours/semaine)</span>
                          <span className="font-medium">Objectif : 5/5</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Taux de complétion des workflows</span>
                          <span className="font-medium">Objectif : &gt;90%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium mb-3">Performance Commerciale</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Temps gagné par commercial/semaine</span>
                          <span className="font-medium">Objectif : &gt;5h</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Augmentation du nombre d'activités</span>
                          <span className="font-medium">Objectif : +30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Amélioration du taux de closing</span>
                          <span className="font-medium">Objectif : +20%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium mb-3">ROI & Efficacité</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Coût tech par commercial/mois</span>
                          <span className="font-medium">Benchmark : 150-300€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>ROI global du stack tech</span>
                          <span className="font-medium">Objectif : &gt;200%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Taux d'utilisation des licences</span>
                          <span className="font-medium">Objectif : &gt;85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-medium mb-2">Dashboard Recommandé :</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Créez un dashboard unique qui centralise tous ces KPIs et le partagez en transparence avec
                      l'équipe. La visibilité des métriques augmente l'adoption de 40%.
                    </p>
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Cas Client : Transformation Tech
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Entreprise : InnovateSaaS (40 commerciaux)</h3>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="font-medium mb-2">Situation initiale :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>• 12 outils différents, peu intégrés</li>
                          <li>• Taux d'adoption CRM : 35%</li>
                          <li>• 6h/semaine perdues en saisie manuelle</li>
                          <li>• Aucune visibilité sur la performance réelle</li>
                          <li>• Budget tech : 8 200€/commercial/an</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="font-medium mb-2">Stack déployé :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>
                            • <strong>HubSpot CRM</strong> (cœur du système)
                          </li>
                          <li>
                            • <strong>Apollo.io</strong> (prospection)
                          </li>
                          <li>
                            • <strong>Modjo</strong> (intelligence conversationnelle)
                          </li>
                          <li>
                            • <strong>ChatGPT Team</strong> (IA générative)
                          </li>
                          <li>
                            • <strong>Notion</strong> (enablement)
                          </li>
                          <li>
                            • <strong>Google Data Studio</strong> (analytics)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-medium mb-2">Résultats 6 mois :</p>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          <li>
                            • <strong>Taux d'adoption CRM : 92%</strong> (+163%)
                          </li>
                          <li>
                            • <strong>Temps gagné : 8h/semaine/commercial</strong>
                          </li>
                          <li>
                            • <strong>Activités commerciales : +45%</strong>
                          </li>
                          <li>
                            • <strong>Taux de closing : +28%</strong>
                          </li>
                          <li>
                            • <strong>Budget tech : 4 800€/commercial/an</strong> (-41%)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#d4a574] text-white rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold mb-2">520% ROI</p>
                      <p className="text-sm">Investissement 45k€ → CA additionnel 2,3M€</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="bg-gradient-to-br from-[#d4a574] to-[#c49563] text-white rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-4 text-center">Votre Prochaine Étape</h2>
                  <p className="text-center mb-6 text-white/90 leading-relaxed">
                    Vous avez maintenant la roadmap complète pour construire un stack tech performant et adopté.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Option 1 : Vous déployez seul
                      </h3>
                      <ul className="space-y-2 mb-4 text-sm text-white/90 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Utilisez le framework de déploiement en 4 phases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Suivez les recommandations d'outils par catégorie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Mesurez avec les KPIs recommandés</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Option 2 : Vous vous faites accompagner
                      </h3>
                      <ul className="space-y-2 mb-4 text-sm text-white/90 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Audit tech gratuit pour identifier vos gaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Recommandations personnalisées de stack</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Accompagnement au déploiement et formation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Garantie &gt;80% d'adoption sous 90 jours</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full bg-white text-[#1a1a1a] hover:bg-white/90">
                        <a href="/audit">Réserver mon audit tech gratuit</a>
                      </Button>
                      <p className="text-xs text-center mt-2 text-white/80">
                        Résultat moyen : +40% de productivité en 90 jours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <Link
                    href="/nos-guides/negociation-commerciale-avancee"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Précédent : Négociation et Closing
                  </Link>
                  <Link href="/nos-guides" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">
                    Retour au guide principal
                  </Link>
                  <div className="w-48" />
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

export default TechnologiesClientPage
