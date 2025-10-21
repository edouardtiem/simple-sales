import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"
import GuideSidebar from "@/components/guide-sidebar"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

const currentYear = getCurrentYear()
const lastUpdate = getLastUpdateDate()

export const metadata: Metadata = {
  title: "Améliorer Performance Équipe Commerciale | Guide Expert",
  description:
    "Découvrez comment augmenter de 40% les performances de votre équipe commerciale. Méthodes MEDDPICC, closing avancé, audit gratuit 20min.",
  openGraph: {
    title: `Comment Améliorer les Performances de votre Équipe Commerciale : Guide Expert ${currentYear}`,
    description:
      "Le guide de référence pour les directeurs commerciaux qui veulent transformer leur organisation en machine à revenus. Méthodes prouvées, résultats mesurables.",
    url: "https://simplesales.fr/nos-guides",
    siteName: "Simple Sales",
    locale: "fr_FR",
    type: "article",
  },
  keywords: [
    "améliorer performance équipe commerciale",
    "formation commerciale équipe",
    "augmenter taux de closing",
    "management équipe commerciale",
    "coaching commercial équipe",
    "motivation équipe commerciale",
    "KPI équipe commerciale",
    "objectifs commerciaux équipe",
    "processus commercial B2B",
    "MEDDPICC",
    "négociation commerciale",
  ],
}

export default function GuideMainPage() {
  const year = getCurrentYear()
  const updateDate = getLastUpdateDate()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Comment Améliorer les Performances de votre Équipe Commerciale : Guide Expert ${year}`,
            description:
              "Le guide de référence pour les directeurs commerciaux qui veulent transformer leur organisation commerciale en machine à revenus.",
            url: "https://simplesales.fr/nos-guides",
            author: {
              "@type": "Person",
              "@id": "https://simplesales.fr/#founder",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://simplesales.fr/#organization",
            },
            inLanguage: "fr-FR",
            datePublished: "2024-10-21",
            dateModified: new Date().toISOString().split("T")[0],
          }),
        }}
      />
      <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-sans">
        <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer"
              >
                simple.sales
              </a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                {/* Main content area */}
                <article className="max-w-none">
                  <div className="mb-16 text-center lg:text-left">
                    <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full mb-6">
                      Guide Expert
                    </div>
                    <div className="text-sm text-gray-600 mb-4">Dernière mise à jour : {updateDate}</div>
                    <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
                      Comment Améliorer les Performances de votre Équipe Commerciale : Guide Expert {year}
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      Le guide de référence pour les directeurs commerciaux qui veulent transformer leur organisation en
                      machine à revenus
                    </p>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                      <h2 className="text-2xl font-semibold mb-6">
                        Les Chiffres Alarmants du Management Commercial en {year}
                      </h2>
                      <ul className="space-y-4 text-gray-700 text-left">
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] font-bold text-2xl flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            <strong>78% des équipes commerciales</strong> sous-performent vs leurs objectifs annuels
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] font-bold text-2xl flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            <strong>65% des Directeurs Commerciaux</strong> n'ont pas de visibilité précise sur leur
                            pipeline réel
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] font-bold text-2xl flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            <strong>43% des commerciaux</strong> quittent leur poste dans les 18 premiers mois
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] font-bold text-2xl flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            <strong>67% des formations commerciales</strong> n'ont aucun impact mesurable après 6 mois
                          </span>
                        </li>
                      </ul>
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                        <p className="text-gray-700 leading-relaxed">
                          <strong className="text-green-700">La bonne nouvelle ?</strong> Les 22% d'équipes qui
                          sur-performent appliquent des méthodes précises que nous allons vous révéler dans ce guide.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border-l-4 border-[#f6c344] rounded-lg p-6 mb-8 shadow-sm">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Notre promesse :</strong> Vous donner la roadmap exacte pour améliorer les performances
                        de votre équipe commerciale de 40% en 90 jours, avec des méthodes éprouvées par plus de 500
                        directeurs commerciaux.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-blue-500 rounded-lg p-8 mb-16 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Comment utiliser ce guide ?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ce guide couvre l'ensemble du cycle de vente B2B en 5 parties structurées. Chaque section vous
                      apporte une compréhension solide des concepts clés, des frameworks actionnables, et des exemples
                      concrets pour que <strong>vous puissiez les déployer vous-même dans votre organisation</strong>.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Pour aller plus loin :</strong> À la fin de chaque partie, vous trouverez un accès vers un
                      guide détaillé ultra-complet avec des templates prêts à l'emploi, des checklists pas-à-pas, des
                      études de cas approfondies, et tous les outils nécessaires pour déployer ces méthodes dans votre
                      organisation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Que vous lisiez ce guide en entier ou que vous alliez directement à la section qui vous intéresse,
                      vous aurez toujours la possibilité d'approfondir avec des ressources opérationnelles concrètes.
                      <strong> Si vous souhaitez un accompagnement personnalisé</strong>, vous pourrez également
                      réserver un audit gratuit de 20 minutes.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">
                      5 Méthodes Prouvées pour Augmenter vos Performances Commerciales de 40%
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Découvrez les 5 piliers qui transforment les organisations commerciales, de l'audit initial aux
                      technologies les plus avancées.
                    </p>
                  </div>

                  {/* PARTIE 1 : Diagnostic et Fondamentaux */}
                  <section id="diagnostic" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#f6c344] rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold mb-2">Diagnostic et Fondamentaux</h2>
                          <p className="text-lg text-gray-600 italic">Où en êtes-vous vraiment ?</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Le problème que vous devez résoudre :</h3>
                          <p className="text-gray-700 leading-relaxed">
                            78% des entreprises B2B ne savent pas précisément où elles perdent de l'argent dans leur
                            processus commercial. Elles voient les symptômes (pipeline qui stagne, cycles qui
                            s'allongent, taux de closing qui baisse) mais pas les causes racines.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">L'approche recommandée :</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Un framework d'audit en 3 couches qui révèle les fuites invisibles :
                          </p>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">1. Audit quantitatif :</h4>
                              <p className="text-gray-700 mb-3">
                                Analysez vos ratios de conversion réels vs benchmarks sectoriels
                              </p>
                              <div className="bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                                <p className="font-semibold mb-2">Exemple concret :</p>
                                <ul className="space-y-1 text-gray-700">
                                  <li>• Lead → RDV : Vous 12% | Benchmark 18% → Fuite de 33%</li>
                                  <li>• RDV → Proposition : Vous 35% | Benchmark 55% → Fuite de 36%</li>
                                  <li>• Proposition → Signature : Vous 22% | Benchmark 28% → Fuite de 21%</li>
                                </ul>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">2. Audit qualitatif :</h4>
                              <p className="text-gray-700">
                                Menez des entretiens structurés avec votre équipe pour identifier les points de friction
                                opérationnels
                              </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">3. Audit stratégique :</h4>
                              <p className="text-gray-700">
                                Évaluez votre maturité sur 30 critères de performance commerciale
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Ce que vous découvrirez concrètement :</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344] font-bold">•</span>
                              <span>
                                <strong>Les mathématiques de votre réussite :</strong> Comment prédire vos revenus avec
                                une précision de 95%
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344] font-bold">•</span>
                              <span>
                                <strong>Votre matrice de maturité :</strong> Où vous situez-vous par rapport aux top
                                performers de votre secteur ?
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344] font-bold">•</span>
                              <span>
                                <strong>Vos 3 leviers prioritaires :</strong> Les actions qui auront le plus d'impact
                                sur vos résultats
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Templates inclus :</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Checklist d'audit processus commercial (47 points de contrôle)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Calculateur de ratios de conversion (Excel avec formules automatiques)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Matrice de priorisation des améliorations (impact vs facilité)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Grille d'évaluation de maturité commerciale (30 critères)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                          <p className="text-sm font-semibold mb-1">Cas client :</p>
                          <p className="text-sm text-gray-700 italic">
                            Une scale-up SaaS a découvert que 67% de ses deals "perdus" étaient en réalité mal qualifiés
                            dès le départ. En corrigeant ce seul point, elle a augmenté son taux de closing de 23% à 38%
                            en 3 mois.
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold">Temps de lecture :</span> 25 minutes |{" "}
                            <span className="font-semibold">Impact :</span> Visibilité complète sur vos fuites de
                            revenus
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/nos-guides/diagnostic-processus-commercial"
                            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            Accéder au guide détaillé
                            <span>→</span>
                          </Link>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                          >
                            Réserver un audit gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* PARTIE 2 : Prospection et Acquisition 4.0 */}
                  <section id="prospection" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#f6c344] rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold mb-2">Prospection et Acquisition 4.0</h2>
                          <p className="text-lg text-gray-600 italic">Comment générer un pipeline prévisible</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">La réalité du marché en 2024 :</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Les techniques de prospection d'il y a 5 ans ne fonctionnent plus. Les décideurs B2B
                            reçoivent 120+ emails commerciaux par semaine et ignorent 94% des cold calls. Pourtant,
                            certains commerciaux génèrent 3x plus de RDV que leurs collègues avec les mêmes outils.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            La différence ? Maîtriser les 3 piliers de la prospection moderne :
                          </h3>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">1. Cold Calling 3.0 - L'évolution nécessaire</h4>
                              <p className="text-gray-700 mb-3">
                                Fini les scripts robotiques. La nouvelle approche combine :
                              </p>
                              <ul className="space-y-2 text-gray-700 mb-4">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Recherche pré-appel :</strong> 2 minutes sur LinkedIn pour personnaliser
                                    l'accroche
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Structure PERMISSION :</strong> Demander 30 secondes avant de pitcher
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Valeur immédiate :</strong> Apporter un insight dès le premier contact
                                  </span>
                                </li>
                              </ul>
                              <div className="bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                                <p className="font-semibold mb-2">Exemple de script optimisé :</p>
                                <p className="text-gray-700 leading-relaxed">
                                  "Bonjour [Prénom], [Votre prénom] de Simple Sales. J'ai vu que vous recrutiez 3
                                  commerciaux ce trimestre. Avez-vous 30 secondes ? Nous aidons des DirCom comme vous à
                                  réduire de 40% le temps d'onboarding des nouvelles recrues."
                                </p>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                2. Social Selling Avancé - Au-delà des messages automatiques
                              </h4>
                              <p className="text-gray-700 mb-3">
                                LinkedIn reste le canal #1 en B2B, mais 87% des commerciaux l'utilisent mal. Notre
                                approche en 5 étapes :
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Optimisation profil :</strong> Transformer votre profil en aimant à
                                    prospects
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Stratégie de contenu :</strong> 15 min/jour pour devenir une référence
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Engagement intelligent :</strong> Comment commenter pour être remarqué
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Prospection ciblée :</strong> Sales Navigator au maximum de ses capacités
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Séquences multicanales :</strong> LinkedIn + Email + Téléphone en harmonie
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">3. IA et Automation - Multiplier votre efficacité</h4>
                              <p className="text-gray-700 mb-3">
                                L'IA ne remplace pas le commercial, elle le démultiplie :
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Génération de messages :</strong> ChatGPT pour personnaliser à l'échelle
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Scoring prédictif :</strong> Identifier les prospects les plus chauds
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Séquences adaptatives :</strong> Automation qui s'adapte aux comportements
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Conversation Intelligence :</strong> Analyser vos appels pour vous améliorer
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Résultats clients typiques :</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+156%</div>
                              <div className="text-sm text-gray-700">de RDV obtenus</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+43%</div>
                              <div className="text-sm text-gray-700">de taux de réponse email</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">-67%</div>
                              <div className="text-sm text-gray-700">de temps de prospection</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+89%</div>
                              <div className="text-sm text-gray-700">de connexions LinkedIn</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Outils et templates :</h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>15 scripts d'appels à froid sectoriels (SaaS, Industrie, Services...)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Séquences email haute performance (7 touches/14 jours)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Stratégie de contenu LinkedIn (planning éditorial 12 semaines)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f6c344]">→</span>
                              <span>Workflows d'automation intelligente (Outreach, Apollo, HubSpot)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold">Temps de lecture :</span> 35 minutes |{" "}
                            <span className="font-semibold">Impact :</span> +40% de leads qualifiés en 90 jours
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/nos-guides/prospection-b2b-2024"
                            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            Accéder au guide détaillé
                            <span>→</span>
                          </Link>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                          >
                            Réserver un audit gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* PARTIE 3 : Qualification MEDDPICC */}
                  <section id="meddpicc" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#f6c344] rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold mb-2">Qualification et Découverte MEDDPICC</h2>
                          <p className="text-lg text-gray-600 italic">La méthode des top performers mondiaux</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Pourquoi MEDDPICC révolutionne la qualification :
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            BANT (Budget, Authority, Need, Timeline) est obsolète. Créé dans les années 50, il ne
                            reflète plus la complexité des décisions B2B modernes où 6,8 personnes influencent chaque
                            achat en moyenne.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            MEDDPICC, né chez PTC (croissance de 300M$ à 1Md$ en 4 ans), est devenu LA référence des
                            entreprises qui vendent +100k€ par deal. Salesforce, Microsoft, Oracle... tous l'utilisent.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Les 8 composantes qui prédisent le closing :</h3>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                M - METRICS : Au-delà du besoin, quantifier l'impact business
                              </h4>
                              <div className="bg-white rounded border border-gray-200 p-4 mt-3">
                                <p className="text-sm text-red-600 mb-1">❌ "Nous voulons améliorer nos ventes"</p>
                                <p className="text-sm text-green-600">
                                  ✅ "Nous perdons 2,3M€/an à cause de cycles trop longs"
                                </p>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                E - ECONOMIC BUYER : Identifier qui contrôle vraiment le budget
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>73% des deals échouent car l'Economic Buyer n'est jamais rencontré</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Techniques éprouvées pour l'identifier et l'approcher</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                D - DECISION CRITERIA : Comprendre sur quoi vous serez évalué
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Comment influencer les critères en votre faveur</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Templates pour découvrir les critères cachés</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                D - DECISION PROCESS : Cartographier le parcours décisionnel
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Les 6 étapes du Decision Journey B2B</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Comment accélérer chaque étape</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                P - PAPER PROCESS : Anticiper l'administratif (souvent 30% du cycle)
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Checklist des processus achats/légal/IT</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Comment fluidifier la signature</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                I - IDENTIFY PAIN : Creuser la douleur au-delà du besoin exprimé
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Framework SPIN adapté au B2B moderne</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Questions qui révèlent les vrais enjeux</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">C - CHAMPION : Développer votre allié interne</h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Comment identifier le champion idéal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Toolkit pour l'équiper et le motiver</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">
                                C - COMPETITION : Analyser et contrer la concurrence
                              </h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Battlecards par concurrent principal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Stratégies de différenciation</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Impact prouvé de MEDDPICC :</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+67%</div>
                              <div className="text-sm text-gray-700">de précision des forecasts</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+28%</div>
                              <div className="text-sm text-gray-700">de réduction du cycle</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+41%</div>
                              <div className="text-sm text-gray-700">d'augmentation du closing</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                          <p className="text-sm font-semibold mb-1">Cas client :</p>
                          <p className="text-sm text-gray-700 italic">
                            Un éditeur logiciel B2B appliquant MEDDPICC a vu son taux de closing passer de 19% à 34% en
                            6 mois, tout en réduisant son cycle moyen de 8 à 5,5 mois.
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold">Temps de lecture :</span> 45 minutes |{" "}
                            <span className="font-semibold">Impact :</span> +67% de taux de closing sur deals qualifiés
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/nos-guides/meddpicc-guide-complet"
                            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            Accéder au guide détaillé
                            <span>→</span>
                          </Link>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                          >
                            Réserver un audit gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* PARTIE 4 : Négociation et Closing */}
                  <section id="negociation" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#f6c344] rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold mb-2">Négociation et Closing Avancés</h2>
                          <p className="text-lg text-gray-600 italic">Transformer les objections en opportunités</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">La négociation moderne n'est plus un combat :</h3>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            L'époque du "vendeur-guerrier" qui "vainc" les objections est révolue. Les acheteurs B2B
                            2024 sont surinformés, comparent 5+ solutions, et détestent la pression commerciale.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>La nouvelle approche : Négociation Consultative.</strong> Vous devenez un
                            facilitateur de décision, pas un persuadeur. Résultat : moins de résistance, plus de
                            confiance, cycles plus courts.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            La méthode A-CRAC pour traiter toutes les objections :
                          </h3>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">A - ACCUEILLIR l'objection comme légitime</h4>
                              <div className="bg-white rounded border border-gray-200 p-4 mt-3">
                                <p className="text-sm text-red-600 mb-1">
                                  ❌ "Oui mais notre prix est justifié car..."
                                </p>
                                <p className="text-sm text-green-600">
                                  ✅ "Je comprends parfaitement cette préoccupation budgétaire..."
                                </p>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">C - CREUSER pour comprendre la vraie objection</h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>73% des objections cachent autre chose</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Questions de creusement par type d'objection</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">R - REFORMULER pour valider votre compréhension</h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Technique de reformulation qui fait réfléchir le client</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Comment transformer l'objection en question</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">A - ARGUMENTER avec la méthode BAC(P)</h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Bénéfice → Avantage → Caractéristique → Preuve</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Argumentation ciblée selon l'interlocuteur</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">C - CONTRÔLER que l'objection est levée</h4>
                              <ul className="space-y-2 text-gray-700 mt-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Questions de contrôle qui évitent les malentendus</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>Signaux non-verbaux à observer</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Les 5 objections les plus fréquentes et leurs traitements :
                          </h3>
                          <ol className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">1.</span>
                              <span>
                                <strong>"C'est trop cher"</strong> → Framework de recontextualisation ROI
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">2.</span>
                              <span>
                                <strong>"Il faut que j'en parle à mon patron"</strong> → Technique d'équipement du
                                champion
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">3.</span>
                              <span>
                                <strong>"Ce n'est pas le bon moment"</strong> → Création d'urgence légitime
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">4.</span>
                              <span>
                                <strong>"Concurrent X est moins cher"</strong> → Différenciation par la valeur
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">5.</span>
                              <span>
                                <strong>"Nous ne vous connaissez pas assez"</strong> → Stratégie de réassurance
                              </span>
                            </li>
                          </ol>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Résultats clients :</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+34%</div>
                              <div className="text-sm text-gray-700">de taux de closing</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">-28%</div>
                              <div className="text-sm text-gray-700">de réduction des cycles</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+23%</div>
                              <div className="text-sm text-gray-700">de préservation des marges</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold">Temps de lecture :</span> 30 minutes |{" "}
                            <span className="font-semibold">Impact :</span> +25% de taux de closing global
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/nos-guides/negociation-commerciale-avancee"
                            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            Accéder au guide détaillé
                            <span>→</span>
                          </Link>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                          >
                            Réserver un audit gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* PARTIE 5 : Technologies et Performance */}
                  <section id="technologies" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#f6c344] rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                        <div>
                          <h2 className="text-3xl font-semibold mb-2">Technologies et Performance</h2>
                          <p className="text-lg text-gray-600 italic">Le stack commercial qui fait la différence</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            La révolution technologique commerciale est en cours :
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            En 2024, un commercial équipé d'IA génère 3,4x plus de pipeline qu'un commercial
                            "traditionnel". Mais 67% des entreprises utilisent mal leur stack technologique, créant plus
                            de complexité que de valeur.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>L'approche recommandée : Stack Intégré et Évolutif.</strong> Pas d'over-tooling.
                            Choisissez les outils qui créent vraiment de la valeur, selon votre taille et maturité.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Architecture du stack commercial moderne en 3 couches :
                          </h3>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">COUCHE 1 : Données et Intelligence (Le cerveau)</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>CRM Central :</strong> Salesforce, HubSpot ou Pipedrive selon votre taille
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Enrichissement données :</strong> ZoomInfo, Apollo pour la prospection
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>IA prédictive :</strong> Scoring automatique des leads et deals
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">COUCHE 2 : Prospection et Engagement (Les muscles)</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Automation :</strong> Outreach, SalesLoft pour les séquences
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Social Selling :</strong> LinkedIn Sales Navigator optimisé
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Communication :</strong> Aircall, Dialpad avec IA conversationnelle
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">COUCHE 3 : Sales Enablement (L'amplificateur)</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Contenu :</strong> Highspot, Seismic pour les propositions
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Formation :</strong> Gong, Rehearsal pour le coaching IA
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#f6c344]">•</span>
                                  <span>
                                    <strong>Productivité :</strong> Calendly, Notion, Zapier pour l'efficacité
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Matrice de sélection par taille d'entreprise :</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 text-sm">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-3 text-left">Taille</th>
                                  <th className="border border-gray-300 p-3 text-left">CRM</th>
                                  <th className="border border-gray-300 p-3 text-left">Prospection</th>
                                  <th className="border border-gray-300 p-3 text-left">Sales Enablement</th>
                                  <th className="border border-gray-300 p-3 text-left">Budget/mois</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-3 font-semibold">1-10 commerciaux</td>
                                  <td className="border border-gray-300 p-3">HubSpot Starter</td>
                                  <td className="border border-gray-300 p-3">Apollo.io</td>
                                  <td className="border border-gray-300 p-3">PandaDoc</td>
                                  <td className="border border-gray-300 p-3">500-1 500€</td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <td className="border border-gray-300 p-3 font-semibold">11-50 commerciaux</td>
                                  <td className="border border-gray-300 p-3">HubSpot Pro</td>
                                  <td className="border border-gray-300 p-3">Outreach.io</td>
                                  <td className="border border-gray-300 p-3">Highspot</td>
                                  <td className="border border-gray-300 p-3">2 000-8 000€</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-3 font-semibold">51-200 commerciaux</td>
                                  <td className="border border-gray-300 p-3">Salesforce Pro</td>
                                  <td className="border border-gray-300 p-3">SalesLoft</td>
                                  <td className="border border-gray-300 p-3">Seismic</td>
                                  <td className="border border-gray-300 p-3">10 000-30 000€</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">Tendances 2024-2025 à anticiper :</h3>
                          <ol className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">1.</span>
                              <span>
                                <strong>IA Conversationnelle :</strong> Assistants qui mènent la qualification
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">2.</span>
                              <span>
                                <strong>Hyper-personnalisation :</strong> Messages adaptés en temps réel
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">3.</span>
                              <span>
                                <strong>Revenue Operations :</strong> Alignement Sales/Marketing/Customer Success
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">4.</span>
                              <span>
                                <strong>Vente Immersive :</strong> VR/AR pour les démonstrations
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-semibold">5.</span>
                              <span>
                                <strong>Sustainability Selling :</strong> Critères ESG dans les décisions d'achat
                              </span>
                            </li>
                          </ol>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3">ROI typique :</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+35%</div>
                              <div className="text-sm text-gray-700">d'efficacité commerciale</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">-50%</div>
                              <div className="text-sm text-gray-700">de temps administratif</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">+28%</div>
                              <div className="text-sm text-gray-700">de précision des forecasts</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-700">300%</div>
                              <div className="text-sm text-gray-700">ROI en 12 mois</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold">Temps de lecture :</span> 40 minutes |{" "}
                            <span className="font-semibold">Impact :</span> +35% d'efficacité commerciale
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/nos-guides/technologies-commerciales-2024"
                            className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            Accéder au guide détaillé
                            <span>→</span>
                          </Link>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                          >
                            Réserver un audit gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="solutions-taille" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <h2 className="text-3xl font-semibold mb-6">Solutions par Taille d'Équipe Commerciale</h2>
                      <p className="text-gray-700 leading-relaxed mb-8">
                        Chaque taille d'équipe a ses défis spécifiques. Découvrez les approches adaptées à votre
                        contexte pour améliorer les performances de votre équipe commerciale.
                      </p>

                      <div className="space-y-8">
                        {/* PME 3-10 commerciaux */}
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="text-2xl font-semibold mb-4">Pour Équipes de 3-10 Commerciaux (PME)</h3>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-red-700">
                              Vos défis spécifiques de management commercial :
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Budget formation limité et besoin de ROI rapide</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Pas de responsable formation dédié dans l'équipe</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Hétérogénéité des niveaux et manque de process standardisés</span>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-green-700">
                              Approches recommandées pour améliorer vos performances :
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Formation intensive sur 2 jours (fondamentaux + techniques avancées)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Focus sur les quick wins : prospection + closing</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Coaching individuel 3 mois pour ancrer les méthodes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                  <strong>ROI visible sous 60 jours avec +25% de performances moyennes</strong>
                                </span>
                              </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4 italic">
                              💡 Besoin d'accompagnement ? Simple Sales peut vous aider à déployer ces méthodes avec un
                              programme sur-mesure.
                            </p>
                          </div>
                        </div>

                        {/* ETI 11-50 commerciaux */}
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="text-2xl font-semibold mb-4">Pour Équipes de 11-50 Commerciaux (ETI)</h3>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-red-700">
                              Vos défis spécifiques de management commercial :
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Coordination complexe des formations et montée en compétences</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Hétérogénéité importante des niveaux dans l'équipe</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600">•</span>
                                <span>Besoin de mesurer précisément l'impact des investissements formation</span>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-green-700">
                              Approches recommandées pour améliorer vos performances :
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                  Programme modulaire sur 6 mois (MEDDPICC + négociation + prospection moderne)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Certification interne des commerciaux avec évaluation</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Dashboard de suivi des performances en temps réel</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Formation des managers commerciaux au coaching d'équipe</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                  <strong>ROI moyen : +40% de performances en 6 mois</strong>
                                </span>
                              </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4 italic">
                              💡 Besoin d'accompagnement ? Simple Sales peut vous aider à déployer ces méthodes avec un
                              programme sur-mesure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="calculateurs" className="mb-16 scroll-mt-24">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-8 shadow-sm">
                      <h2 className="text-3xl font-semibold mb-6">
                        🧮 Calculateurs Gratuits pour Directeurs Commerciaux
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-8">
                        Évaluez le potentiel d'amélioration de votre équipe commerciale et quantifiez l'impact financier
                        de vos décisions avec nos outils gratuits.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Calculateur Performance */}
                        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                          <h3 className="text-xl font-semibold mb-3">
                            Calculateur de Performance d'Équipe Commerciale
                          </h3>
                          <p className="text-gray-700 mb-4">
                            <strong>Évaluez le potentiel d'amélioration de votre équipe en 3 minutes</strong>
                          </p>
                          <p className="text-gray-700 mb-4">
                            Découvrez combien votre équipe pourrait générer en plus avec les bonnes méthodes :
                          </p>
                          <ul className="space-y-2 text-gray-700 mb-6">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>Saisissez vos métriques actuelles (nb commerciaux, CA, taux closing)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>Comparez avec les benchmarks sectoriels</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>Obtenez votre plan d'action personnalisé avec impact chiffré</span>
                            </li>
                          </ul>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center w-full bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            CALCULER LE POTENTIEL DE MON ÉQUIPE →
                          </Link>
                        </div>

                        {/* Calculateur ROI */}
                        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                          <h3 className="text-xl font-semibold mb-3">Calculateur ROI Formation Commerciale</h3>
                          <p className="text-gray-700 mb-4">
                            <strong>Combien vous coûte le manque de formation de votre équipe ?</strong>
                          </p>
                          <p className="text-gray-700 mb-4">Quantifiez l'impact financier de la sous-performance :</p>
                          <ul className="space-y-2 text-gray-700 mb-6">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>Impact chiffré de la sous-performance actuelle</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>ROI prévisionnel d'un programme de formation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>Temps de retour sur investissement par commercial</span>
                            </li>
                          </ul>
                          <Link
                            href="/audit"
                            className="inline-flex items-center justify-center w-full bg-[#1a1a1a] text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            CALCULER LE ROI D'UNE FORMATION →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="faq" className="mb-16 scroll-mt-24">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                      <h2 className="text-3xl font-semibold mb-6">Questions Fréquentes des Directeurs Commerciaux</h2>

                      <div className="space-y-6">
                        {/* FAQ 1 */}
                        <div className="border-b border-gray-200 pb-6">
                          <h3 className="text-xl font-semibold mb-3">
                            Comment motiver une équipe commerciale qui n'atteint pas ses objectifs ?
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            La motivation commerciale repose sur 3 piliers : <strong>objectifs réalisables</strong> (ni
                            trop faciles, ni impossibles), <strong>reconnaissance des efforts</strong> (pas seulement
                            des résultats), et <strong>développement des compétences</strong> (formation continue). Les
                            études montrent que 67% des problèmes de motivation viennent d'objectifs mal calibrés ou
                            d'un manque de formation adaptée.
                          </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="border-b border-gray-200 pb-6">
                          <h3 className="text-xl font-semibold mb-3">
                            Quels KPI suivre pour mesurer la performance d'une équipe commerciale ?
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Les 5 KPI essentiels pour un Directeur Commercial :{" "}
                            <strong>1) Taux de conversion par étape</strong> (Lead→RDV→Proposition→Signature),{" "}
                            <strong>2) Vélocité du pipeline</strong> (€ générés par jour par commercial),{" "}
                            <strong>3) Durée moyenne du cycle de vente</strong>,{" "}
                            <strong>4) Taux d'atteinte des objectifs</strong> (individuel et collectif),{" "}
                            <strong>5) Coût d'acquisition client</strong> par canal. Ces métriques permettent
                            d'identifier précisément où agir.
                          </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="border-b border-gray-200 pb-6">
                          <h3 className="text-xl font-semibold mb-3">
                            Comment former efficacement une équipe commerciale ?
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            La formation commerciale efficace suit la règle 70-20-10 :{" "}
                            <strong>70% pratique terrain</strong> (coaching individuel, jeux de rôles),{" "}
                            <strong>20% apprentissage social</strong> (partage entre pairs, analyse de deals
                            gagnés/perdus), <strong>10% formation formelle</strong> (méthodes, outils). Les entreprises
                            qui appliquent cette approche voient +34% d'amélioration vs formation traditionnelle.
                          </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="border-b border-gray-200 pb-6">
                          <h3 className="text-xl font-semibold mb-3">Comment recruter des commerciaux performants ?</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Le recrutement commercial efficace se base sur 3 critères :{" "}
                            <strong>1) Expérience secteur</strong> (connaissance du marché),{" "}
                            <strong>2) Compétences comportementales</strong> (résilience, écoute active, persévérance),{" "}
                            <strong>3) Fit culturel</strong> (alignement avec vos valeurs). Utilisez des mises en
                            situation concrètes plutôt que des questions théoriques. 73% des échecs de recrutement
                            viennent d'un mauvais fit culturel.
                          </p>
                        </div>

                        {/* FAQ 5 */}
                        <div className="pb-6">
                          <h3 className="text-xl font-semibold mb-3">
                            Combien coûte une formation commerciale pour une équipe ?
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Le coût d'une formation commerciale varie de 1 500€ à 5 000€ par commercial selon l'ampleur
                            du programme. Mais le coût de la non-formation est bien plus élevé : un commercial
                            sous-performant à 70% coûte en moyenne 45 000€/an en manque à gagner. Le ROI d'une formation
                            efficace est généralement de 300% la première année.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="bg-[#1a1a1a] text-white rounded-lg p-8 shadow-sm">
                    <h2 className="text-3xl font-semibold mb-4 text-center">
                      🎯 AUDIT EXPRESS GRATUIT - Évaluez les Performances de votre Équipe Commerciale
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 text-center">
                      Identifions ensemble les 3 angles morts qui freinent les performances de votre équipe
                    </p>

                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4">En 20 minutes, découvrez :</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] text-xl flex-shrink-0">✓</span>
                          <span>
                            <strong>Diagnostic personnalisé</strong> de votre situation actuelle
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] text-xl flex-shrink-0">✓</span>
                          <span>
                            <strong>Identification des goulots</strong> d'étranglement prioritaires
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] text-xl flex-shrink-0">✓</span>
                          <span>
                            <strong>Plan d'action chiffré</strong> avec impact prévisible sur 90 jours
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#f6c344] text-xl flex-shrink-0">✓</span>
                          <span>
                            <strong>Méthodes adaptées</strong> à votre taille d'équipe et secteur
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-gray-300 mb-6 text-center">
                      Que vous managiez 5 ou 50 commerciaux, que vous fassiez de la prospection, du développement de
                      portefeuille ou de la vente indirecte
                    </p>

                    <p className="text-gray-300 mb-6 text-center italic">
                      Plus de 500 directeurs commerciaux ont déjà identifié leurs leviers d'amélioration grâce à cet
                      audit express
                    </p>

                    <div className="text-center">
                      <Link
                        href="/audit"
                        className="inline-block bg-[#f6c344] text-[#1a1a1a] py-4 px-8 rounded font-semibold text-lg hover:bg-[#f4b82e] transition-colors"
                      >
                        📞 RÉSERVER MON AUDIT GRATUIT 20 MINUTES
                      </Link>
                    </div>

                    <p className="text-center text-sm text-gray-400 mt-4">
                      Résultats moyens post-audit : +34% de performances équipe en 90 jours
                    </p>
                  </div>
                </article>

                {/* Sidebar */}
                <div className="hidden lg:block">
                  <GuideSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
