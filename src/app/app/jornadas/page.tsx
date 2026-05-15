import Link from "next/link";

import { StatusBadge } from "@/components/journey/status-badge";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { formatLongDate } from "@/lib/format";
import { getJourneysForUser } from "@/lib/journeys";

export default async function JourneysPage() {
    const journeys = await getJourneysForUser();

    return (
        <PageShell>
            <section className="relative space-y-10">
                <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 -z-10 h-72 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(214,181,109,0.15),transparent_46%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] blur-2xl"
                />

                <SacredCard>
                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <SectionHeader
                            eyebrow="Biblioteca viva"
                            title={
                                <>
                                    Jornadas da plataforma.
                                    <span className="block text-[#e8d7ad]">
                                        Mapa editorial completo, com aberturas no tempo certo.
                                    </span>
                                </>
                            }
                            description="Aqui o usuario logado encontra todas as jornadas nao deletadas. O acesso respeita publicacao, quantidade de semanas cadastradas e data de liberacao."
                        />

                        <div className="rounded-[1.7rem] border border-[#d6b56d]/12 bg-black/30 p-6">
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Atmosfera da casa
                            </p>
                            <p className="mt-4 text-sm leading-8 text-white/58">
                                Jornadas abertas seguem acessiveis. Jornadas futuras aparecem com
                                peso editorial, data e silencio, sem assumir forma de dashboard
                                generico.
                            </p>
                        </div>
                    </div>
                </SacredCard>

                <div className="grid gap-5 lg:grid-cols-2">
                    {journeys.map((journey) => {
                        const locked = !journey.isAccessible;
                        const overlay = journey.cover_image
                            ? `linear-gradient(135deg, rgba(3,3,3,0.90), rgba(3,3,3,0.68)), url(${journey.cover_image})`
                            : "linear-gradient(135deg, rgba(3,3,3,0.90), rgba(3,3,3,0.68))";

                        return (
                            <Link
                                key={journey.id}
                                href={`/app/jornadas/${journey.slug}`}
                                className={`group relative overflow-hidden rounded-[2rem] border p-7 transition duration-500 ${
                                    locked
                                        ? "border-white/10 bg-black/28 hover:border-white/18"
                                        : "border-[#d6b56d]/12 bg-black/34 hover:border-[#d6b56d]/28"
                                }`}
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-0 opacity-85"
                                    style={{
                                        backgroundImage: overlay,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                />
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,181,109,0.14),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]"
                                />

                                <div className="relative">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                            {journey.subtitle ?? "Jornada"}
                                        </p>
                                        <StatusBadge
                                            status={
                                                journey.status === "available"
                                                    ? "available"
                                                    : journey.status === "upcoming"
                                                      ? "upcoming"
                                                      : "locked"
                                            }
                                        />
                                    </div>

                                    <h2 className="font-display mt-5 text-3xl font-semibold text-white">
                                        {journey.title}
                                    </h2>

                                    <p className="mt-4 text-sm leading-7 text-white/62">
                                        {journey.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-white/38">
                                        <span>{journey.totalWeeks} semanas previstas</span>
                                        <span>{journey.releasedWeeks} liberadas</span>
                                    </div>

                                    {journey.status === "upcoming" ? (
                                        <p className="mt-6 text-sm leading-7 text-[#e8d7ad]">
                                            Abertura programada para {formatLongDate(journey.availableAt)}.
                                        </p>
                                    ) : journey.status === "locked" ? (
                                        <p className="mt-6 text-sm leading-7 text-white/52">
                                            Esta jornada aparece no mapa, mas segue em breve ou sem
                                            semanas abertas para leitura.
                                        </p>
                                    ) : (
                                        <span className="mt-8 inline-flex text-sm text-[#e8cc84]">
                                            Abrir jornada
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {!journeys.length ? (
                    <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-8">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Biblioteca em preparo
                        </p>
                        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/58">
                            Ainda nao ha jornadas cadastradas para esta area. Quando o acervo
                            editorial estiver pronto, ele aparecera aqui com sua data e estado.
                        </p>
                    </div>
                ) : null}
            </section>
        </PageShell>
    );
}
