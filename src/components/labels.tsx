'use client';

import { AYAT_HAFALAN } from "@/lib/constant";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Labels() {

    useGSAP(() => {
        gsap.from('.label', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    return (
        <div className="mt-7 grid grid-cols-2 gap-4">
            {AYAT_HAFALAN.map((item) => (
                <Link href={`/labels/${item.label}`} key={item.label}>
                    <div
                        className="label bg-gray-100 min-h-60 rounded-2xl p-4 flex flex-col justify-between"
                    >
                        <h5 className="text-lg font-semibold">{item.title}</h5>
                        <h3 className="text-6xl font-bold">{item.label}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}