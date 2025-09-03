import { Verse as IVerse } from "@/lib/constant";
import { cn } from "@/lib/utils";

interface VerseProps {
    verse: IVerse;
    label: string;
    className?: string;
}

export function Verse({ verse, label, className }: VerseProps) {
    return (
        <div
            className={cn("bg-gray-100 verse rounded-2xl p-4", className)}
        >
            <h3 className="text-lg font-semibold">{label}</h3>

            <p className="text-2xl my-5 leading-snug">
                {verse.text}
            </p>

            <p className="text-left text-gray-600">- {verse.verse}</p>
        </div>
    )
}