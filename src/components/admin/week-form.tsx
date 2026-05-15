import type { Journey, Week } from "@/lib/supa-types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toDatetimeLocalValue } from "@/lib/format";

type WeekFormProps = {
    action: (formData: FormData) => void | Promise<void>;
    journeys: Journey[];
    week?: Week | null;
    submitLabel: string;
};

export function WeekForm({ action, journeys, week, submitLabel }: WeekFormProps) {
    return (
        <form action={action} className="grid gap-5 md:grid-cols-2">
            {week ? <input type="hidden" name="id" value={week.id} /> : null}

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="journey_id">Jornada</Label>
                <select
                    id="journey_id"
                    name="journey_id"
                    defaultValue={week?.journey_id ?? ""}
                    required
                    className="sacred-input h-11 w-full rounded-xl px-4"
                >
                    <option value="">Selecione uma jornada</option>
                    {journeys.map((journey) => (
                        <option key={journey.id} value={journey.id}>
                            {journey.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="week_number">Numero da semana</Label>
                <Input
                    id="week_number"
                    name="week_number"
                    defaultValue={week?.week_number ?? ""}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    name="slug"
                    defaultValue={week?.slug ?? week?.week_number ?? ""}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title">Titulo</Label>
                <Input
                    id="title"
                    name="title"
                    defaultValue={week?.title ?? ""}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="reading">Leitura</Label>
                <Input
                    id="reading"
                    name="reading"
                    defaultValue={week?.reading ?? ""}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="summary">Resumo</Label>
                <Textarea
                    id="summary"
                    name="summary"
                    defaultValue={week?.summary ?? ""}
                    className="sacred-input min-h-28 rounded-[1.2rem] px-4 py-3"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="content">Conteudo editorial</Label>
                <Textarea
                    id="content"
                    name="content"
                    defaultValue={week?.content ?? ""}
                    className="sacred-input min-h-44 rounded-[1.2rem] px-4 py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="christ_focus">Foco em Cristo</Label>
                <Textarea
                    id="christ_focus"
                    name="christ_focus"
                    defaultValue={week?.christ_focus ?? ""}
                    className="sacred-input min-h-28 rounded-[1.2rem] px-4 py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="kingdom_focus">Foco no Reino</Label>
                <Textarea
                    id="kingdom_focus"
                    name="kingdom_focus"
                    defaultValue={week?.kingdom_focus ?? ""}
                    className="sacred-input min-h-28 rounded-[1.2rem] px-4 py-3"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="pdf_url">PDF URL</Label>
                <Input
                    id="pdf_url"
                    name="pdf_url"
                    defaultValue={week?.pdf_url ?? ""}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="video_url">Video URL</Label>
                <Input
                    id="video_url"
                    name="video_url"
                    defaultValue={week?.video_url ?? ""}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="release_at">Liberacao</Label>
                <Input
                    id="release_at"
                    name="release_at"
                    type="datetime-local"
                    defaultValue={toDatetimeLocalValue(week?.release_at ?? null)}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="webinar_date">Data do webinar</Label>
                <Input
                    id="webinar_date"
                    name="webinar_date"
                    type="datetime-local"
                    defaultValue={toDatetimeLocalValue(week?.webinar_date ?? null)}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-6">
                <label className="inline-flex items-center gap-3 text-sm text-white/70">
                    <input
                        type="checkbox"
                        name="is_current"
                        defaultChecked={week?.is_current ?? false}
                        className="size-4"
                    />
                    Marcar como semana atual
                </label>
                <label className="inline-flex items-center gap-3 text-sm text-white/70">
                    <input
                        type="checkbox"
                        name="is_published"
                        defaultChecked={week?.is_published ?? false}
                        className="size-4"
                    />
                    Publicar semana
                </label>
            </div>

            <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                {submitLabel}
            </Button>
        </form>
    );
}
