import type { ReactNode } from "react";

type PdfSectionProps = {
    children: ReactNode;
    eyebrow?: string;
    title?: string;
    breakBefore?: boolean;
};

export function PdfSection({
    children,
    eyebrow,
    title,
    breakBefore = false,
}: PdfSectionProps) {
    return (
        <section
            className={[
                "pdf-sheet relative overflow-hidden rounded-[22px] border border-[#b8924f]/30 bg-[linear-gradient(180deg,rgba(23,17,12,0.98),rgba(10,8,6,0.98))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10",
                breakBefore ? "pdf-break-before" : "",
            ].join(" ")}
        >
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,181,109,0.12),transparent_35%)]"
            />
            <div className="relative">
                {eyebrow ? (
                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">{eyebrow}</p>
                ) : null}
                {title ? (
                    <h2 className="font-display mt-4 text-3xl leading-tight tracking-[-0.04em] text-white md:text-4xl">
                        {title}
                    </h2>
                ) : null}
                <div className={title || eyebrow ? "mt-7" : ""}>{children}</div>
            </div>
        </section>
    );
}
