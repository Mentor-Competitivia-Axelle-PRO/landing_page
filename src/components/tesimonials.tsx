
import { Star } from "lucide-react";

const items = [
  {
    quote: "J'ai gagné en confiance dans mes meetings en 7 jours.",
    name: "Camille R.",
    role: "Marketing Manager · Paris",
  },
  {
    quote: "Enfin je parle sans traduire dans ma tête.",
    name: "Lukas M.",
    role: "Software Engineer · Berlin",
  },
  {
    quote: "Game changer pour ma carrière à l'étranger.",
    name: "Karim H.",
    role: "Finance Analyst · Dubaï",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Ils sont passés à l'action
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Voici comment les pros <span className="gradient-text">passent au niveau supérieur</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="card-elevated flex flex-col p-7">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg font-medium leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                {/* <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                /> */}
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
