"use client"
import { GuidePageWrapper } from "@/components/guide-page-wrapper"
import { getCurrentYear, getLastUpdateDate } from "@/lib/date-utils"

function NegociationClientPage() {
  const currentYear = getCurrentYear()
  const lastUpdate = getLastUpdateDate()

  const sections = [
    { id: "defi", title: "Votre Défi" },
    { id: "fondamentaux", title: "Les 3 Fondamentaux" },
    { id: "acrac", title: "Méthode A-CRAC" },
    { id: "objections", title: "Traiter les Objections" },
    { id: "closing", title: "Techniques de Closing" },
    { id: "acceleration", title: "Accélération des Cycles" },
    { id: "implementation", title: "Plan d'Implémentation" },
    { id: "cas-client", title: "Cas Client" },
  ]

  const content = (
    <div className="space-y-16">
      {/* Défi Section */}
      <section id="defi" className="scroll-mt-20">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Votre Défi de Directeur Commercial</h2>
          <p className="text-lg leading-relaxed">
            Vos commerciaux perdent 40% des deals en négociation finale. Ils cèdent trop vite sur le prix, n'arrivent
            pas à créer l'urgence, et laissent les prospects "réfléchir" indéfiniment. Résultat : cycles de vente
            rallongés, marges érodées, et deals perdus face à des concurrents moins chers mais pas meilleurs.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold mb-4">Impact Mesuré</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">-25%</div>
              <p className="text-sm text-gray-600">de marge moyenne perdue en négociation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">+45j</div>
              <p className="text-sm text-gray-600">de cycle de vente rallongé par l'indécision</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-sm text-gray-600">des deals perdus en phase finale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fondamentaux Section */}
      <section id="fondamentaux" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Les 3 Fondamentaux de la Négociation B2B Moderne</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-3">1. Négocier la Valeur, Pas le Prix</h3>
            <p className="mb-4">
              La négociation commence bien avant la discussion tarifaire. Elle se prépare dès la découverte en ancrant
              solidement la valeur perçue.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Principe clé :</p>
              <p className="text-sm">
                Plus la valeur est quantifiée et personnalisée, moins le prix devient un sujet de négociation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-3">2. Créer l'Urgence Légitime</h3>
            <p className="mb-4">
              L'urgence ne se décrète pas, elle se construit en alignant votre solution sur les priorités business du
              prospect et les échéances de son organisation.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Technique :</p>
              <p className="text-sm">
                Liez votre proposition aux objectifs trimestriels, aux projets stratégiques, ou aux contraintes
                réglementaires du prospect.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-3">3. Maîtriser le Closing Consultatif</h3>
            <p className="mb-4">
              Le closing moderne n'est pas une pression de dernière minute, mais une progression naturelle vers la
              décision, jalonnée de micro-engagements.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Approche :</p>
              <p className="text-sm">
                Chaque étape de la vente doit se conclure par un engagement concret du prospect, créant un momentum vers
                la signature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode A-CRAC */}
      <section id="acrac" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">La Méthode A-CRAC : Traiter Toute Objection</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <p className="font-semibold mb-2">Framework Universel</p>
          <p>
            A-CRAC est votre structure de réponse systématique à toute objection. Maîtrisée, elle transforme les
            blocages en opportunités de renforcer la valeur.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Les 5 Étapes A-CRAC</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">A - Accuser Réception</h4>
                <p className="text-sm mb-2">
                  Validez l'objection sans la contester. Montrez que vous l'entendez et la prenez au sérieux.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Exemple :</p>
                  <p className="italic">
                    "Je comprends parfaitement votre préoccupation sur le prix. C'est un point important que nous devons
                    clarifier ensemble."
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">C - Creuser</h4>
                <p className="text-sm mb-2">
                  Posez des questions pour comprendre la vraie nature de l'objection. Souvent, l'objection exprimée
                  cache une préoccupation plus profonde.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Questions types :</p>
                  <ul className="list-disc list-inside space-y-1 italic">
                    <li>"Qu'est-ce qui vous fait dire ça précisément ?"</li>
                    <li>"Par rapport à quoi trouvez-vous que c'est cher ?"</li>
                    <li>"Qu'est-ce qui serait acceptable pour vous ?"</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">R - Reformuler</h4>
                <p className="text-sm mb-2">
                  Reformulez l'objection pour vous assurer que vous l'avez bien comprise et pour montrer votre écoute
                  active.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Exemple :</p>
                  <p className="italic">
                    "Si je comprends bien, votre préoccupation porte sur le ROI à court terme, c'est bien ça ?"
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">A - Argumenter</h4>
                <p className="text-sm mb-2">
                  Apportez une réponse factuelle, personnalisée, et ancrée dans la valeur démontrée lors de la
                  découverte.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Structure :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Rappel de la valeur quantifiée</li>
                    <li>Preuve sociale (cas client similaire)</li>
                    <li>Comparaison coût vs. coût de l'inaction</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">C - Contrôler</h4>
                <p className="text-sm mb-2">
                  Vérifiez que votre réponse a levé l'objection et obtenez un engagement pour avancer.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Questions de contrôle :</p>
                  <ul className="list-disc list-inside space-y-1 italic">
                    <li>"Est-ce que cela répond à votre préoccupation ?"</li>
                    <li>"Y a-t-il autre chose qui vous empêcherait d'avancer ?"</li>
                    <li>"Qu'est-ce qui vous permettrait de prendre une décision ?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objections Prix */}
      <section id="objections" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Traiter l'Objection Prix : Le Guide Complet</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Les 7 Types d'Objections Prix</h3>

            <div className="space-y-6">
              {/* Type 1 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold mb-3">1. "C'est trop cher"</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Accuser réception :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Je comprends que l'investissement vous semble important. C'est une réaction normale face à un
                      projet de cette envergure."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Creuser :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Quand vous dites 'trop cher', par rapport à quoi ? À votre budget initial, à une autre solution,
                      ou au ROI attendu ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">R - Reformuler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Si je comprends bien, vous vous demandez si l'investissement sera rentabilisé assez rapidement,
                      c'est ça ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Argumenter :</p>
                    <p className="text-sm bg-gray-50 p-2 rounded">
                      "Revenons sur les chiffres que nous avons calculés ensemble : vous perdez actuellement [X]€/mois à
                      cause de [problème identifié]. Notre solution vous permet d'économiser [Y]€/mois, soit un ROI en
                      [Z] mois. Le vrai coût, c'est de ne rien faire."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Contrôler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Est-ce que cette perspective change votre vision de l'investissement ?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Type 2 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold mb-3">2. "Votre concurrent est moins cher"</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Accuser réception :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "C'est une bonne chose que vous compariez les offres. C'est exactement ce que je ferais à votre
                      place."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Creuser :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Pour que je comprenne bien la comparaison, qu'est-ce qui est inclus dans leur offre ? Ont-ils les
                      mêmes fonctionnalités que ce dont nous avons parlé ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">R - Reformuler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Donc si je comprends bien, vous avez une offre à [X]€ qui couvre [périmètre], c'est bien ça ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Argumenter :</p>
                    <p className="text-sm bg-gray-50 p-2 rounded">
                      "Comparons précisément. Notre offre inclut [différenciateurs clés] qui ne sont pas dans la leur.
                      Sur votre cas d'usage spécifique [rappel découverte], cela représente [valeur quantifiée]. La
                      vraie question n'est pas 'qui est le moins cher' mais 'qui vous apporte le plus de valeur'."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Contrôler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Maintenant que vous voyez la différence, qu'est-ce qui est le plus important pour vous : le prix
                      d'entrée ou la valeur créée ?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Type 3 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold mb-3">3. "Je n'ai pas le budget"</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Accuser réception :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Je comprends la contrainte budgétaire. C'est une réalité dans toutes les entreprises."
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Creuser :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Quand vous dites 'pas de budget', est-ce qu'il n'y a vraiment aucun budget disponible, ou est-ce
                      que le budget est alloué à d'autres priorités ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">R - Reformuler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Donc si je comprends bien, vous avez un budget mais il est déjà engagé sur d'autres projets,
                      c'est ça ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">A - Argumenter :</p>
                    <p className="text-sm bg-gray-50 p-2 rounded">
                      "Regardons ça différemment. Vous m'avez dit que [problème] vous coûte [X]€/mois. Notre solution se
                      finance donc d'elle-même. La vraie question est : pouvez-vous vous permettre de continuer à perdre
                      cet argent ? Et si on regardait les options de paiement étalé ?"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">C - Contrôler :</p>
                    <p className="text-sm italic bg-gray-50 p-2 rounded">
                      "Si on trouve une solution de financement qui rentre dans votre budget actuel, qu'est-ce qui vous
                      empêcherait d'avancer ?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques de Closing */}
      <section id="closing" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Les 5 Techniques de Closing Consultatives</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">1. Le Closing Présomptif</h3>
            <p className="mb-4">
              Agissez comme si la décision était déjà prise et avancez naturellement vers les étapes suivantes.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Exemples de phrases :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"Quand souhaitez-vous démarrer le déploiement ?"</li>
                <li>"Qui de votre équipe sera notre contact principal ?"</li>
                <li>"Préférez-vous une formation sur site ou en distanciel ?"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">2. Le Closing Alternatif</h3>
            <p className="mb-4">
              Proposez deux options qui mènent toutes deux à la signature, laissant le prospect choisir entre deux
              "oui".
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Exemples :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"Préférez-vous l'offre Standard ou Premium ?"</li>
                <li>"On démarre en janvier ou février ?"</li>
                <li>"Vous voulez payer annuellement ou trimestriellement ?"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">3. Le Closing Récapitulatif</h3>
            <p className="mb-4">
              Résumez tous les points d'accord et la valeur démontrée, puis demandez naturellement la signature.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Structure :</p>
              <p className="text-sm mb-2">
                "Récapitulons ce dont nous avons convenu : [liste des bénéfices validés]. Vous m'avez confirmé que
                [problème] était votre priorité et que notre solution y répond parfaitement. Qu'est-ce qui vous
                empêcherait de démarrer dès maintenant ?"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">4. Le Closing par l'Urgence Légitime</h3>
            <p className="mb-4">
              Créez une raison objective d'agir maintenant, liée aux contraintes business du prospect.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Exemples :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>"Pour atteindre vos objectifs Q1, il faut démarrer avant fin décembre"</li>
                <li>"Notre prochaine session de formation est dans 2 semaines, après c'est dans 2 mois"</li>
                <li>"Le tarif actuel est valable jusqu'à fin du mois"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">5. Le Closing par Micro-Engagements</h3>
            <p className="mb-4">Obtenez une série de petits "oui" qui créent un momentum vers la décision finale.</p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2">Progression type :</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>"Êtes-vous d'accord que [problème] est votre priorité ?" → Oui</li>
                <li>"Notre solution répond-elle à ce besoin ?" → Oui</li>
                <li>"Le ROI vous semble-t-il acceptable ?" → Oui</li>
                <li>"Qu'est-ce qui vous empêche de démarrer ?" → Closing naturel</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Accélération */}
      <section id="acceleration" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Accélération des Cycles de Négociation</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <p className="font-semibold mb-2">Objectif : Réduire de 40% le temps de négociation</p>
          <p>
            En appliquant ces 7 leviers, vous pouvez diviser par deux le temps passé en négociation sans sacrifier la
            qualité de la relation client.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Les 7 Leviers d'Accélération</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">1. Qualification MEDDPICC Rigoureuse</h4>
                <p className="text-sm mb-2">
                  Ne négociez qu'avec des prospects qualifiés qui ont le budget, l'autorité, et l'urgence.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Checklist avant négociation :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Budget confirmé et disponible</li>
                    <li>Decision Maker identifié et impliqué</li>
                    <li>Decision Process cartographié</li>
                    <li>Champion interne actif</li>
                    <li>Urgence business validée</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">2. Mutual Action Plan (MAP)</h4>
                <p className="text-sm mb-2">
                  Co-construisez un plan d'action partagé avec des jalons et des responsables identifiés.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Éléments du MAP :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dates clés et deadlines</li>
                    <li>Responsables côté client et vendeur</li>
                    <li>Livrables attendus à chaque étape</li>
                    <li>Critères de validation</li>
                    <li>Date de signature cible</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">3. Gestion Proactive des Stakeholders</h4>
                <p className="text-sm mb-2">
                  Identifiez et impliquez tous les décideurs dès le début pour éviter les surprises tardives.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Actions :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Cartographie complète des stakeholders</li>
                    <li>Rendez-vous avec chaque décideur clé</li>
                    <li>Identification des objections potentielles</li>
                    <li>Création de champions internes</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">4. Anticipation Juridique et Contractuelle</h4>
                <p className="text-sm mb-2">
                  Envoyez le contrat tôt dans le processus pour identifier les points de blocage juridiques.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Timeline :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Semaine 1 : Envoi du contrat type pour review</li>
                    <li>Semaine 2 : Identification des clauses problématiques</li>
                    <li>Semaine 3 : Négociation des ajustements</li>
                    <li>Semaine 4 : Contrat finalisé, prêt à signer</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">5. Création d'Urgence Légitime</h4>
                <p className="text-sm mb-2">
                  Liez votre proposition aux échéances business du prospect, pas à vos quotas.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Sources d'urgence :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Objectifs trimestriels du prospect</li>
                    <li>Projets stratégiques en cours</li>
                    <li>Contraintes réglementaires</li>
                    <li>Fenêtres budgétaires</li>
                    <li>Événements business (salon, lancement produit)</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">6. Élimination des Temps Morts</h4>
                <p className="text-sm mb-2">
                  Réduisez les délais entre chaque étape en planifiant systématiquement le prochain rendez-vous.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Règle d'or :</p>
                  <p>Ne jamais quitter un rendez-vous sans avoir fixé le suivant avec un objectif clair.</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold mb-2">7. Closing Conditionnel</h4>
                <p className="text-sm mb-2">Proposez des conditions avantageuses liées à une signature rapide.</p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-semibold mb-1">Exemples :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>"Si vous signez avant fin du mois, je peux inclure [bonus]"</li>
                    <li>"En démarrant maintenant, vous bénéficiez de [avantage timing]"</li>
                    <li>"Notre prochaine session de formation est dans 2 semaines"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan d'Implémentation */}
      <section id="implementation" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Plan d'Implémentation : 90 Jours</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Mois 1 : Formation et Cadrage</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">Semaine 1-2</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Formation A-CRAC</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Session théorique de 3h sur la méthode</li>
                    <li>Ateliers pratiques par type d'objection</li>
                    <li>Jeux de rôle enregistrés et débriefés</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">Semaine 3-4</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Techniques de Closing</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Formation aux 5 techniques consultatives</li>
                    <li>Création de scripts personnalisés</li>
                    <li>Mise en situation sur deals réels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Mois 2 : Déploiement et Coaching</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">Semaine 5-6</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Application Terrain</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Chaque commercial applique sur 3 deals minimum</li>
                    <li>Coaching individuel hebdomadaire</li>
                    <li>Partage des best practices en équipe</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">Semaine 7-8</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Optimisation</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Analyse des premiers résultats</li>
                    <li>Ajustement des scripts et techniques</li>
                    <li>Formation complémentaire si besoin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Mois 3 : Ancrage et Mesure</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">
                  Semaine 9-12
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Ritualisation</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Intégration dans les process de vente</li>
                    <li>Création de playbooks personnalisés</li>
                    <li>Mesure des KPIs de négociation</li>
                    <li>Certification des commerciaux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">KPIs à Suivre</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">Efficacité Négociation</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Taux de conversion en phase finale</li>
                <li>Durée moyenne de négociation</li>
                <li>Taux de remise moyen accordé</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Qualité Closing</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Nombre d'objections par deal</li>
                <li>Taux de deals "no decision"</li>
                <li>Satisfaction client post-signature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas Client */}
      <section id="cas-client" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Cas Client : SaaS B2B</h2>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Contexte</h3>
            <p className="text-gray-700">
              Éditeur SaaS B2B, 15 commerciaux, cycle de vente moyen de 90 jours. Problématique : 45% des deals perdus
              en phase finale, taux de remise moyen de 22%, cycles de négociation de 30 jours en moyenne.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Actions Mises en Place</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-semibold text-sm">1</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Formation A-CRAC Intensive</p>
                  <p className="text-sm text-gray-700">
                    2 jours de formation avec jeux de rôle sur les 10 objections les plus fréquentes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-semibold text-sm">2</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Playbook de Closing</p>
                  <p className="text-sm text-gray-700">
                    Création de scripts personnalisés pour chaque technique de closing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-semibold text-sm">3</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Coaching Hebdomadaire</p>
                  <p className="text-sm text-gray-700">1h/semaine de coaching individuel sur les deals en cours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-semibold text-sm">4</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Mutual Action Plans</p>
                  <p className="text-sm text-gray-700">Systématisation des MAP sur tous les deals &gt; 20K€</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-bold mb-4">Résultats après 6 Mois</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">+28%</div>
                <p className="text-sm">de taux de conversion en phase finale</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
                <p className="text-sm">de durée de négociation (18j vs 30j)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">-35%</div>
                <p className="text-sm">de taux de remise moyen (14% vs 22%)</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-green-200">
              <p className="font-semibold mb-2">Impact Business</p>
              <p className="text-sm">
                +1,2M€ de CA additionnel sur 6 mois grâce à l'amélioration du taux de conversion et à la réduction des
                remises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return (
    <GuidePageWrapper
      title={`Négociation Commerciale B2B ${currentYear}`}
      subtitle="Méthodes Avancées + Closing"
      category="Négociation"
      sections={sections}
      previousGuide={{
        href: "/nos-guides/meddpicc-guide-complet",
        title: "MEDDPICC",
      }}
      nextGuide={{
        href: "/nos-guides/technologies-commerciales-2024",
        title: "Technologies",
      }}
    >
      {content}
    </GuidePageWrapper>
  )
}

export default NegociationClientPage
