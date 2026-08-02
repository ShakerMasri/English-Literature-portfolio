import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { ghazalMasriPortfolio } from "@/portfolio/clients/ghazal-masri";

export default function Home() {
  return <PortfolioPage portfolio={ghazalMasriPortfolio} />;
}
