# Site QCM d'Économie

Ce site web héberge une application de Quiz à Choix Multiples (QCM) interactif axée sur l'économie. Les questions sont basées sur une série de documents de cours et visent à aider les utilisateurs à réviser et à tester leur compréhension des concepts économiques.

## Fonctionnalités

* **Interface de Quiz Interactive :** Interface conviviale pour répondre aux questions.
* **Plusieurs Modes de Test :**
    * **Test Léger :** Un quiz plus court avec 20 questions, principalement issues de `data.json`.
    * **Test Complet :** Un quiz complet avec 50 questions, puisant dans toutes les sources de questions disponibles (`data.json` et `data2.json`).
* **Suivi de la Progression :** Barre de progression visuelle et texte indiquant le numéro de la question actuelle.
* **Feedback Instantané :** Retour immédiat indiquant si une réponse est correcte ou incorrecte.
* **Résumé des Résultats :** Affiche le score total, le pourcentage de réponses correctes et une revue détaillée de chaque question avec la réponse de l'utilisateur et la bonne réponse.
* **Design Adaptatif (Responsive) :** S'adapte à différentes tailles d'écran (adaptabilité de base via les media queries dans `style.css`).
* **Chargement Dynamique des Questions :** Les questions sont récupérées depuis des fichiers JSON.
* **Mode Sombre/Clair :** Le style s'adapte au thème de couleurs préféré de l'utilisateur.

## Structure des Fichiers

Le projet est organisé comme suit :

* `index.html` : Le fichier HTML principal qui structure la page web et l'interface du quiz.
* `style.css` : Contient toutes les règles CSS pour la mise en forme du site, y compris les thèmes clair et sombre, et l'adaptabilité.
* `script.js` : Le fichier JavaScript principal qui gère la logique du quiz. Cela inclut :
    * La récupération des questions depuis `data.json` et `data2.json`.
    * L'initialisation et la gestion de l'état du quiz (question actuelle, score).
    * L'affichage des questions et des options.
    * La gestion des réponses de l'utilisateur et la fourniture de feedback.
    * Le calcul et l'affichage des résultats.
    * La mise à jour de la barre de progression.
* `data.json` : Un fichier JSON contenant un ensemble principal de questions de quiz, chacune avec un identifiant, le texte de la question, les options à choix multiples, la bonne réponse et le fichier PDF source.
* `data2.json` : Un fichier JSON supplémentaire contenant d'autres questions de quiz, suivant la même structure que `data.json`. Cela permet d'avoir un plus grand nombre de questions pour le "Test Complet".
* `economie/data/` (répertoire) : Ce répertoire contient les documents sources pour les questions du quiz, principalement au format PDF. Ceux-ci incluent :
    * `1_1_Eléments_introductifs-6.pdf`
    * `1_2_Introduction_à_la_macroéconomie-3.pdf`
    * `2__Introduction_à_la_microéconomie-2.pdf`
    * `3_1_La_croissance_économique-3.pdf`
    * `3_2_La_concurrence-3.pdf`
    * `4__Le_cycle_d_affaires-3.pdf`
    * `5__La_monnaie-2.pdf`
    * `6__L_économie_ouverte_et_publique-3.pdf`
    * `7__L_économie_numérique-2.pdf`
    * `fiches_eco1-combiné.pdf` (Fiches de révision)
    * `QCM_blanc_S2_23_24.pdf` (QCM d'entraînement)
    * `QCM_de_Revisions___Economie.pdf` (QCM de révisions)
    * `QCM_Final_S2_23_24-3.pdf` (QCM final)

## Fonctionnement

1.  Lorsque la page `index.html` se charge, `script.js` est exécuté.
2.  Le script récupère les questions depuis `data.json` et `data2.json`.
3.  L'utilisateur peut choisir entre un "Test Léger" ou un "Test Complet".
4.  En fonction du choix, un ensemble de questions est sélectionné (mélangées aléatoirement et tronquées au nombre défini de questions pour le mode choisi).
5.  Le quiz commence, affichant une question à la fois.
6.  L'utilisateur sélectionne une option.
7.  Le script fournit un feedback immédiat, met à jour le score et met en évidence la bonne réponse.
8.  L'utilisateur clique sur "Question Suivante" (ou "Voir les Résultats" pour la dernière question) pour continuer.
9.  La progression est indiquée par une barre de progression et du texte.
10. Une fois toutes les questions répondues, la section des résultats s'affiche avec le score, le pourcentage et un résumé des réponses.
11. L'utilisateur peut alors choisir de recommencer et de passer un autre test.

## Pour Utiliser

Ouvrez simplement le fichier `index.html` dans un navigateur web. Assurez-vous que tous les fichiers associés (`style.css`, `script.js`, `data.json`, `data2.json`) se trouvent dans le même répertoire ou que leurs chemins sont correctement référencés.

## Améliorations Possibles

* Gestion des erreurs plus robuste pour le chargement des fichiers.
* Mise en forme et animations plus avancées.
* Comptes utilisateurs et persistance des scores.
* Catégorisation des questions et possibilité de choisir des quiz par sujet.
* Chronomètre pour les quiz.
* Analyses plus détaillées des performances.