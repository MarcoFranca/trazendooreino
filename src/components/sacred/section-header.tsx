import type { ReactNode } from "react";

type SectionHeaderProps = {
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
};

export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeaderProps) {
    const centered = align === "center";

    return (
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            <p className="sacred-inscription text-[10px] text-[#d6b56d]">{eyebrow}</p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                {title}
            </h1>
            {description ? (
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
