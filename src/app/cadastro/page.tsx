import Link from "next/link";

import { signupAction } from "@/app/actions/auth";
import { AuthShell } from "@/components/auth/auth-shell";
import { PageShell } from "@/components/sacred/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SignupPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
    const params = await searchParams;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <AuthShell
                eyebrow="Início da caminhada"
                title={
                    <>
                        Entre na jornada.
                        <span className="block text-[#e8d7ad]">
                            A formação começa com um sim obediente.
                        </span>
                    </>
                }
                description="Crie sua conta para acompanhar as semanas, os materiais, os encontros gravados e a área pessoal da jornada."
            >
                <form action={signupAction} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            className="sacred-input h-12 rounded-2xl px-4"
                            placeholder="Seu nome"
                        />
                    </div>

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
                            minLength={6}
                            className="sacred-input h-12 rounded-2xl px-4"
                            placeholder="Crie uma senha"
                        />
                    </div>

                    {error ? (
                        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                            {error}
                        </div>
                    ) : null}

                    <Button className="cta-shimmer h-12 w-full rounded-full bg-[#d6b56d] text-sm font-semibold text-black hover:bg-[#e7c979]">
                        Criar acesso
                    </Button>

                    <p className="text-sm leading-7 text-white/48">
                        Já possui uma conta?{" "}
                        <Link
                            href="/login"
                            className="text-[#e8cc84] transition hover:text-[#fff7df]"
                        >
                            Entrar
                        </Link>
                    </p>
                </form>
            </AuthShell>
        </PageShell>
    );
}
