import type { Journey } from "@/lib/supa-types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toDatetimeLocalValue } from "@/lib/format";

type JourneyFormProps = {
    action: (formData: FormData) => void | Promise<void>;
    journey?: Journey | null;
    submitLabel: string;
};

export function JourneyForm({ action, journey, submitLabel }: JourneyFormProps) {
    return (
        <form action={action} className="grid gap-5 md:grid-cols-2">
            {journey ? <input type="hidden" name="id" value={journey.id} /> : null}

            <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    name="slug"
                    defaultValue={journey?.slug ?? ""}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="title">Titulo</Label>
                <Input
                    id="title"
                    name="title"
                    defaultValue={journey?.title ?? ""}
                    required
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitulo</Label>
                <Input
                    id="subtitle"
                    name="subtitle"
                    defaultValue={journey?.subtitle ?? ""}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="cover_image">Imagem de capa</Label>
                <Input
                    id="cover_image"
                    name="cover_image"
                    defaultValue={journey?.cover_image ?? ""}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="release_at">Liberacao da jornada</Label>
                <Input
                    id="release_at"
                    name="release_at"
                    type="datetime-local"
                    defaultValue={toDatetimeLocalValue(journey?.release_at ?? null)}
                    className="sacred-input h-11 rounded-xl px-4"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Descricao</Label>
                <Textarea
                    id="description"
                    name="description"
                    defaultValue={journey?.description ?? ""}
                    className="sacred-input min-h-36 rounded-[1.2rem] px-4 py-3"
                />
            </div>

            <div className="md:col-span-2">
                <label className="inline-flex items-center gap-3 text-sm text-white/70">
                    <input
                        type="checkbox"
                        name="is_published"
                        defaultChecked={journey?.is_published ?? false}
                        className="size-4"
                    />
                    Publicar jornada
                </label>
            </div>

            <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                {submitLabel}
            </Button>
        </form>
    );
}
