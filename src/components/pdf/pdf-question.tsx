type PdfQuestionProps = {
    index: number;
    question: string;
};

export function PdfQuestion({ index, question }: PdfQuestionProps) {
    return (
        <div className="pdf-keep-together rounded-[18px] border border-[#201911] bg-[#f4ead4] px-5 py-5 text-[#22170f]">
            <p className="font-display text-lg text-[#3b2a18]">
                {String(index).padStart(2, "0")}. {question}
            </p>
            <div className="mt-5 space-y-3">
                <div className="h-px bg-[#9a7b49]/35" />
                <div className="h-px bg-[#9a7b49]/25" />
                <div className="h-px bg-[#9a7b49]/25" />
            </div>
        </div>
    );
}
