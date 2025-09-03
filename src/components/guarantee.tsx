'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export function Guarantee() {

    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(ref.current!, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        })
    });

    return (
        <Link href="/guarantees">
            <div ref={ref} className="flex flex-col items-center justify-center mt-6 min-h-36 relative w-full rounded-2xl p-4 bg-gradient-to-tr from-purple-100 via-pink-100 to-red-100">
                {/* <h5>Petobat Baru</h5> */}
                <h3 className="text-3xl font-bold">5 Ayat-ayat Jaminan</h3>
            </div>
        </Link>
    )

}