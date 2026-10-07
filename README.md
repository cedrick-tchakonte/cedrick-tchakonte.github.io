# Portfolio de Cedrick Tchakonte

[![Site](https://img.shields.io/website?url=https%3A%2F%2Fcedrick-tchakonte.github.io&label=site&up_color=green)](https://cedrick-tchakonte.github.io/)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-informational?logo=typescript)
![License](https://img.shields.io/github/license/cedrick-tchakonte/cedrick-tchakonte.github.io?color=blue)

Code source de mon portfolio, en ligne en [anglais](https://cedrick-tchakonte.github.io/) et en [français](https://cedrick-tchakonte.github.io/fr/).

> « Pas besoin d'être un génie, il suffit d'être curieux. »

## Qui je suis

Élève ingénieur en dernière année à l'**ENSTA Paris** (Institut Polytechnique de Paris), spécialisé en intelligence artificielle, et inscrit au master **Data Science et Intelligence Artificielle** de l'IP Paris. J'ai travaillé sur des modèles de substitution 3D chez Stellantis, sur la génération de jumeaux numériques chez STMicroelectronics, et je suis aujourd'hui ingénieur IA junior chez RagLogic (Station F).

Je cherche un **stage de recherche de fin d'études de 6 mois en machine learning, à partir de début 2027**, en France ou à l'étranger.

## Contenu du site

| Page | Contenu |
| ---- | ------- |
| À propos | Mon parcours et ce qui m'anime |
| Formation, Certifications | Études à l'ENSTA Paris et à l'IP Paris, certifications |
| Mobilité | Les villes où j'ai étudié et travaillé |
| Expérience, Projets, Compétences | Stages, projets de vision par ordinateur et de ML, outils |
| Bénévolat, Loisirs | Engagement associatif et centres d'intérêt |
| Rêves | Les laboratoires d'IA que je vise et mes prochains objectifs |
| Contact | Formulaire (EmailJS) et coordonnées |

## Stack technique

- **Next.js 15** (pages router) en export statique, **TypeScript**
- **Tailwind CSS** et **Framer Motion** pour le style et les animations
- Site bilingue : les pages anglaises sont à la racine, les pages françaises dans `src/pages/fr/`, et chaque texte est défini en `{ en, fr }`
- Contenu séparé du code : `data/siteMetadata.ts` et `src/content/*.ts`
- **GitHub Pages**, déployé par GitHub Actions

## Développement

```sh
npm install
npm run dev       # serveur de développement sur http://localhost:3000
npm run build     # export statique dans out/
npm start         # sert le dossier out/
```

Le formulaire de contact a besoin de trois variables (voir `.env.example`) : `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` et `NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID`.

## Déploiement

Un `git push` sur `master` lance le workflow `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.

Configuration à faire une seule fois dans les réglages du dépôt :

- *Settings → Pages → Source* : **GitHub Actions** ;
- *Settings → Secrets and variables → Actions* : les trois variables EmailJS ci-dessus.

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-cedrick--tchakonte-blue?logo=linkedin)](https://www.linkedin.com/in/cedrick-tchakonte)
[![Email](https://img.shields.io/badge/Email-tchakontecedrick%40gmail.com-D14836?logo=gmail&logoColor=white)](mailto:tchakontecedrick@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-cedrick--tchakonte.github.io-black)](https://cedrick-tchakonte.github.io/)

Pour parler IA, recherche ou stage, le plus simple est le [formulaire de contact](https://cedrick-tchakonte.github.io/contact/) du site.
