import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-surface/90 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-4">
      <Link href="/" className="flex items-center gap-2 pl-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">
          I
        </span>
        <span className="text-lg font-bold tracking-tight">isidore<span className="text-primary">.ai</span></span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
        <a href="#solution" className="hover:text-foreground transition">Produit</a>
        <a href="#offres" className="hover:text-foreground transition">Tarifs</a>
        <a href="#temoignages" className="hover:text-foreground transition">Témoignages</a>
        <a href="#difference" className="hover:text-foreground transition">Différence</a>
      </nav>
      <div className="flex items-center gap-2">
        <a href="#login" className="hidden text-sm font-medium text-foreground hover:text-primary md:inline">
          Connexion
        </a>
        <a
          href="#start"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-pop)] transition hover:opacity-95"
        >
          Démarrer gratuitement
        </a>
      </div>
    </header>
  );
}
