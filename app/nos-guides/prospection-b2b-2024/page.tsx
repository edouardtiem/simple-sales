import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import ProspectionGuideSidebar from "@/components/prospection-guide-sidebar"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

export const metadata: Metadata = {
  title: `Prospection B2B ${getCurrentYear()} : Techniques Modernes + IA | Simple Sales`,
  description:
    "Maîtrisez la prospection B2B moderne : cold calling 3.0, social selling LinkedIn, IA et automation. Scripts, templates et workflows inclus.",
}

export default function ProspectionPage() {
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
                    SECTION 2 : PROSPECTION
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
                  Prospection B2B {getCurrentYear()} : Comment Générer un Pipeline Prévisible
                </h1>
                <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                  Le guide complet des techniques de prospection modernes qui fonctionnent vraiment
                </p>

                {/* Challenge section */}
                <div
                  id="challenge"
                  className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 mb-16 border-l-4 border-l-[#f4d03f]"
                >
                  <h2 className="text-2xl font-medium mb-4">🎯 Votre Défi de Directeur Commercial</h2>
                  <p className="mb-4 leading-relaxed">
                    Vos commerciaux passent 60% de leur temps à prospecter mais n'obtiennent que 2-3 RDV par semaine ?
                    Vous n'êtes pas seuls. La prospection B2B a radicalement changé :
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      • Les décideurs reçoivent <strong>120+ emails commerciaux par semaine</strong>
                    </li>
                    <li>
                      • <strong>94% des cold calls</strong> sont ignorés
                    </li>
                    <li>
                      • Les réponses aux messages LinkedIn ont chuté de <strong>67% depuis 2020</strong>
                    </li>
                  </ul>
                  <p className="font-medium">
                    Pourtant, certains commerciaux génèrent 3x plus de RDV que leurs collègues avec les mêmes outils.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    <strong>Ce guide vous révèle leurs méthodes exactes</strong> pour transformer votre prospection en
                    machine à pipeline prévisible.
                  </p>
                </div>

                {/* Statistics section */}
                <div id="statistics" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">📊 L'État de la Prospection B2B en 2024</h2>

                  <h3 className="text-xl font-medium mb-4">Les Chiffres qui Font Mal</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-3 text-left">Canal</th>
                          <th className="border border-gray-200 p-3 text-left">Taux 2020</th>
                          <th className="border border-gray-200 p-3 text-left">Taux 2024</th>
                          <th className="border border-gray-200 p-3 text-left">Évolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Cold Email</td>
                          <td className="border border-gray-200 p-3">8,5%</td>
                          <td className="border border-gray-200 p-3">2,1%</td>
                          <td className="border border-gray-200 p-3 text-red-600 font-medium">-75%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Cold Call</td>
                          <td className="border border-gray-200 p-3">12%</td>
                          <td className="border border-gray-200 p-3">4,2%</td>
                          <td className="border border-gray-200 p-3 text-red-600 font-medium">-65%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">LinkedIn InMail</td>
                          <td className="border border-gray-200 p-3">15%</td>
                          <td className="border border-gray-200 p-3">6,8%</td>
                          <td className="border border-gray-200 p-3 text-red-600 font-medium">-55%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Social Selling</td>
                          <td className="border border-gray-200 p-3">23%</td>
                          <td className="border border-gray-200 p-3">18%</td>
                          <td className="border border-gray-200 p-3 text-orange-600 font-medium">-22%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Pourquoi Cette Chute ?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">1. Saturation des canaux</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Volume de sollicitations × 4 en 3 ans</li>
                        <li>Filtres anti-spam de plus en plus efficaces</li>
                        <li>Fatigue des décideurs face aux approches commerciales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">2. Évolution des comportements d'achat</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>67% du parcours d'achat se fait en autonomie</li>
                        <li>Recherche d'informations avant tout contact commercial</li>
                        <li>Méfiance accrue envers les approches "sales"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">3. Professionnalisation des acheteurs</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Formation aux techniques de vente</li>
                        <li>Processus d'achat plus structurés</li>
                        <li>Équipes dédiées aux achats</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 font-medium text-lg">
                    Mais les top performers s'adaptent et excellent encore. Voici comment.
                  </p>
                </div>

                {/* 3 Pillars section */}
                <div id="pillars" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">🔥 Les 3 Piliers de la Prospection Moderne</h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 1 : Hyper-Personnalisation</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Recherche approfondie pré-contact (2-3 minutes minimum)</li>
                        <li>Messages adaptés au contexte spécifique du prospect</li>
                        <li>Valeur ajoutée dès le premier contact</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 2 : Orchestration Multicanale</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Combinaison intelligente de 3-4 canaux</li>
                        <li>Séquences adaptatives selon les réactions</li>
                        <li>Timing optimisé pour chaque interaction</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <h3 className="text-xl font-medium mb-2">Pilier 3 : Automation Intelligente</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>IA pour personnaliser à l'échelle</li>
                        <li>Workflows adaptatifs selon les comportements</li>
                        <li>Mesure et optimisation continue</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cold Calling section */}
                <div id="cold-calling" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">📞 Cold Calling 3.0 : L'Évolution Nécessaire</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3">🎯 Votre Défi de Management</h3>
                    <p className="leading-relaxed">
                      Vos commerciaux font 50 appels/jour mais n'obtiennent que 2-3 contacts utiles ? Le problème n'est
                      pas la quantité, c'est la méthode.
                    </p>
                    <p className="font-medium mt-3">
                      L'approche moderne du cold calling combine préparation intelligente, structure conversationnelle
                      et valeur immédiate.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">📋 Framework de Cold Calling Moderne</h3>

                  <h4 className="text-lg font-medium mb-3">ÉTAPE 1 : RECHERCHE PRE-APPEL (2-3 minutes)</h4>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="font-medium mb-3">Checklist de recherche rapide :</p>
                    <ul className="space-y-2">
                      <li>
                        ☐ <strong>LinkedIn du prospect</strong> : Poste récent, changement, actualité
                      </li>
                      <li>
                        ☐ <strong>Site entreprise</strong> : News, recrutements, levées de fonds
                      </li>
                      <li>
                        ☐ <strong>Google Alerts</strong> : Mentions récentes dans la presse
                      </li>
                      <li>
                        ☐ <strong>Réseaux sociaux</strong> : Activité, centres d'intérêt
                      </li>
                      <li>
                        ☐ <strong>Entreprise</strong> : Croissance, défis sectoriels, concurrents
                      </li>
                    </ul>
                  </div>

                  <h4 className="text-lg font-medium mb-3">ÉTAPE 2 : STRUCTURE D'APPEL OPTIMISÉE</h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">PHASE 1 : ACCROCHE PERSONNALISÉE (10-15 secondes)</h5>
                      <div className="bg-white rounded p-3 font-mono text-sm">
                        "Bonjour [Prénom], [Votre prénom] de Simple Sales.
                        <br />
                        J'ai vu que [référence spécifique récente].
                        <br />
                        Avez-vous 30 secondes ?"
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">PHASE 2 : PERMISSION ET CONTEXTE (10 secondes)</h5>
                      <div className="bg-white rounded p-3 font-mono text-sm">
                        "Je contacte des [persona] comme vous car nous aidons
                        <br />
                        [type d'entreprises] à [bénéfice principal]."
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">PHASE 3 : VALEUR ET PREUVE (20-25 secondes)</h5>
                      <div className="bg-white rounded p-3 font-mono text-sm">
                        "Par exemple, [Entreprise similaire] a [résultat chiffré]
                        <br />
                        en [durée] grâce à notre approche.
                        <br />
                        Cela vous semble pertinent pour [Entreprise prospect] ?"
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">PHASE 4 : ENGAGEMENT SOFT (5-10 secondes)</h5>
                      <div className="bg-white rounded p-3 font-mono text-sm">
                        "Seriez-vous intéressé par un échange de 15 minutes
                        <br />
                        cette semaine pour voir comment ça pourrait s'appliquer ?"
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-3">📝 Scripts Sectoriels Haute Performance</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium mb-2">SCRIPT SaaS B2B</h5>
                      <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                        "Bonjour [Prénom], [Votre nom] de Simple Sales.
                        <br />
                        J'ai vu que vous recrutiez 3 commerciaux ce trimestre sur LinkedIn.
                        <br />
                        <br />
                        Avez-vous 30 secondes ?<br />
                        <br />
                        Je contacte des directeurs commerciaux SaaS comme vous car nous aidons
                        <br />
                        les scale-ups à réduire de 40% le temps d'onboarding des nouvelles recrues.
                        <br />
                        <br />
                        Par exemple, [Client SaaS] est passé de 6 mois à 3,5 mois pour rendre
                        <br />
                        un commercial productif, ce qui leur a fait économiser 180k€ cette année.
                        <br />
                        <br />
                        Cela vous semble pertinent pour accélérer la montée en compétences
                        <br />
                        de vos nouvelles recrues ?"
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium mb-2">SCRIPT INDUSTRIE/MANUFACTURING</h5>
                      <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                        "Bonjour [Prénom], [Votre nom] de Simple Sales.
                        <br />
                        J'ai lu l'article sur vos nouveaux investissements industriels dans [Publication].
                        <br />
                        <br />
                        Avez-vous 30 secondes ?<br />
                        <br />
                        Je contacte des directeurs commerciaux industrie car nous aidons
                        <br />
                        les équipements à adapter leur approche commerciale aux nouveaux enjeux digitaux.
                        <br />
                        <br />
                        Par exemple, [Client Industrie] a augmenté son taux de closing de 23% à 38%
                        <br />
                        en modernisant sa prospection, générant 2,3M€ de CA additionnel.
                        <br />
                        <br />
                        Cela vous intéresserait de découvrir comment adapter votre approche
                        <br />
                        aux nouveaux comportements d'achat ?"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Selling section */}
                <div id="social-selling" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">💼 Social Selling Avancé : LinkedIn au Maximum</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3">🎯 Votre Défi de Management</h3>
                    <p className="leading-relaxed">
                      87% de vos commerciaux utilisent LinkedIn, mais seulement 23% génèrent des RDV qualifiés via ce
                      canal. Le problème ? Ils appliquent des méthodes obsolètes sur une plateforme qui a évolué.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">📈 Les 5 Étapes du Social Selling Moderne</h3>

                  <h4 className="text-lg font-medium mb-3">ÉTAPE 1 : OPTIMISATION PROFIL COMMERCIAL</h4>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="font-medium mb-3">Checklist Profil LinkedIn Haute Performance :</p>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Photo de profil :</p>
                        <ul className="space-y-1 text-sm">
                          <li>☐ Photo professionnelle haute qualité (minimum 400×400 pixels)</li>
                          <li>☐ Sourire authentique et regard direct</li>
                          <li>☐ Tenue adaptée à votre secteur d'activité</li>
                          <li>☐ Arrière-plan neutre ou bureau professionnel</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Titre professionnel (120 caractères) :</p>
                        <div className="bg-white rounded p-3 space-y-2 text-sm">
                          <p className="text-red-600">❌ "Directeur Commercial chez [Entreprise]"</p>
                          <p className="text-green-600">
                            ✅ "J'aide les [persona] à [bénéfice principal] | +[X]% de résultats | [Secteur]"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-3">ÉTAPE 2 : STRATÉGIE DE CONTENU SOCIAL SELLING</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-3 text-left">Jour</th>
                          <th className="border border-gray-200 p-3 text-left">Type</th>
                          <th className="border border-gray-200 p-3 text-left">Objectif</th>
                          <th className="border border-gray-200 p-3 text-left">Exemple</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Lundi</td>
                          <td className="border border-gray-200 p-3">Insight marché</td>
                          <td className="border border-gray-200 p-3">Thought leadership</td>
                          <td className="border border-gray-200 p-3">"3 tendances qui transforment la vente B2B"</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Mardi</td>
                          <td className="border border-gray-200 p-3">Conseil pratique</td>
                          <td className="border border-gray-200 p-3">Valeur ajoutée</td>
                          <td className="border border-gray-200 p-3">"5 erreurs qui tuent votre prospection"</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Mercredi</td>
                          <td className="border border-gray-200 p-3">Case study</td>
                          <td className="border border-gray-200 p-3">Social proof</td>
                          <td className="border border-gray-200 p-3">"Comment [Client] a doublé ses ventes"</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Jeudi</td>
                          <td className="border border-gray-200 p-3">Contenu personnel</td>
                          <td className="border border-gray-200 p-3">Humanisation</td>
                          <td className="border border-gray-200 p-3">"L'erreur qui m'a coûté 100k€"</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">Vendredi</td>
                          <td className="border border-gray-200 p-3">Question engagement</td>
                          <td className="border border-gray-200 p-3">Interaction</td>
                          <td className="border border-gray-200 p-3">"Quel est votre plus gros défi commercial ?"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-lg font-medium mb-3">ÉTAPE 3 : SÉQUENCES DE CONNEXION HAUTE CONVERSION</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">Jour 1 : Engagement préalable</p>
                      <p className="text-sm text-gray-700">Action : Liker + commenter 2-3 posts récents</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">Jour 3 : Demande de connexion</p>
                      <div className="bg-gray-50 rounded p-3 mt-2 text-sm font-mono">
                        "Bonjour [Prénom], votre récent post sur [sujet spécifique]
                        <br />
                        m'a particulièrement intéressé. J'accompagne des [persona]
                        <br />
                        sur des enjeux similaires. Connectons-nous !"
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">Jour 6 : Message de remerciement + valeur</p>
                      <div className="bg-gray-50 rounded p-3 mt-2 text-sm font-mono">
                        "Bonjour [Prénom],
                        <br />
                        <br />
                        Merci d'avoir accepté ma connexion !<br />
                        <br />
                        J'ai vu que vous travaillez sur [enjeu identifié].
                        <br />
                        C'est un défi que rencontrent beaucoup de [persona].
                        <br />
                        <br />
                        J'ai récemment aidé [Entreprise similaire] à [résultat concret]
                        <br />
                        sur cette problématique.
                        <br />
                        <br />
                        Cela vous intéresserait-il d'échanger 15 minutes sur votre approche ?"
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI and Automation section */}
                <div id="ai-automation" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">🤖 IA et Automation : Multiplier votre Efficacité</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3">🎯 Votre Défi de Management</h3>
                    <p className="leading-relaxed">
                      Vos commerciaux passent 3h/jour sur des tâches répétitives (recherche prospects, rédaction emails,
                      suivi) au lieu de vendre. L'IA peut automatiser 70% de ces tâches.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">🧠 Stack IA pour la Prospection Moderne</h3>

                  <h4 className="text-lg font-medium mb-3">NIVEAU 1 : IA GÉNÉRATIVE POUR LA PERSONNALISATION</h4>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="font-medium mb-3">Prompt de Génération d'Emails :</p>
                    <div className="bg-white rounded p-4 font-mono text-sm">
                      Tu es un expert en prospection B2B.
                      <br />
                      <br />
                      Contexte :<br />- Prospect : [Nom], [Fonction] chez [Entreprise]
                      <br />- Secteur : [Secteur]
                      <br />- Trigger : [Événement récent]
                      <br />- Mon offre : [Description courte]
                      <br />
                      <br />
                      Génère un email de prospection de 150 mots max :<br />- Objet accrocheur (8 mots max)
                      <br />- Personnalisation authentique
                      <br />- Valeur ajoutée immédiate
                      <br />- CTA soft pour RDV
                      <br />- Ton professionnel mais humain
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-3">NIVEAU 2 : AUTOMATION DES SÉQUENCES</h4>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="font-medium mb-3">Workflow Outreach.io/Apollo Optimisé :</p>
                    <div className="space-y-3 text-sm">
                      <div className="border-l-4 border-amber-500 pl-3">
                        <p className="font-medium">JOUR 1 : Email #1</p>
                        <p className="text-gray-700">Template : Introduction + Valeur</p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-3">
                        <p className="font-medium">JOUR 4 : LinkedIn Connect</p>
                        <p className="text-gray-700">Template : Connexion personnalisée</p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-3">
                        <p className="font-medium">JOUR 7 : Appel Téléphonique</p>
                        <p className="text-gray-700">Script : Cold call structuré</p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-3">
                        <p className="font-medium">JOUR 14 : Email #3</p>
                        <p className="text-gray-700">Template : Break-up email</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-3">🛠️ Outils d'Automation Recommandés</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium mb-3">POUR PME (1-10 commerciaux)</h5>
                      <ul className="space-y-2 text-sm">
                        <li>☐ Apollo.io : Prospection + enrichissement (99€/mois)</li>
                        <li>☐ ChatGPT Plus : Génération contenu (20€/mois)</li>
                        <li>☐ Calendly : Prise RDV automatique (10€/mois)</li>
                        <li>☐ Zapier : Automatisations simples (20€/mois)</li>
                      </ul>
                      <p className="mt-3 font-medium text-amber-600">Budget : 149€/mois</p>
                      <p className="text-sm text-gray-700">ROI : +200% efficacité prospection</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium mb-3">POUR ETI (11-50 commerciaux)</h5>
                      <ul className="space-y-2 text-sm">
                        <li>☐ Outreach.io : Séquences multicanales (100€/user/mois)</li>
                        <li>☐ ZoomInfo : Base prospects premium (200€/mois)</li>
                        <li>☐ Gong : Conversation intelligence (120€/user/mois)</li>
                        <li>☐ HubSpot Sales : CRM + automation (45€/user/mois)</li>
                      </ul>
                      <p className="mt-3 font-medium text-amber-600">Budget : 265€/user/mois</p>
                      <p className="text-sm text-gray-700">ROI : +300% efficacité + prédictibilité</p>
                    </div>
                  </div>
                </div>

                {/* Multichannel Orchestration section */}
                <div id="multichannel" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">📊 Orchestration Multicanale Avancée</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-3">🎯 Votre Défi de Management</h3>
                    <p className="leading-relaxed">
                      Vos commerciaux utilisent email OU téléphone OU LinkedIn, mais rarement les 3 de manière
                      coordonnée. L'orchestration multicanale peut augmenter vos taux de réponse de 300%.
                    </p>
                  </div>

                  <h3 className="text-xl font-medium mb-4">📈 Stratégie d'Orchestration 360°</h3>

                  <h4 className="text-lg font-medium mb-3">Cadence Optimale 21 Jours / 8 Touches</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-3 text-left">Jour</th>
                          <th className="border border-gray-200 p-3 text-left">Canal</th>
                          <th className="border border-gray-200 p-3 text-left">Action</th>
                          <th className="border border-gray-200 p-3 text-left">Objectif</th>
                          <th className="border border-gray-200 p-3 text-left">Temps</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J1</td>
                          <td className="border border-gray-200 p-3">Email</td>
                          <td className="border border-gray-200 p-3">Introduction + valeur</td>
                          <td className="border border-gray-200 p-3">Première impression</td>
                          <td className="border border-gray-200 p-3">5 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J3</td>
                          <td className="border border-gray-200 p-3">LinkedIn</td>
                          <td className="border border-gray-200 p-3">Connexion personnalisée</td>
                          <td className="border border-gray-200 p-3">Élargir contact</td>
                          <td className="border border-gray-200 p-3">3 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J5</td>
                          <td className="border border-gray-200 p-3">Téléphone</td>
                          <td className="border border-gray-200 p-3">Cold call structuré</td>
                          <td className="border border-gray-200 p-3">Interaction directe</td>
                          <td className="border border-gray-200 p-3">10 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J8</td>
                          <td className="border border-gray-200 p-3">Email</td>
                          <td className="border border-gray-200 p-3">Ressource utile</td>
                          <td className="border border-gray-200 p-3">Apporter valeur</td>
                          <td className="border border-gray-200 p-3">3 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J11</td>
                          <td className="border border-gray-200 p-3">LinkedIn</td>
                          <td className="border border-gray-200 p-3">Message (si connecté)</td>
                          <td className="border border-gray-200 p-3">Engagement social</td>
                          <td className="border border-gray-200 p-3">3 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J14</td>
                          <td className="border border-gray-200 p-3">Email</td>
                          <td className="border border-gray-200 p-3">Social proof</td>
                          <td className="border border-gray-200 p-3">Créer confiance</td>
                          <td className="border border-gray-200 p-3">3 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J17</td>
                          <td className="border border-gray-200 p-3">Téléphone</td>
                          <td className="border border-gray-200 p-3">Appel de suivi</td>
                          <td className="border border-gray-200 p-3">Closing soft</td>
                          <td className="border border-gray-200 p-3">8 min</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-medium">J21</td>
                          <td className="border border-gray-200 p-3">Email</td>
                          <td className="border border-gray-200 p-3">Break-up</td>
                          <td className="border border-gray-200 p-3">Dernier essai</td>
                          <td className="border border-gray-200 p-3">2 min</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Temps total investissement :</strong> 37 minutes par prospect
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Taux de réponse moyen :</strong> 15-25% (vs 3-5% canal unique)
                  </p>
                </div>

                {/* Implementation Plan section */}
                <div id="implementation" className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">🎯 Plan d'Implémentation 90 Jours</h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-xl font-medium mb-3">MOIS 1 : FONDATIONS</h3>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">Semaine 1-2 : Audit et préparation</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Auditer les pratiques actuelles de prospection</li>
                          <li>Définir l'ICP précis par commercial</li>
                          <li>Choisir et configurer les outils d'automation</li>
                          <li>Créer les templates de base</li>
                        </ul>
                        <p className="font-medium mt-3">Semaine 3-4 : Formation et lancement</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Former l'équipe aux nouvelles méthodes</li>
                          <li>Lancer les premières séquences automatisées</li>
                          <li>Mettre en place le reporting</li>
                          <li>Ajuster selon les premiers retours</li>
                        </ul>
                        <p className="mt-3 font-medium text-green-600">
                          Résultats Mois 1 : +25% d'activité prospection, premiers RDV générés
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-xl font-medium mb-3">MOIS 2 : OPTIMISATION</h3>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">Semaine 5-6 : Analyse et amélioration</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Analyser les performances par canal</li>
                          <li>Optimiser les messages les moins performants</li>
                          <li>Développer le social selling LinkedIn</li>
                          <li>Intensifier la personnalisation</li>
                        </ul>
                        <p className="font-medium mt-3">Semaine 7-8 : Montée en puissance</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Augmenter les volumes de prospection</li>
                          <li>Déployer l'orchestration multicanale</li>
                          <li>Former aux techniques avancées</li>
                          <li>Mettre en place le coaching individuel</li>
                        </ul>
                        <p className="mt-3 font-medium text-blue-600">
                          Résultats Mois 2 : +40% de RDV obtenus, amélioration qualité
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <h3 className="text-xl font-medium mb-3">MOIS 3 : EXCELLENCE</h3>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">Semaine 9-10 : Perfectionnement</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Déployer l'IA pour la personnalisation</li>
                          <li>Optimiser les séquences selon les résultats</li>
                          <li>Développer les compétences avancées</li>
                          <li>Mettre en place la mesure fine</li>
                        </ul>
                        <p className="font-medium mt-3">Semaine 11-12 : Pérennisation</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Ancrer les nouvelles habitudes</li>
                          <li>Planifier l'amélioration continue</li>
                          <li>Célébrer les succès obtenus</li>
                          <li>Préparer la phase suivante</li>
                        </ul>
                        <p className="mt-3 font-medium text-amber-600">
                          Résultats Mois 3 : +60% de pipeline généré, process optimisé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study section */}
                <div
                  id="case-study"
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200 p-8 mb-12"
                >
                  <h2 className="text-2xl font-medium mb-6">🏆 Cas Client : Transformation Prospection</h2>

                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-4">Entreprise : InnoTech Solutions (15 commerciaux)</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium mb-3 text-red-600">Situation initiale :</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• 2-3 RDV/commercial/semaine</li>
                          <li>• Taux de réponse email : 1,8%</li>
                          <li>• 80% du temps en prospection manuelle</li>
                          <li>• Pipeline imprévisible</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Résultats 6 mois :</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            • <strong>8-12 RDV/commercial/semaine</strong> (+300%)
                          </li>
                          <li>
                            • <strong>Taux de réponse : 12%</strong> (+567%)
                          </li>
                          <li>
                            • <strong>60% temps prospection automatisé</strong>
                          </li>
                          <li>
                            • <strong>Pipeline prévisible</strong> à 95%
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-3">Méthodes déployées :</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • <strong>Cold calling 3.0</strong> avec scripts sectoriels
                        </li>
                        <li>
                          • <strong>Social selling LinkedIn</strong> structuré
                        </li>
                        <li>
                          • <strong>Automation</strong> avec Outreach.io
                        </li>
                        <li>
                          • <strong>Orchestration multicanale</strong> 8 touches
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 rounded-lg">
                      <p className="text-lg font-medium text-green-800">
                        ROI : Investissement 25k€ → CA additionnel 1,8M€ = <span className="text-2xl">7 200% ROI</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA section */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border-2 border-amber-300 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-4">🚀 Votre Prochaine Étape</h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Vous avez maintenant toutes les méthodes pour transformer votre prospection en machine à pipeline
                    prévisible.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h3 className="text-xl font-medium mb-3">🎯 Option 1 : Vous déployez seul</h3>
                      <ul className="space-y-2 text-sm mb-4">
                        <li>• Utilisez tous les scripts et templates fournis</li>
                        <li>• Suivez le plan d'implémentation 90 jours</li>
                        <li>• Mesurez vos progrès avec les KPIs recommandés</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg border border-amber-300 p-6">
                      <h3 className="text-xl font-medium mb-3">🚀 Option 2 : Vous vous faites accompagner</h3>
                      <ul className="space-y-2 text-sm mb-4">
                        <li>• Audit express gratuit pour identifier vos priorités</li>
                        <li>• Déploiement assisté des méthodes et outils</li>
                        <li>• Formation personnalisée de votre équipe</li>
                        <li>• Garantie de résultats sous 90 jours</li>
                      </ul>
                      <Button asChild className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white">
                        <a href="/audit">📞 Réserver mon audit prospection gratuit</a>
                      </Button>
                      <p className="text-xs text-center mt-2 text-gray-600">
                        Résultat moyen : +150% de RDV générés en 90 jours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deliverables section */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
                  <h2 className="text-2xl font-medium mb-6">📊 Récapitulatif des Livrables Section 2</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                      <p>✅ Scripts cold calling sectoriels (SaaS, Industrie, Services)</p>
                      <p>✅ Templates séquences email (3 emails + variations)</p>
                      <p>✅ Checklist optimisation profil LinkedIn (15 points)</p>
                      <p>✅ Planning éditorial social selling (5 semaines)</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>✅ Workflows automation (Outreach/Apollo/HubSpot)</p>
                      <p>✅ Dashboard performance prospection (Excel avec formules)</p>
                      <p>✅ Plan d'implémentation 90 jours (semaine par semaine)</p>
                      <p>✅ Cas client détaillé avec ROI chiffré</p>
                    </div>
                  </div>
                  <p className="mt-6 font-medium text-center">
                    Cette section transforme la prospection de corvée en science exacte, avec tous les outils pour
                    générer un pipeline prévisible. 🎯
                  </p>
                </div>

                {/* Navigation section */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-medium mb-4">📚 Navigation du Guide</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Link
                      href="/nos-guides"
                      className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                    >
                      ← Retour au Guide Principal
                    </Link>
                    <Link
                      href="/nos-guides/diagnostic-processus-commercial"
                      className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                    >
                      ← Précédent : Diagnostic et Fondamentaux
                    </Link>
                    <Link
                      href="/nos-guides/meddpicc-guide-complet"
                      className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
                    >
                      Suivant : Qualification MEDDPICC →
                    </Link>
                  </div>
                </div>
              </article>

              <div className="hidden lg:block">
                <ProspectionGuideSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
