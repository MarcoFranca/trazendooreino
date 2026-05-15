import { redirect } from "next/navigation";

type PublicWeekPageProps = {
    params: Promise<{ week: string }>;
};

export default async function PublicWeekPage({ params }: PublicWeekPageProps) {
    const { week } = await params;
    redirect(`/app/jornadas/genesis/${week}`);
}
