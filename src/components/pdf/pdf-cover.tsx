type PdfCoverProps = {
    eyebrow: string;
    title: string;
    subtitle: string;
    phrase: string;
};

export function PdfCover({ eyebrow, title, subtitle, phrase }: PdfCoverProps) {
    return (
        <section className="pdf-sheet relative overflow-hidden rounded-[26px] border border-[#d6b56d]/26 bg-[#090705] px-7 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.5)] md:px-10 md:py-14">
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(214,181,109,0.18),transparent_32%)]"
            />
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
            />

            <div className="relative flex min-h-[250mm] flex-col justify-between">
                <div>
                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">{eyebrow}</p>
                    <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
                        {title}
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-[#f3ead9]/72 md:text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="max-w-2xl rounded-[24px] border border-[#d6b56d]/18 bg-[#d6b56d]/[0.06] p-6 md:p-8">
                    <p className="font-scroll text-[1.2rem] leading-9 tracking-[0.02em] text-[#ead8ad]">
                        {phrase}
                    </p>
                </div>
            </div>
        </section>
    );
}
