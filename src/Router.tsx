import { useState, useEffect } from 'react';
import { navigate, currentRoute } from '@/hooks/useHashRoute';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BusinessTypes } from '@/components/BusinessTypes';
import { FeaturedWork } from '@/components/FeaturedWork';
import { WhyWebora } from '@/components/WhyWebora';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/ui';
import { InteriorsDemo } from '@/components/demos/InteriorsDemo';
import { DentalDemo } from '@/components/demos/DentalDemo';
import { CaDemo } from '@/components/demos/CaDemo';
import { RealEstateDemo } from '@/components/demos/RealEstateDemo';

const DEMOS: Record<string, React.ReactNode> = {
  '/demos/interiors': <InteriorsDemo />,
  '/demos/dental': <DentalDemo />,
  '/demos/ca': <CaDemo />,
  '/demos/real-estate': <RealEstateDemo />,
};

export function Router() {
  const [route, setRoute] = useState(currentRoute());

  useEffect(() => {
    const onHash = () => setRoute(currentRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Demo route
  if (DEMOS[route]) {
    return (
      <>
        {DEMOS[route]}
        <WhatsAppFab />
      </>
    );
  }

  // Home / landing
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BusinessTypes />
        <FeaturedWork />
        <WhyWebora />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export { navigate };
