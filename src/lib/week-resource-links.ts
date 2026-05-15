import type { Week } from "@/lib/supa-types";

function isPlaceholderHost(url: URL) {
    return url.hostname === "example.com" || url.hostname.endsWith(".example.com");
}

export function isUsableExternalUrl(value: string | null | undefined) {
    if (!value) {
        return false;
    }

    try {
        const url = new URL(value);
        return !isPlaceholderHost(url);
    } catch {
        return false;
    }
}

export function getWeekPdfHref(
    journeySlug: string,
    week: Pick<Week, "pdf_url" | "slug" | "week_number">
) {
    if (isUsableExternalUrl(week.pdf_url)) {
        const url = new URL(week.pdf_url as string);
        const filename = `${journeySlug}-semana-${week.week_number}.pdf`;
        url.searchParams.set("download", filename);
        return url.toString();
    }

    if (journeySlug === "genesis" && (week.slug === "00" || week.week_number === "00")) {
        return "/genesis/00/pdf";
    }

    return null;
}

export function getWeekPdfLabel(
    journeySlug: string,
    week: Pick<Week, "pdf_url" | "slug" | "week_number">
) {
    if (isUsableExternalUrl(week.pdf_url)) {
        return "Baixar PDF oficial";
    }

    if (journeySlug === "genesis" && (week.slug === "00" || week.week_number === "00")) {
        return "Abrir material editorial";
    }

    return "PDF em preparacao";
}

export function getWeekVideoHref(week: Pick<Week, "video_url">) {
    return isUsableExternalUrl(week.video_url) ? week.video_url : null;
}
