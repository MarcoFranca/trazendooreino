import type { LucideIcon } from "lucide-react";

type ResourceCardProps = {
    icon: LucideIcon;
    title: string;
    text: string;
    href?: string | null;
};

export function ResourceCard({ icon: Icon, title, text, href }: ResourceCardProps) {
    const content = (
        <div className="group relative overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-black/38 p-6 backdrop-blur-[2px] transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]">
            <div className="relative">
                <div className="flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9">
                    <Icon className="size-5 text-[#d6b56d]" />
                </div>

                <h3 className="font-display mt-6 text-[1.45rem] font-semibold tracking-[-0.03em] text-white">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/54">{text}</p>
            </div>
        </div>
    );

    if (!href) {
        return content;
    }

    return (
        <a href={href} target="_blank" rel="noreferrer">
            {content}
        </a>
    );
}
