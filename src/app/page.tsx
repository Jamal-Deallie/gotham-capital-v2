import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import Clients from '@/containers/Clients';
import CEOSpotlight from '@/containers/CEOSpotlight';
import InvestmentCategories from '@/containers/InvestmentCategories';
import InsightsPreview from '@/containers/InsightsPreview';
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Clients />
      <CEOSpotlight />
      <InvestmentCategories />
      <InsightsPreview />
    </>
  );
}
