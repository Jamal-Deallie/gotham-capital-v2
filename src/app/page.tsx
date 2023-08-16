import Hero from '@/_containers/Hero';
import Intro from '@/_containers/Intro';
import Clients from '@/_containers/Clients';
import CEOSpotlight from '@/_containers/CEOSpotlight';
import InvestmentCategories from '@/_containers/InvestmentCategories';
import InsightsPreview from '@/_containers/InsightsPreview';
import Contact from '@/_containers/Contact';
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Clients />
      <CEOSpotlight />
      <InvestmentCategories />
      <InsightsPreview />
      <Contact />
    </>
  );
}
