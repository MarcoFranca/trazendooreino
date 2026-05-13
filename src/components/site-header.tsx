import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";

import { logoutAction } from "@/app/actions/auth";
import { getViewer } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export async function SiteHeader() {
    const { user } = await getViewer();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_28px_rgba(214,181,109,0.12)]">
                        <Image
                            src="/logo2.png"
                            alt="Trazendo o Reino"
                            width={28}
                            height={28}
                            priority
                            className="h-12 w-12 object-contain"
                        />
                    </div>

                    <div>
                        <p className="font-sacred text-sm font-semibold tracking-[0.28em] text-primary">
                            TRAZENDO O REINO
                        </p>
                        <p className="text-xs text-muted-foreground">Jornada pelas Escrituras</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    <Link href="/app/jornadas" className="transition hover:text-foreground">
                        Jornadas
                    </Link>
                    <Link href="/genesis" className="transition hover:text-foreground">
                        Gênesis
                    </Link>
                    <Link href="/colaborar" className="transition hover:text-foreground">
                        Colaborar
                    </Link>
                    {!user ? (
                        <Link href="/login" className="transition hover:text-foreground">
                            Entrar
                        </Link>
                    ) : null}
                </nav>

                <div className="flex items-center gap-3">
                    {user ? (
                        <>
                            <Button
                                asChild
                                className="rounded-full bg-primary px-6 text-primary-foreground shadow-[0_0_28px_rgba(214,181,109,0.16)] hover:bg-primary/90"
                            >
                                <Link href="/app">Área da jornada</Link>
                            </Button>

                            <form action={logoutAction}>
                                <Button
                                    variant="outline"
                                    className="rounded-full border-white/12 bg-white/[0.04] px-4 text-white hover:bg-white/[0.08]"
                                >
                                    <LogOut className="size-4" />
                                    Sair
                                </Button>
                            </form>
                        </>
                    ) : (
                        <Button
                            asChild
                            className="rounded-full bg-primary px-6 text-primary-foreground shadow-[0_0_28px_rgba(214,181,109,0.16)] hover:bg-primary/90"
                        >
                            <Link href="/cadastro">Entrar na jornada</Link>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
