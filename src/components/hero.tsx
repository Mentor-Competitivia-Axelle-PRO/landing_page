import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className=" relative overflow-hidden pt-12 pb-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <Link
          href="#temoignages"
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm shadow-[var(--shadow-soft)]"
        >
          <Flame className="h-4 w-4 text-primary" />
          <span className="font-medium text-foreground">+12 000 professionnels</span>
          <span className="text-muted-foreground">·</span>
          <span className="font-semibold text-primary inline-flex items-center gap-1">
            Voir les résultats <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Arrête de perdre des opportunités <br className="hidden md:inline" />
          <span className="gradient-text">à cause de ton anglais.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Isidore AI te corrige instantanément, t'entraîne chaque jour et te prépare aux vraies situations business.
          Pas une app de langue. Un accélérateur de carrière.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#start"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-pop)] transition hover:opacity-95"
          >
            Démarrer en 2 minutes
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#solution"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition hover:bg-secondary"
          >
            Comment ça marche
          </Link>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          ✓ Aucune carte bancaire · ✓ Premier résultat en 30 secondes
        </p>

        {/* Hero visual */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* Left card */}
            <div className="card-elevated p-5 text-left md:translate-y-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-destructive" /> Toi, sans Isidore
              </div>
              <p className="text-sm text-foreground">
                "I would like to... <span className="text-destructive line-through">explain you</span>... uh, sorry..."
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/4 rounded-full bg-destructive/60" />
              </div>
            </div>

            {/* Center character */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-primary-glow/20 blur-2xl" />
              <Image
                src={"/hero-isidore.png"}
                alt="Coach AI Isidore"
                width={320}
                height={320}
                className="h-64 w-64 object-contain md:h-80 md:w-80"
              />
            </div>

            {/* Right card */}
            <div className="card-elevated p-5 text-left md:-translate-y-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success" /> Toi, avec Isidore
              </div>
              <p className="text-sm text-foreground">
                "Let me <span className="font-semibold text-primary">walk you through</span> our proposal."
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[92%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
