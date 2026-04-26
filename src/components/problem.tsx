import { AlertTriangle } from "lucide-react";

const points = [
  { you: "Tu comprends...", but: "mais tu hésites." },
  { you: "Tu écris...", but: "mais tu doutes." },
  { you: "Tu parles...", but: "mais tu manques de confiance." },
];

export function Problem() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" /> Le problème
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Tu n'es pas mauvais en anglais. <br />
            Tu n'es juste <span className="gradient-text">pas entraîné</span> aux vraies situations.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.you} className="card-elevated p-6">
              <p className="text-lg font-semibold text-foreground">{p.you}</p>
              <p className="mt-2 text-base text-muted-foreground">{p.but}</p>
            </div>
          ))}
        </div>

        <div className="card-elevated mx-auto mt-10 max-w-3xl bg-secondary p-6 text-center">
          <p className="text-base text-foreground md:text-lg">
            Pendant ce temps, d'autres avancent plus vite, négocient mieux et gagnent les opportunités —
            simplement parce qu'ils communiquent <span className="font-semibold text-primary">avec assurance</span>.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary">
            L'anglais n'est plus une compétence. C'est un avantage compétitif.
          </p>
        </div>
      </div>
    </section>
  );
}
