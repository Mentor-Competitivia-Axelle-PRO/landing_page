import { Navbar } from "@/components/header";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-funnel">
        <Navbar />
        <Hero/>
      </div>

    </main>
  );
}
