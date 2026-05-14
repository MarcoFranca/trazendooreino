import Link from "next/link";
import { BookOpen, CalendarClock, Layers3, RadioTower, Users } from "lucide-react";

import { PageShell } from "@/components/sacred/page-shell";
import { SectionHeader } from "@/components/sacred/section-header";
import { formatDateTime } from "@/lib/format";
import { getAdminDashboardStats } from "@/lib/journeys";

const adminLinks = [
    {
        href: "/admin/jornadas",
        title: "Jornadas",
        text: "Criar, editar, arquivar e publicar arcos editoriais.",
        icon: BookOpen,
    },
    {
        href: "/admin/semanas",
        title: "Semanas",
        text: "Gerir release, PDF oficial, video e semana atual.",
        icon: Layers3,
    },
    {
        href: "/admin/colaboradores",
        title: "Colaboradores",
        text: "Discernir aplicacoes e acompanhar pendencias.",
        icon: Users,
    },
];

export default async function AdminHomePage() {
    const stats = await getAdminDashboardStats();

    const cards = [
        {
            label: "Jornadas",
            value: stats.journeysTotal,
            detail: `${stats.journeysPublished} publicadas`,
            icon: BookOpen,
        },
        {
            label: "Semanas",
            value: stats.weeksTotal,
            detail: "cadastradas",
            icon: Layers3,
        },
        {
            label: "Semana atual",
            value: stats.currentWeek?.week_number ?? "--",
            detail: stats.currentWeek?.title ?? "nao definida",
            icon: RadioTower,
        },
        {
            label: "Colaboradores",
            value: stats.pendingCollaborators,
            detail: "pendentes",
            icon: Users,
        },
    ];

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Area administrativa"
                    title={
                        <>
                            Gestao editorial.
                            <span className="block text-[#e8d7ad]">
                                Publicar no tempo certo, com sobriedade.
                            </span>
                        </>
                    }
                    description="O painel reune estado de publicacao, semanas liberadas, PDF oficial e colaboradores pendentes sem abandonar a atmosfera reverente da plataforma."
                />

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map(({ label, value, detail, icon: Icon }) => (
                        <div key={label} className="editorial-panel rounded-[1.6rem] p-6">
                            <div className="flex items-center justify-between">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    {label}
                                </p>
                                <Icon className="size-5 text-[#d6b56d]" />
                            </div>
                            <p className="font-display mt-5 text-4xl text-white">{value}</p>
                            <p className="mt-3 text-sm leading-6 text-white/46">{detail}</p>
                        </div>
                    ))}
                </div>

                {stats.currentWeek ? (
                    <div className="rounded-[1.8rem] border border-[#d6b56d]/12 bg-black/30 p-6">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Semana atual
                                </p>
                                <h2 className="font-display mt-3 text-3xl text-white">
                                    Semana {stats.currentWeek.week_number} · {stats.currentWeek.title}
                                </h2>
                                <p className="mt-2 text-sm text-white/50">
                                    Liberacao: {formatDateTime(stats.currentWeek.release_at)}
                                </p>
                            </div>
                            <CalendarClock className="size-8 text-[#d6b56d]" />
                        </div>
                    </div>
                ) : null}

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
