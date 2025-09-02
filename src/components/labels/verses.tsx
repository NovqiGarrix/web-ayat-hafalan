'use client';

import { AYAT_HAFALAN } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
                <div
                    key={verse.order}
                    className="bg-gray-100 verse rounded-2xl p-4"
                >
                    <h3 className="text-lg font-semibold">{labelData.label}{verse.order}. {verse.label}</h3>

                    <p className="text-2xl my-5 leading-snug">
                        {verse.text}
                    </p>

                    <p className="text-left text-gray-600">- {verse.verse}</p>
                </div>
            ))}
        </div>
    )
}