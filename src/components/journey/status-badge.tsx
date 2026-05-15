import { cn } from "@/lib/utils";

type StatusBadgeTone =
    | "current"
    | "available"
    | "upcoming"
    | "programmed"
    | "draft"
    | "locked";

type StatusBadgeProps = {
    status: StatusBadgeTone;
    className?: string;
};

const statusMap: Record<StatusBadgeTone, { label: string; className: string }> = {
    current: {
        label: "Atual",
        className: "border-[#d6b56d]/28 bg-[#d6b56d]/14 text-[#f4deb0]",
    },
    available: {
        label: "Liberada",
        className: "border-emerald-500/24 bg-emerald-500/12 text-[#d4f6db]",
    },
    upcoming: {
        label: "Em breve",
        className: "border-amber-500/24 bg-amber-500/12 text-[#f0ddb0]",
    },
    programmed: {
        label: "Programada",
        className: "border-sky-500/20 bg-sky-500/10 text-[#d5ebff]",
    },
    draft: {
        label: "Rascunho",
        className: "border-white/12 bg-white/[0.06] text-white/70",
    },
    locked: {
        label: "Bloqueada",
        className: "border-white/10 bg-black/22 text-white/52",
    },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const config = statusMap[status];

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em]",
                config.className,
                className
            )}
        >
            {config.label}
        </span>
    );
}
