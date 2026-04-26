import { Rocket, MessageCircle, Wand2 } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Lance l'app",
    desc: "Ouvre Isidore AI sur n'importe quel appareil. Aucune installation.",
  },
  {
    icon: MessageCircle,
    title: "Commence à parler",
    desc: "Plonge directement dans un scénario réel de conversation.",
  },
  {
    icon: Wand2,
    title: "Sois corrigé en direct",
    desc: "Feedback IA en temps réel : prononciation, grammaire, clarté.",
  },
];

export function Activation() {
  return (
    <section className="bg-funnel-soft py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Activation
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          Ton premier déclic <br />
          <span className="gradient-text">en 30 secondes chrono.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Pas de leçons. Pas d'attente. Pas de théorie. Juste de vrais progrès, immédiatement.
        </p>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="card-elevated relative z-10 p-8">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-pop)]">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Étape {i + 1}
                </div>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
