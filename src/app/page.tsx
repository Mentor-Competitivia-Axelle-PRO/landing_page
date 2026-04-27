import { Activation } from "@/components/activation";
import { FinalCTA } from "@/components/cta";
import { Difference } from "@/components/difference";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Testimonials } from "@/components/tesimonials";

export default function Home() {
  return (
    <main>
      <div className="bg-funnel">
        <Navbar />
        <Hero/>
      </div>
      <Problem />
      <Solution />
      <Pricing />
      <Activation />
      <Testimonials />
      <Difference/>
      <FinalCTA/>
      <Footer/> 


    </main>
  );
}
