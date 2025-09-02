import { Separator } from '@/components/decoration/separator';
import { Hero } from '@/components/layout/hero';
import { Pricing } from '@/components/pricing/form';

export default function Home() {
  return (
    <div className="space-y-4 pt-4">
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
