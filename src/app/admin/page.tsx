import Link from "next/link";
import { BookOpen, Layers3, Users } from "lucide-react";

import { PageShell } from "@/components/sacred/page-shell";
import { SectionHeader } from "@/components/sacred/section-header";
import {
    getAdminCollaboratorApplications,
    getAdminJourneys,
    getAdminWeeks,
} from "@/lib/journeys";

const adminLinks = [
    {
        href: "/admin/jornadas",
        title: "Jornadas",
        text: "Criar, editar e publicar trilhas.",
        icon: BookOpen,
    },
    {
        href: "/admin/semanas",
        title: "Semanas",
        text: "Controlar release, semana atual e recursos.",
        icon: Layers3,
    },
    {
        href: "/admin/colaboradores",
        title: "Colaboradores",
        text: "Discernir aplicações e atualizar status.",
        icon: Users,
    },
];

export default async function AdminHomePage() {
    const [journeys, weeks, applications] = await Promise.all([
        getAdminJourneys(),
        getAdminWeeks(),
        getAdminCollaboratorApplications(),
    ]);

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Área administrativa"
                    title={
                        <>
                            Gestão com sobriedade.
                            <span className="block text-[#e8d7ad]">
                                Publicar sem perder a reverência.
                            </span>
                        </>
                    }
                    description="A administração existe para sustentar conteúdo, ordem de liberação e discernimento de colaboradores sem transformar a experiência em dashboard genérico."
                />

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="editorial-panel rounded-[1.6rem] p-6">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">Jornadas</p>
                        <p className="font-display mt-5 text-4xl text-white">{journeys.length}</p>
                    </div>

                    <div className="editorial-panel rounded-[1.6rem] p-6">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">Semanas</p>
                        <p className="font-display mt-5 text-4xl text-white">{weeks.length}</p>
                    </div>

                    <div className="editorial-panel rounded-[1.6rem] p-6">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Aplicações
                        </p>
                        <p className="font-display mt-5 text-4xl text-white">
                            {applications.length}
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {adminLinks.map(({ href, title, text, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="rounded-[1.7rem] border border-[#d6b56d]/12 bg-black/30 p-6 transition duration-500 hover:border-[#d6b56d]/26 hover:bg-[#d6b56d]/[0.04]"
                        >
                            <Icon className="size-5 text-[#d6b56d]" />
                            <h2 className="font-display mt-5 text-2xl text-white">{title}</h2>
                            <p className="mt-3 text-sm leading-7 text-white/56">{text}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
