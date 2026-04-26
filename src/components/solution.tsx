import { ChartBar, Icon, Mic, TrendingUp, Trophy } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: ChartBar,
    title: "Correction IA en temps réel",
    desc: "Prononciation, grammaire et clarté — corrigées instantanément à chaque phrase.",
  },
  {
    icon: Mic,
    title: "Apprentissage par scénarios",
    desc: "Business, entretiens, vie quotidienne — uniquement de vraies situations.",
  },
  {
    icon: TrendingUp,
    title: "Parcours adaptatif",
    desc: "Une progression personnalisée basée sur ton niveau exact et tes objectifs.",
  },
  {
    icon: Trophy,
    title: "Interaction vocale active",
    desc: "Tu parles vraiment. Pas de consommation passive, que de la pratique réelle.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            La solution
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Voici Isidore AI — ton coach <br />
            <span className="gradient-text">de performance multilingue</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Entraîne-toi comme si tu étais déjà dans la réunion, l'entretien ou la négociation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-elevated group p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]">
              <div className="mb-5 inline-grid h-16 w-16 place-items-center rounded-2xl bg-primary/5">
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-foreground">
          Tu n'étudies pas l'anglais. Tu <span className="gradient-text">performes</span> en anglais.
        </p>
      </div>
    </section>
  );
}
