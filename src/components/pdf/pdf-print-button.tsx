"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PdfPrintButton() {
    return (
        <Button
            type="button"
            onClick={() => window.print()}
            className="print-hide rounded-full bg-[#d6b56d] px-6 text-black hover:bg-[#e7c979]"
        >
            Baixar em PDF
            <Download className="size-4" />
        </Button>
    );
}
