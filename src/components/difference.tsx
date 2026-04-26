import { Check, X } from "lucide-react";

const isidore = ["Basé sur la performance", "Interactif et vocal", "Personnalisé à ton niveau", "Situations du monde réel"];
const others = ["Basé sur le vocabulaire", "Passif et silencieux", "Générique pour tout le monde", "Académique et abstrait"];

export function Difference() {
  return (
    <section id="difference" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            La différence
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Pourquoi Isidore AI <span className="gradient-text">change la donne</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-primary bg-foreground p-8 text-background shadow-[var(--shadow-pop)]">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">I</span>
              <span className="text-lg font-bold">Isidore AI</span>
            </div>
            <ul className="mt-6 space-y-4">
              {isidore.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </span>
                  <span className="text-base text-background/95">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-elevated p-8">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-muted text-muted-foreground font-bold">A</span>
              <span className="text-lg font-bold text-muted-foreground">Apps de langue classiques</span>
            </div>
            <ul className="mt-6 space-y-4">
              {others.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-muted">
                    <X className="h-3.5 w-3.5 text-muted-foreground" />
                  </span>
                  <span className="text-base text-muted-foreground line-through">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-foreground">
          Les autres enseignent l'anglais. Nous formons des <span className="gradient-text">performers en anglais</span>.
        </p>
      </div>
    </section>
  );
}
