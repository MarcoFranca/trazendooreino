export function formatLongDate(value: string | null) {
    if (!value) {
        return "A definir";
    }

    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(value));
}

export function formatDateTime(value: string | null) {
    if (!value) {
        return "A definir";
    }

    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(value));
}

export function toDatetimeLocalValue(value: string | null) {
    if (!value) {
        return "";
    }

    const date = new Date(value);
    const offset = date.getTimezoneOffset();
    const local = new Date(date.getTime() - offset * 60_000);
    return local.toISOString().slice(0, 16);
}
