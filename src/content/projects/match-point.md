---
title: "Match Point"
description: "Un quiz tennis en grille 3×3, contre la montre."
date: 2026-05-11
image: "../../assets/projects/match_point.png"
github: "https://github.com/tonusername/match-point"
demo: "https://match-point-green.vercel.app/"
featured: true
status: "completed"
techStack:
    - siHtml5
    - siCss3
    - siJavascript
---

## Le projet

Match Point part d'une idée simple : croiser un quiz tennis avec une mécanique
façon Tetris. Un nom de joueur s'affiche, et il faut trouver une caractéristique
qui le décrit dans une grille de 9 cases (nationalité, titres en Grand Chelem,
gaucher, revers à une main...). Compléter une ligne entière la fait disparaître
et libère trois nouvelles cases. 1m30 au compteur pour faire le meilleur score.

## Fonctionnalités

-   🎾 Grille 3×3 dynamique avec rotation des attributs
-   ⏱️ Timer de 1m30 avec alerte visuelle dans les 10 dernières secondes
-   🔥 Système de combo qui multiplie les points sur les bonnes réponses enchaînées
-   📈 Bonus de 500 points par ligne complétée
-   🎨 Direction artistique terre battue, typographie éditoriale

## Stack technique

Pas de framework, pas de build : du HTML, du CSS et des modules ES natifs.
Je voulais voir jusqu'où on pouvait aller en restant sur du vanilla bien
architecturé.

L'organisation suit une séparation logique / présentation stricte :
un dossier `core/` qui ne touche jamais au DOM (testable en Node), un dossier
`ui/` qui s'abonne aux événements émis par le moteur, et un event bus
minimaliste pour faire communiquer les deux sans couplage direct.

## Ce que j'en ai retiré

Le découpage par événements m'a évité pas mal de spaghetti — au début j'avais
tout dans un seul fichier, et chaque nouvelle feature commençait à s'emmêler
avec le reste. Reprendre l'architecture m'a forcé à clarifier ce qui était
vraiment de la logique métier et ce qui était de l'affichage.

L'autre point intéressant, c'était de constituer la base de joueurs : trouver
le bon niveau de granularité pour les attributs (assez généraux pour matcher
plusieurs joueurs, assez spécifiques pour rester discriminants).
