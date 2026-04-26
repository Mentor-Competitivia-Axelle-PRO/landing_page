import { Navbar } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";

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

    </main>
  );
}
