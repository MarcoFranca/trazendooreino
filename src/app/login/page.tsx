import Link from "next/link";

import { loginAction } from "@/app/actions/auth";
import { AuthShell } from "@/components/auth/auth-shell";
import { PageShell } from "@/components/sacred/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = await searchParams;
    const error = typeof params.error === "string" ? params.error : null;
    const next = typeof params.next === "string" ? params.next : "/app";

    return (
        <PageShell>
            <AuthShell
                eyebrow="Acesso à jornada"
                title={
                    <>
                        Entre com sobriedade.
                        <span className="block text-[#e8d7ad]">
                            A trilha continua dentro da casa.
                        </span>
                    </>
                }
                description="Seu acesso abre a área pessoal de leitura, semanas liberadas, materiais e perguntas da comunidade."
            >
                <form action={loginAction} className="space-y-5">
                    <input type="hidden" name="next" value={next} />

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="sacred-input h-12 rounded-2xl px-4"
                            placeholder="voce@exemplo.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="sacred-input h-12 rounded-2xl px-4"
                            placeholder="Sua senha"
                        />
                    </div>

                    {error ? (
                        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                            {error}
                        </div>
                    ) : null}

                    <Button className="cta-shimmer h-12 w-full rounded-full bg-[#d6b56d] text-sm font-semibold text-black hover:bg-[#e7c979]">
                        Entrar
                    </Button>

                    <p className="text-sm leading-7 text-white/48">
                        Ainda não tem acesso?{" "}
                        <Link
                            href="/cadastro"
                            className="text-[#e8cc84] transition hover:text-[#fff7df]"
                        >
                            Criar conta
                        </Link>
                    </p>
                </form>
            </AuthShell>
        </PageShell>
    );
}
