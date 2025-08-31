import { Separator } from '@/components/decoration/separator';
import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';

export default function Home() {
  return (
    <div className="space-y-4 py-4">
      <Hero />
      <Separator />
      <Pricing />
      {/* TODO: */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}
