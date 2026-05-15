import type { ReactNode } from "react";

type PdfPageShellProps = {
    children: ReactNode;
};

export function PdfPageShell({ children }: PdfPageShellProps) {
    return (
        <div className="pdf-shell min-h-screen bg-[#0a0806] px-4 py-8 text-[#f4ead4] md:px-8 md:py-10">
            <div className="mx-auto flex max-w-[210mm] flex-col gap-8">{children}</div>
        </div>
    );
}
