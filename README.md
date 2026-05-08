# 🚀 Mon Portfolio — Astro

Portfolio personnel construit avec **Astro**, **Tailwind CSS** et un système de gestion de projets en **Markdown**.

## ✨ Fonctionnalités

- ⚡ **Ultra rapide** — Astro génère du HTML statique, zéro JS par défaut (Lighthouse 100/100)
- 📝 **Projets en Markdown** — Ajoute un projet en créant un simple fichier `.md`
- 🎨 **Design moderne** — Grid background animé, mode sombre, animations fluides
- 📱 **Responsive** — Mobile, tablette, desktop
- 🔍 **SEO-ready** — Meta tags, Open Graph, sitemap
- 🌐 **Déploiement facile** — Compatible GitHub Pages, Vercel, Netlify, Cloudflare Pages

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:4321)
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📝 Ajouter un projet

C'est ridiculement simple ! Crée un nouveau fichier dans `src/content/projects/`,
par exemple `src/content/projects/mon-super-projet.md` :

```markdown
---
title: "Mon Super Projet"
description: "Une description courte et percutante."
date: 2025-05-01
tags: ["React", "Node.js"]
image: "/projects/mon-projet.jpg"  # optionnel
github: "https://github.com/..."   # optionnel
demo: "https://demo.com"           # optionnel
featured: true                     # optionnel - met le projet en haut
status: "completed"                # completed | in-progress | archived
---

## Description longue

Ici tu peux écrire **tout ce que tu veux en Markdown**.

- Liste à puces
- Code blocks
- Images
- Liens, etc.

Le contenu sera affiché sur la page dédiée du projet (`/projects/mon-super-projet`).
```

C'est tout ! Le projet apparaîtra automatiquement sur la home page,
trié par date (les plus récents en premier, avec les `featured` au top).

## 🎨 Personnalisation

| Élément | Fichier à modifier |
|---|---|
| Nom, titre, infos perso | `src/components/Hero.astro`, `Navbar.astro`, `About.astro` |
| Email, réseaux sociaux | `src/components/Contact.astro` |
| Couleurs / fonts | `tailwind.config.mjs` |
| Style du grid background | `src/styles/global.css` (section `.grid-background`) |
| Schéma des projets | `src/content/config.ts` |

## 📦 Structure du projet

```
portfolio/
├── public/                    # Fichiers statiques (images, favicon, CV...)
├── src/
│   ├── components/            # Composants Astro
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro     # Liste des projets (auto)
│   │   ├── ProjectCard.astro
│   │   └── Contact.astro
│   ├── content/
│   │   ├── config.ts          # Schéma des projets (Zod)
│   │   └── projects/          # 👈 Tes projets en .md ICI
│   │       ├── projet-1.md
│   │       └── projet-2.md
│   ├── layouts/
│   │   └── Layout.astro       # Layout de base + grid background
│   ├── pages/
│   │   ├── index.astro        # Page d'accueil
│   │   └── projects/
│   │       └── [...slug].astro # Page détail d'un projet
│   └── styles/
│       └── global.css         # Styles globaux + grid background
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Déploiement

### Vercel (recommandé)
1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com), importe le repo
3. Deploy ✅

### GitHub Pages
1. Décommente les lignes `site` et `base` dans `astro.config.mjs`
2. Active GitHub Pages dans les settings du repo (Source: GitHub Actions)
3. Crée `.github/workflows/deploy.yml` (Astro fournit un template officiel)

### Netlify / Cloudflare Pages
Connecte ton repo, build command : `npm run build`, output : `dist/`.

## 📄 Licence

MIT — Fais-en ce que tu veux !
