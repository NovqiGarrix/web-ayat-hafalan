'use client';

import { AYAT_HAFALAN } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Verse } from "./verse";

interface VersesProps {
    labelData: typeof AYAT_HAFALAN[number];
}

gsap.registerPlugin(useGSAP);

export function Verses({ labelData }: VersesProps) {

    useGSAP(() => {
        gsap.from('.verse', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    return (
        <div className="grid grid-cols-1 gap-4 mt-6">
            {labelData.verses.map((verse) => (
                <Verse key={verse.order} label={`${labelData.label}${verse.order}. ${verse.label}`} verse={verse} />
            ))}
        </div>
    )
}