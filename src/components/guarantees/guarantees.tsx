'use client'

import { AYAT_JAMINAN } from "@/lib/constant"
import { Verse } from "../labels/verse"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export function Guarantees() {

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
            {AYAT_JAMINAN.map((item) => (
                <Verse key={item.order} label={item.label} verse={item} />
            ))}
        </div>
    )

}