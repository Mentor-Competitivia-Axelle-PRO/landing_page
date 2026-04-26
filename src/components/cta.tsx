import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="start" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground p-10 text-center text-background md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />

          <span className="relative inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background/80">
            La décision est maintenant
          </span>
          <h2 className="relative mt-6 text-3xl font-bold leading-tight md:text-6xl">
            Combien d'opportunités vas-tu rater <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-primary-glow to-background bg-clip-text text-transparent">
              cette année ?
            </span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base text-background/70 md:text-lg">
            Tes futures conversations — en réunion, en entretien, en négociation — se construisent par ce que tu fais aujourd'hui.
            Ne laisse pas la langue être la raison.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-pop)] transition hover:opacity-95"
            >
              Démarrer maintenant
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#offres"
              className="inline-flex items-center justify-center rounded-full border border-background/20 bg-background/5 px-8 py-4 text-base font-semibold text-background transition hover:bg-background/10"
            >
              Voir les offres
            </a>
          </div>
          <p className="relative mt-4 text-sm text-background/60">
            ✓ 30 secondes pour ton premier résultat · ✓ Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}
