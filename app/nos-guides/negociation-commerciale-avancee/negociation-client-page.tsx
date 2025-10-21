"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import GuideSidebar from "@/components/guide-sidebar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Target, Zap, Award, Calendar } from "lucide-react"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

export default function NegociationClientPage() {
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
                    SECTION 4 : NÉGOCIATION
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-6 text-balance leading-tight">
                  Négociation et Closing B2B {currentYear} : Comment Transformer Chaque Objection en Opportunité
                </h1>

                <p className="text-xl text-gray-600 mb-16 text-pretty leading-relaxed">
                  Le guide complet des techniques de négociation modernes qui closent vraiment
                </p>

                {/* Introduction */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-16 border-l-4 border-l-[#f4d03f]">
                  <h2 className="text-2xl font-medium mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Votre Défi de Directeur Commercial
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Vos commerciaux maîtrisent la prospection et la découverte, mais{" "}
                    <strong>perdent 60% de leurs deals en phase de négociation</strong> ? Ils reculent face aux
                    objections prix et n'osent pas closer au bon moment ?
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Vous n'êtes pas seuls. La négociation B2B a radicalement évolué :
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        <strong>73% des décisions d'achat</strong> se prennent désormais en comité
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        Les cycles de négociation se sont <strong>allongés de 40%</strong> depuis 2020
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        <strong>89% des objections</strong> cachent en réalité d'autres préoccupations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a574] mt-1">•</span>
                      <span>
                        Les acheteurs sont <strong>3x plus formés</strong> aux techniques de négociation qu'avant
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Pourtant, certains commerciaux closent 2x plus de deals avec les mêmes prospects.</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Ce guide vous révèle leurs méthodes exactes</strong> pour transformer chaque négociation en
                    closing gagnant-gagnant.
                  </p>
                </div>

                {/* Statistics */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6">L'État de la Négociation B2B en {currentYear}</h2>

                  <h3 className="text-xl font-medium mb-4">Les Chiffres qui Interpellent</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-2 text-left">Métrique</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">2020</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">2024</th>
                          <th className="border border-gray-200 px-4 py-2 text-center">Évolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium">Taux de closing moyen</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">28%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">18%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-medium">
                            -36%
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium">Durée moyenne négociation</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">21 jours</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">34 jours</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-medium">
                            +62%
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium">Nombre d'objections/deal</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">3,2</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">5,7</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-medium">
                            +78%
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium">Remises accordées</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">12%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center">19%</td>
                          <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-medium">
                            +58%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Pourquoi Cette Dégradation ?</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">1. Complexification des processus d'achat</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Multiplication des parties prenantes (6,8 personnes en moyenne)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Processus de validation plus longs et structurés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Critères de décision plus nombreux et techniques</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">2. Professionnalisation des acheteurs</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Formation aux techniques de négociation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Utilisation d'outils d'aide à l'achat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Benchmarking systématique des fournisseurs</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">3. Pression économique accrue</h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Budgets plus contraints et scrutés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>ROI exigé sur tous les investissements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Négociation devenue systématique</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 font-medium">
                    Mais les top performers s'adaptent et excellent encore. Voici comment.
                  </p>
                </div>

                {/* 3 Pillars */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Les 3 Piliers de la Négociation Moderne
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 1 : Négociation Consultative</h3>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Approche collaborative vs. combative</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Création de valeur mutuelle avant répartition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Relation long terme privilégiée sur transaction</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 2 : Gestion Scientifique des Objections</h3>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Méthode A-CRAC pour traiter toute objection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Compréhension des vraies préoccupations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Transformation des freins en leviers</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 3 : Closing Basé sur les Signaux</h3>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Détection fine des signaux d'achat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Techniques de closing consultatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4a574] mt-1">•</span>
                          <span>Accélération intelligente des cycles</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Consultative Negotiation */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6">Négociation Consultative : La Révolution Mindset</h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Votre Défi de Management
                    </h3>
                    <p className="text-gray-700">
                      Vos commerciaux abordent encore la négociation comme un "combat" à gagner ? Cette mentalité
                      détruit 70% des deals avant même de commencer.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>La négociation moderne</strong> est collaborative : il s'agit de résoudre un problème
                      ensemble, pas de s'affronter.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Framework de Négociation Consultative</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">ÉTAPE 1 : PRÉPARATION STRATÉGIQUE BATNA</h4>
                      <p className="text-gray-700 mb-3">Votre BATNA (Best Alternative To Negotiated Agreement) :</p>
                      <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                        <div className="space-y-2">
                          <p className="font-medium">ANALYSE BATNA - PRÉPARATION NÉGOCIATION</p>
                          <p className="mt-3 font-medium">NOTRE POSITION :</p>
                          <p>□ Autres prospects en cours : _____ (valeur : _____€)</p>
                          <p>□ Probabilité de closing alternatives : _____%</p>
                          <p>□ Coût d'opportunité si échec : _____€</p>
                          <p>□ Prix de réserve minimum : _____€</p>
                          <p>□ Marge minimale acceptable : _____%</p>
                          <p className="mt-3 font-medium">BATNA DU CLIENT :</p>
                          <p>□ Statu quo - Coût annuel : _____€</p>
                          <p>□ Concurrent A - Prix estimé : _____€</p>
                          <p>□ Concurrent B - Prix estimé : _____€</p>
                          <p>□ Solution interne - Coût : _____€</p>
                          <p>□ Report du projet - Impact : _____€</p>
                          <p className="mt-3 font-medium">ZONE D'ACCORD POSSIBLE (ZOPA) :</p>
                          <p>Notre minimum : _____€</p>
                          <p>Leur maximum estimé : _____€</p>
                          <p>Zone de négociation : _____€ à _____€</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">ÉTAPE 2 : PHILOSOPHIE GAGNANT-GAGNANT</h4>
                      <p className="text-gray-700 mb-3">Les 4 Principes Fondamentaux :</p>

                      <div className="space-y-4">
                        <div>
                          <p className="font-medium mb-2">1. Séparer les personnes du problème</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                            <p className="text-red-600">❌ "Vous êtes trop exigeant sur le prix"</p>
                            <p className="text-green-600">
                              ✅ "Je comprends la contrainte budgétaire. Comment pouvons-nous optimiser l'investissement
                              ?"
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">2. Se concentrer sur les intérêts, pas les positions</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                            <p>
                              <strong>Position client :</strong> "Votre prix est trop élevé"
                            </p>
                            <p>
                              <strong>Intérêt réel :</strong> "Je dois justifier le ROI auprès de ma direction"
                            </p>
                            <p className="text-green-600 mt-2">
                              ✅ Réponse : "Construisons ensemble la démonstration ROI pour votre comité de direction"
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">3. Générer des options à bénéfice mutuel</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                            <p>
                              <strong>Au lieu de :</strong> Réduction de prix simple
                            </p>
                            <p>
                              <strong>Proposer :</strong>
                            </p>
                            <ul className="ml-4 space-y-1">
                              <li>• Paiement étalé sur 24 mois</li>
                              <li>• Démarrage par un pilote</li>
                              <li>• Modules additionnels offerts</li>
                              <li>• Formation équipe incluse</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">4. Utiliser des critères objectifs</p>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-green-600">
                              "Selon l'étude Gartner, le ROI moyen de ce type de solution est de 280% sur 3 ans. Voici
                              comment nous l'atteignons chez vous..."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* A-CRAC Method */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6">Méthode A-CRAC : Maîtriser Toute Objection</h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Votre Défi de Management
                    </h3>
                    <p className="text-gray-700">
                      Vos commerciaux paniquent face aux objections et improvisent leurs réponses ? 85% des objections
                      sont prévisibles et peuvent être traitées avec méthode.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>La méthode A-CRAC</strong> transforme chaque objection en opportunité de renforcer votre
                      position.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">A-CRAC : Décomposition Opérationnelle</h3>

                  <div className="space-y-6">
                    {/* A - Accueillir */}
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-3">A - ACCUEILLIR L'OBJECTION</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>Objectif :</strong> Créer un climat de confiance et montrer que l'objection est
                        légitime.
                      </p>

                      <p className="font-medium mb-2">Phrases d'accueil haute performance :</p>
                      <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                        <p>"Je comprends parfaitement cette préoccupation"</p>
                        <p>"C'est une excellente question que se posent beaucoup de nos clients"</p>
                        <p>"Vous avez raison de soulever ce point important"</p>
                        <p>"Merci de me faire part de cette interrogation légitime"</p>
                        <p>"Cette remarque est tout à fait pertinente dans votre contexte"</p>
                      </div>

                      <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="font-medium mb-2">⚠️ À éviter absolument :</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-red-600">❌ "Oui, mais..."</p>
                          <p className="text-red-600">❌ "Vous avez tort de penser que..."</p>
                          <p className="text-red-600">❌ "Ce n'est pas un problème"</p>
                          <p className="text-red-600">❌ "Laissez-moi vous expliquer pourquoi..."</p>
                          <p className="text-red-600">❌ Attitude défensive ou agacée</p>
                        </div>
                      </div>
                    </div>

                    {/* C - Creuser */}
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-3">C - CREUSER L'OBJECTION</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>Objectif :</strong> Comprendre la vraie nature de l'objection et les motivations
                        sous-jacentes.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <p className="font-medium mb-2">Objection PRIX :</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                            <p>"Qu'est-ce qui vous fait dire que c'est cher ?"</p>
                            <p>"Par rapport à quel budget ou référence ?"</p>
                            <p>"Quelle était votre fourchette budgétaire initiale ?"</p>
                            <p>"Qu'est-ce qui serait acceptable pour vous ?"</p>
                            <p>"Comment évaluez-vous habituellement ce type d'investissement ?"</p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">Objection TIMING :</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                            <p>"Qu'est-ce qui vous fait dire que ce n'est pas le bon moment ?"</p>
                            <p>"Quand serait-ce plus opportun selon vous ?"</p>
                            <p>"Qu'est-ce qui doit changer d'ici là ?"</p>
                            <p>"Quel est l'impact d'attendre 6 mois de plus ?"</p>
                            <p>"Y a-t-il une échéance particulière à respecter ?"</p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">Technique du "Pourquoi" en cascade :</p>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                            <p>
                              <strong>Client :</strong> "C'est trop cher"
                            </p>
                            <p>
                              <strong>Vous :</strong> "Qu'est-ce qui vous fait dire cela ?" (Pourquoi 1)
                            </p>
                            <p>
                              <strong>Client :</strong> "Notre budget est de 50k€"
                            </p>
                            <p>
                              <strong>Vous :</strong> "Comment avez-vous défini ce budget ?" (Pourquoi 2)
                            </p>
                            <p>
                              <strong>Client :</strong> "C'est ce qu'on a dépensé l'an dernier"
                            </p>
                            <p>
                              <strong>Vous :</strong> "Êtes-vous satisfait des résultats obtenus ?" (Pourquoi 3)
                            </p>
                            <p>
                              <strong>Client :</strong> "Pas vraiment, on aimerait faire mieux"
                            </p>
                            <p>
                              <strong>Vous :</strong> "Quel serait l'impact de faire mieux ?" (Pourquoi 4)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* R - Reformuler */}
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-3">R - REFORMULER L'OBJECTION</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>Objectif :</strong> Valider votre compréhension et montrer que vous avez écouté.
                      </p>

                      <p className="font-medium mb-2">Structure de reformulation :</p>
                      <div className="bg-gray-50 rounded-lg p-3 text-sm mb-3">
                        <p>
                          "Si je comprends bien, votre préoccupation est [objection reformulée] parce que [raison
                          identifiée]. C'est bien cela ?"
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="font-medium mb-1">Objection prix :</p>
                          <div className="bg-gray-50 rounded-lg p-3 text-sm">
                            <p>
                              "Si je résume, vous trouvez notre proposition élevée par rapport à votre budget initial de
                              50k€, et vous vous demandez comment justifier cet investissement auprès de votre
                              direction. Est-ce exact ?"
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-1">Objection timing :</p>
                          <div className="bg-gray-50 rounded-lg p-3 text-sm">
                            <p>
                              "Si je comprends bien, vous préférez reporter le projet car vous avez d'autres priorités
                              ce trimestre, et vous craignez de manquer de temps pour bien le déployer. C'est bien cela
                              ?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* A - Argumenter */}
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-3">A - ARGUMENTER AVEC PERTINENCE</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>Objectif :</strong> Apporter une réponse ciblée qui traite la vraie objection.
                      </p>

                      <p className="font-medium mb-2">Structure BAC(P) pour l'argumentation :</p>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-medium mb-1">B - BÉNÉFICE (Impact business)</p>
                          <p className="text-sm">"Cette fonctionnalité vous permettra de [bénéfice concret]"</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-medium mb-1">A - AVANTAGE (Différenciation)</p>
                          <p className="text-sm">"Contrairement aux autres solutions du marché..."</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-medium mb-1">C - CARACTÉRISTIQUE (Aspect technique)</p>
                          <p className="text-sm">"Techniquement, notre solution intègre..."</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-medium mb-1">P - PREUVE (Validation)</p>
                          <p className="text-sm">"Comme témoigne [client similaire]..."</p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="font-medium mb-2">Exemple complet d'argumentation BAC(P) :</p>
                        <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-sm">
                          <p className="italic">Objection : "Votre solution semble trop compliquée"</p>
                          <p>
                            <strong>B -</strong> "Cette richesse fonctionnelle vous fera gagner 2h/jour car vous n'aurez
                            plus à jongler entre 3 outils différents"
                          </p>
                          <p>
                            <strong>A -</strong> "Contrairement aux solutions basiques du marché, nous intégrons tout
                            dans une interface unique et intuitive"
                          </p>
                          <p>
                            <strong>C -</strong> "Techniquement, notre plateforme centralise toutes vos données en temps
                            réel avec synchronisation automatique"
                          </p>
                          <p>
                            <strong>P -</strong> "D'ailleurs, chez [Client X], ils ont réduit de 40% leur temps de
                            traitement grâce à cette intégration"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* C - Contrôler */}
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-3">C - CONTRÔLER L'IMPACT</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>Objectif :</strong> Vérifier que l'objection est levée et que le client est satisfait.
                      </p>

                      <p className="font-medium mb-2">Questions de contrôle :</p>
                      <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm mb-3">
                        <p>"Est-ce que cela répond à votre interrogation ?"</p>
                        <p>"Cela lève-t-il votre préoccupation ?"</p>
                        <p>"Qu'est-ce que vous en pensez ?"</p>
                        <p>"Y a-t-il d'autres points à clarifier sur ce sujet ?"</p>
                        <p>"Êtes-vous rassuré sur cet aspect ?"</p>
                        <p>"Cela change-t-il votre perception ?"</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="font-medium mb-2">Si l'objection persiste :</p>
                        <div className="space-y-1 text-sm">
                          <p>
                            "Je sens que vous n'êtes pas totalement convaincu. Qu'est-ce qui vous préoccupe encore ?"
                          </p>
                          <p>"Qu'est-ce qui vous manque pour être complètement rassuré ?"</p>
                          <p>"Y a-t-il un autre aspect de cette problématique que nous n'avons pas abordé ?"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Closing Techniques */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6">Techniques de Closing Consultatives</h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Votre Défi de Management
                    </h3>
                    <p className="text-gray-700">
                      Vos commerciaux n'osent pas closer ou le font au mauvais moment ? 67% des deals se perdent par
                      manque de closing approprié, pas par manque d'intérêt.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Le closing moderne</strong> ne consiste plus à "forcer" la décision, mais à faciliter la
                      prise de décision quand tous les éléments sont alignés.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Détection des Signaux d'Achat</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium mb-2">Signaux Verbaux Positifs</h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div>
                          <p className="font-medium mb-1">PROJECTION DANS L'USAGE :</p>
                          <div className="space-y-1 text-sm ml-4">
                            <p>"Comment ça marcherait dans notre contexte ?"</p>
                            <p>"Quand pourriez-vous commencer l'implémentation ?"</p>
                            <p>"Qui de notre équipe serait formé en premier ?"</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium mb-1">QUESTIONS DE PRÉCISION :</p>
                          <div className="space-y-1 text-sm ml-4">
                            <p>"Quelle est la durée minimale du contrat ?"</p>
                            <p>"Comment se passe concrètement l'onboarding ?"</p>
                            <p>"Quel niveau de support est inclus ?"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Grille de Signaux d'Achat</h4>
                      <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                        <p className="font-medium mb-2">GRILLE DE SIGNAUX D'ACHAT - [CLIENT]</p>
                        <div className="space-y-2">
                          <p className="font-medium mt-2">SIGNAUX VERBAUX : SCORE (1-5)</p>
                          <p>□ Questions sur l'implémentation ___</p>
                          <p>□ Projection dans l'usage ___</p>
                          <p>□ Validation d'hypothèses ___</p>
                          <p>□ Comparaison positive ___</p>
                          <p>□ Expression d'urgence ___</p>
                          <p className="font-medium mt-2">SCORE TOTAL : ___/75</p>
                          <p className="mt-2">INTERPRÉTATION :</p>
                          <p>60-75 : Signaux très positifs - Closer maintenant</p>
                          <p>45-59 : Signaux positifs - Tester un closing</p>
                          <p>30-44 : Signaux mitigés - Continuer la découverte</p>
                          <p>&lt; 30 : Signaux faibles - Requalifier l'opportunité</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Les 5 Techniques de Closing Modernes</h3>

                  <div className="space-y-6">
                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-2">1. CLOSING PAR ALTERNATIVE</h4>
                      <p className="text-gray-700 mb-2 text-sm">
                        <strong>Principe :</strong> Proposer deux options positives au lieu d'un choix oui/non.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                        <p>"Préférez-vous commencer par le module CRM ou le module Marketing ?"</p>
                        <p>"Souhaitez-vous démarrer en janvier ou février ?"</p>
                        <p>"Voulez-vous 10 ou 15 licences pour commencer ?"</p>
                        <p>"Préférez-vous un paiement annuel ou semestriel ?"</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-2">2. CLOSING PAR RÉCAPITULATIF</h4>
                      <p className="text-gray-700 mb-2 text-sm">
                        <strong>Principe :</strong> Résumer tous les points d'accord avant de demander l'engagement.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3 text-sm">
                        <p className="mb-2">"Récapitulons notre échange :</p>
                        <p>✓ Vous confirmez que notre solution résout votre problème de [X]</p>
                        <p>✓ L'équipe est enthousiaste sur les fonctionnalités présentées</p>
                        <p>✓ Le ROI de 280% correspond à vos attentes</p>
                        <p>✓ Le timing de démarrage en janvier vous convient</p>
                        <p>✓ Nous avons levé vos interrogations sur l'intégration</p>
                        <p className="mt-2">Qu'est-ce qui vous empêche de démarrer ?"</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-2">3. CLOSING PAR HYPOTHÈSE</h4>
                      <p className="text-gray-700 mb-2 text-sm">
                        <strong>Principe :</strong> Partir du principe que la décision est prise et parler des étapes
                        suivantes.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                        <p>"Quand nous aurons signé, quelle sera votre priorité pour le démarrage du projet ?"</p>
                        <p>"Une fois le contrat finalisé, qui sera votre interlocuteur privilégié côté technique ?"</p>
                        <p>"Après l'implémentation, comment mesurerez-vous le succès du déploiement ?"</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-2">4. CLOSING PAR URGENCE CRÉÉE</h4>
                      <p className="text-gray-700 mb-2 text-sm">
                        <strong>Principe :</strong> Créer une raison légitime d'agir rapidement.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <p className="font-medium mb-1">URGENCE TARIFAIRE :</p>
                          <p>
                            "Nos tarifs évoluent au 1er janvier avec +8% d'augmentation. Si nous signons avant fin
                            décembre, vous conservez les conditions actuelles pendant toute la durée du contrat."
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <p className="font-medium mb-1">URGENCE CAPACITÉ :</p>
                          <p>
                            "Nous n'avons que 2 créneaux de démarrage disponibles au Q1. Si vous souhaitez commencer tôt
                            dans l'année, il faut réserver votre slot maintenant."
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                        <p>
                          <strong>⚠️ Important :</strong> L'urgence doit être réelle et vérifiable, jamais artificielle.
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4a574] pl-4">
                      <h4 className="font-medium mb-2">5. CLOSING PAR QUESTION DIRECTE</h4>
                      <p className="text-gray-700 mb-2 text-sm">
                        <strong>Principe :</strong> Demander directement l'engagement quand tous les feux sont au vert.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                        <p>"Êtes-vous prêt à démarrer avec nous ?"</p>
                        <p>"Qu'est-ce qui vous empêche de dire oui aujourd'hui ?"</p>
                        <p>"Avez-vous toutes les informations pour prendre votre décision ?"</p>
                        <p>"Souhaitez-vous que je prépare le contrat ?"</p>
                        <p>"Pouvons-nous planifier le kick-off ?"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Plan */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Plan d'Implémentation 90 Jours
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-3">MOIS 1 : FONDATIONS</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 1-2 : Formation méthode A-CRAC</p>
                          <ul className="space-y-1 text-sm ml-4">
                            <li>□ Atelier A-CRAC avec toute l'équipe</li>
                            <li>□ Création des templates d'objections sectorielles</li>
                            <li>□ Jeux de rôle sur objections fréquentes</li>
                            <li>□ Mise en place du scoring signaux d'achat</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 3-4 : Techniques de closing</p>
                          <ul className="space-y-1 text-sm ml-4">
                            <li>□ Formation aux 5 techniques de closing</li>
                            <li>□ Entraînement détection signaux d'achat</li>
                            <li>□ Création des scripts de closing sectoriels</li>
                            <li>□ Premiers tests sur deals en cours</li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium text-green-600">
                          Résultats Mois 1 : +20% de taux de closing, réduction objections non traitées
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-3">MOIS 2 : OPTIMISATION</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 5-6 : Négociation consultative</p>
                          <ul className="space-y-1 text-sm ml-4">
                            <li>□ Formation à la préparation BATNA</li>
                            <li>□ Ateliers de négociation gagnant-gagnant</li>
                            <li>□ Développement des techniques d'accélération</li>
                            <li>□ Coaching individuel sur deals complexes</li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium text-green-600">
                          Résultats Mois 2 : +30% de taux de closing, -25% durée négociation
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-3">MOIS 3 : EXCELLENCE</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-medium mb-2">Semaine 9-12 : Maîtrise avancée</p>
                          <ul className="space-y-1 text-sm ml-4">
                            <li>□ Techniques de négociation complexe</li>
                            <li>□ Gestion des situations de crise</li>
                            <li>□ Optimisation de la préservation de marge</li>
                            <li>□ Certification interne des compétences</li>
                          </ul>
                        </div>
                        <p className="text-sm font-medium text-green-600">
                          Résultats Mois 3 : +45% de taux de closing, process optimisé et pérennisé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Cas Client : Transformation Négociation
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Entreprise : TechSolutions Pro (25 commerciaux)</h3>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="font-medium mb-2">Situation initiale :</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Taux de closing : 22%</li>
                          <li>• Durée négociation : 45 jours</li>
                          <li>• Remise moyenne : 18%</li>
                          <li>• 40% des deals perdus sur objections</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="font-medium mb-2">Méthodes déployées :</p>
                        <ul className="space-y-1 text-sm">
                          <li>
                            • <strong>Méthode A-CRAC</strong> systématisée
                          </li>
                          <li>
                            • <strong>Closing consultatif</strong> avec détection signaux
                          </li>
                          <li>
                            • <strong>Négociation BATNA</strong> préparée
                          </li>
                          <li>
                            • <strong>Accélération</strong> des cycles par MEDDPICC
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-medium mb-2">Résultats 6 mois :</p>
                        <ul className="space-y-1 text-sm">
                          <li>
                            • <strong>Taux de closing : 38%</strong> (+73%)
                          </li>
                          <li>
                            • <strong>Durée négociation : 28 jours</strong> (-38%)
                          </li>
                          <li>
                            • <strong>Remise moyenne : 11%</strong> (-39%)
                          </li>
                          <li>
                            • <strong>Deals perdus objections : 15%</strong> (-63%)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#d4a574] text-white rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold mb-2">8 000% ROI</p>
                      <p className="text-sm">Investissement 35k€ → CA additionnel 2,8M€</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="bg-gradient-to-br from-[#d4a574] to-[#c49563] text-white rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-medium mb-4 text-center">Votre Prochaine Étape</h2>
                  <p className="text-center mb-6 text-white/90">
                    Vous avez maintenant toutes les méthodes pour transformer vos négociations en machine à closing
                    prévisible.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Option 1 : Vous déployez seul
                      </h3>
                      <ul className="space-y-2 mb-4 text-sm text-white/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Utilisez tous les frameworks et templates fournis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Suivez le plan d'implémentation 90 jours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Mesurez vos progrès avec les KPIs recommandés</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Option 2 : Vous vous faites accompagner
                      </h3>
                      <ul className="space-y-2 mb-4 text-sm text-white/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Audit négociation gratuit pour identifier vos blocages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Formation A-CRAC personnalisée à votre équipe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Coaching individuel sur vos deals en cours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Garantie +30% de taux de closing sous 90 jours</span>
                        </li>
                      </ul>
                      <Button asChild className="w-full bg-white text-[#1a1a1a] hover:bg-white/90">
                        <a href="/audit">Réserver mon audit négociation gratuit</a>
                      </Button>
                      <p className="text-xs text-center mt-2 text-white/80">
                        Résultat moyen : +35% de taux de closing en 90 jours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <Link
                    href="/nos-guides/meddpicc-guide-complet"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    ← Précédent : Qualification MEDDPICC
                  </Link>
                  <Link href="/nos-guides" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">
                    Retour au guide principal
                  </Link>
                  <Link
                    href="/nos-guides/technologies-commerciales-2024"
                    className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                  >
                    Suivant : Technologies et Performance →
                  </Link>
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
