# Portfolio Antoine Fourneyron

Ce dépôt contient le code source de mon portfolio personnel, accessible à l'adresse [https://afon300.github.io/](https://afon300.github.io/).

## 🚀 Technologies utilisées

- **React** avec **TypeScript**
- **Vite** pour le build
- **Tailwind CSS** pour le stylage
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **Recharts** pour les visualisations de données

## 🛠️ Développement local

Pour lancer le projet localement :

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 📦 Déploiement

Le site est automatiquement déployé sur **GitHub Pages** via une GitHub Action (`.github/workflows/deploy.yml`) à chaque push sur la branche `main`.

### Configuration de GitHub Pages

Pour que le déploiement automatique fonctionne, assurez-vous que :
1. Allez dans **Settings** > **Pages** sur votre dépôt GitHub.
2. Sous **Build and deployment** > **Source**, sélectionnez **GitHub Actions**.

## 📁 Structure du projet

- `src/` : Code source React.
- `src/data/portfolio.ts` : Contient toutes les données textuelles du portfolio (facile à modifier).
- `public/` : (Si présent) Assets statiques.
- `index.html` : Point d'entrée principal.
- `CV.pdf` : Mon CV accessible en téléchargement.
