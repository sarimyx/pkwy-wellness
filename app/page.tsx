import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <Pricing />
      {/* TODO: */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}
