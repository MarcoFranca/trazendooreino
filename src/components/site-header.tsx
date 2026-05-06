import Link from "next/link";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Crown className="size-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-[0.28em] text-primary">
                            TRAZENDO O REINO
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Jornada pelas Escrituras
                        </p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    <a href="#jornada" className="transition hover:text-foreground">
                        Jornada
                    </a>
                    <a href="#metodo" className="transition hover:text-foreground">
                        Método
                    </a>
                    <a href="#genesis" className="transition hover:text-foreground">
                        Gênesis
                    </a>
                    <a href="#mapa" className="transition hover:text-foreground">
                        Mapa
                    </a>
                </nav>

                <Button className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                    Entrar na jornada
                </Button>
            </div>
        </header>
    );
}