# Antoine Fourneyron's Portfolio

This repository contains the source code for my personal portfolio, available at [https://afon300.github.io/](https://afon300.github.io/).

## 🚀 Technologies Used

- **React** with **TypeScript**
- **Vite** for building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Recharts** for data visualizations

## 🛠️ Local Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment

The site is automatically deployed to **GitHub Pages** via a GitHub Action (`.github/workflows/deploy.yml`) on every push to the `main` branch.

### GitHub Pages Configuration

For automatic deployment to work, ensure that:
1. Go to **Settings** > **Pages** on your GitHub repository.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

## 📁 Project Structure

- `src/`: React source code.
- `src/data/portfolio.ts`: Contains all textual data for the portfolio (easy to modify).
- `public/`: Static assets.
- `index.html`: Main entry point.
- `CV.pdf`: My CV available for download.
