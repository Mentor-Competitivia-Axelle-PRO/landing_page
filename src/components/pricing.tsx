import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    tag: "Gratuit",
    // price: "0€",
    period: "à vie",
    desc: "Parfait pour tester ton niveau et découvrir la puissance du coaching IA.",
    features: [
      "Conversations IA d'entrée",
      "Correction instantanée de prononciation",
      "Mini-sessions quotidiennes",
    ],
    // cta: "Commencer gratuitement",
    featured: false,
  },
  {
    name: "Performance",
    tag: "Le plus choisi",
    // price: "29€",
    period: "/ mois",
    desc: "Pour les pros qui veulent des résultats mesurables, plus rapidement.",
    features: [
      "Conversations business avancées",
      "Feedback IA personnalisé",
      "Système de progression structuré",
      "Défis quotidiens + tracking",
    ],
    // cta: "Activer Performance",
    featured: true,
  },
  {
    name: "Elite",
    tag: "Premium",
    // price: "149€",
    period: "/ mois",
    desc: "Pour les leaders, expats et hauts performants exigeants.",
    features: [
      "Coaching hybride IA + humain",
      "Simulations d'entretiens & négos",
      "Anglais aligné à ta carrière",
      "Roadmap personnelle de progression",
    ],
    // cta: "Postuler à Elite",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="offres" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Choisis ton niveau
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Trois étapes pour devenir <span className="-text">imparable</span>
          </h2>
          <p className="mt-5 text-lg te">
            Commence gratuitement. Monte en puissance quand tu es prêt.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                t.featured
                  ? "border-primary bg-foreground text-background shadow-[var(--shadow-pop)] lg:-translate-y-4 lg:scale-[1.02]"
                  : "border-border bg-surface shadow-[var(--shadow-soft)]"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> {t.tag}
                </div>
              )}
              {!t.featured && (
                <span className={`text-xs font-semibold uppercase tracking-wider ${t.featured ? "text-primary-glow" : "text-muted-foreground"}`}>
                  {t.tag}
                </span>
              )}
              <h3 className={`mt-2 text-2xl font-bold ${t.featured ? "text-background" : "text-foreground"}`}>
                {t.name}
              </h3>
              <p className={`mt-2 text-sm ${t.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
              {/* <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-5xl font-bold ${t.featured ? "text-background" : "text-foreground"}`}>
                  {t.price}
                </span>
                <span className={`text-sm ${t.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  {t.period}
                </span>
              </div> */}
              <ul className="mt-8 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                        t.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={t.featured ? "text-background/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              {/* <a
                href="#start"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:opacity-95"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {t.cta}
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
