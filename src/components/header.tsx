import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-surface/90 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-4">
      <Link href="/" className="flex items-center gap-2 pl-2">
        <span className="grid relative h-8 w-8 place-items-center rounded-lg  text-primary-foreground font-bold">
          <Image
            src={"https://github.com/Mentor-Competitivia-Axelle-PRO/landing_page/blob/main/public/logo.png?raw=true"}
            alt="Isidore logo"
           fill
            className=" object-contain"
          />
        </span>
        <span className="text-lg font-bold tracking-tight">isidore<span className="text-primary">.ai</span></span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
        <Link href="#solution" className="hover:text-foreground transition">Produit</Link>
        <Link href="#offres" className="hover:text-foreground transition">Tarifs</Link>
        <Link href="#temoignages" className="hover:text-foreground transition">Témoignages</Link>
        <Link href="#difference" className="hover:text-foreground transition">Différence</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="#login" className="hidden text-sm font-medium text-foreground hover:text-primary md:inline">
          Connexion
        </Link>
        <Link
          href="#start"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-pop)] transition hover:opacity-95"
        >
          Démarrer gratuitement
        </Link>
      </div>
    </header>
  );
}
