import Link from "next/link";

import { StatusBadge } from "@/components/journey/status-badge";
import { PageShell } from "@/components/sacred/page-shell";
import { SectionHeader } from "@/components/sacred/section-header";
import { formatLongDate } from "@/lib/format";
import { getJourneysForUser } from "@/lib/journeys";

export default async function JourneysPage() {
    const journeys = await getJourneysForUser();

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Biblioteca viva"
                    title={
                        <>
                            Jornadas da plataforma.
                            <span className="block text-[#e8d7ad]">
                                Algumas ja estao abertas. Outras aguardam o seu tempo.
                            </span>
                        </>
                    }
                    description="Aqui voce ve todo o mapa editorial ja cadastrado. O acesso ao conteudo respeita publicacao, maturacao e data de liberacao."
                />

                <div className="grid gap-5 lg:grid-cols-2">
                    {journeys.map((journey) => {
                        const locked = !journey.isAccessible;

                        return (
                            <Link
                                key={journey.id}
                                href={`/app/jornadas/${journey.slug}`}
                                className={`group overflow-hidden rounded-[1.9rem] border p-7 transition duration-500 ${
                                    locked
                                        ? "border-white/10 bg-black/28 hover:border-white/18"
                                        : "border-[#d6b56d]/12 bg-black/34 hover:border-[#d6b56d]/28 hover:bg-[#d6b56d]/[0.04]"
                                }`}
                            >
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

                                <p className="mt-4 text-sm leading-7 text-white/58">
                                    {journey.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-white/36">
                                    <span>{journey.totalWeeks} semanas previstas</span>
                                    <span>{journey.releasedWeeks} liberadas</span>
                                </div>

                                {journey.status === "upcoming" ? (
                                    <p className="mt-6 text-sm leading-7 text-[#e8d7ad]">
                                        Abertura programada para {formatLongDate(journey.availableAt)}.
                                    </p>
                                ) : journey.status === "locked" ? (
                                    <p className="mt-6 text-sm leading-7 text-white/50">
                                        Esta jornada ja esta registrada, mas ainda nao foi aberta para leitura.
                                    </p>
                                ) : (
                                    <span className="mt-8 inline-flex text-sm text-[#e8cc84]">
                                        Abrir jornada
                                    </span>
                                )}
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
