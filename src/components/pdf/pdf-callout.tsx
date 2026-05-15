import type { ReactNode } from "react";

type PdfCalloutProps = {
    title?: string;
    children: ReactNode;
};

export function PdfCallout({ title, children }: PdfCalloutProps) {
    return (
        <div className="pdf-keep-together rounded-[20px] border border-[#d6b56d]/16 bg-[#d6b56d]/[0.055] p-5 md:p-6">
            {title ? (
                <p className="sacred-inscription text-[9px] text-[#d6b56d]">{title}</p>
            ) : null}
            <div className={title ? "mt-4" : ""}>{children}</div>
        </div>
    );
}
