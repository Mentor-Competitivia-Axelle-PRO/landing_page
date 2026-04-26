import Image from "next/image";
import Link from "next/link";
import { CustomIcon } from "./icon";

export function Hero() {
  return (
      <section className=" relative overflow-hidden pt-40 pb-24">
          <div className="mx-auto max-w-5xl px-4 text-center">


              <h1 className="mx-auto max-w-3xl text-2xl font-bold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                  Arrête de perdre des opportunités
                  à cause de ton anglais.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Isidore AI te corrige instantanément, t'entraîne chaque jour et te prépare aux vraies situations business.
          Pas une app de langue. Un accélérateur de carrière.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

                  <div className="flex  bg-black gap-2 p-3 rounded-full  text-white">
                      <Link
                          href="#download-android"
                          className="inline-block relative h-7 w-7"

                          aria-label="Télécharger sur Google Play"
          >

                          <CustomIcon size={26} name="Play" />

                      </Link>

                      Télécharger sur Google Play
                  </div>
                    <div className="flex gap-2  bg-black p-3 rounded-full  text-white">
                      <Link
                          href="#download-android"
                          className="inline-block relative h-7 w-7"

                          aria-label="Télécharger sur Google Play"
          >
                          <CustomIcon size={26} name="Apple" />

                      </Link>

                      Télécharger sur App Store
                  </div>

        </div>

        {/* <p className="mt-4 text-sm text-muted-foreground">
          ✓ Aucune carte bancaire · ✓ Premier résultat en 30 secondes
        </p> */}

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
