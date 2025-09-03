import { Guarantees } from "@/components/guarantees/guarantees";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "5 Ayat-ayat Jaminan | HafalAyat.fun",
    description: "5 ayat-ayat jaminan untuk petobat baru",
    alternates: { canonical: "/guarantees" },
    openGraph: {
        title: "5 Ayat-ayat Jaminan | HafalAyat.fun",
        description: "5 ayat-ayat jaminan untuk petobat baru",
        url: "/guarantees",
        type: "article"
    },
    twitter: {
        card: "summary",
        title: "5 Ayat-ayat Jaminan | HafalAyat.fun",
        description: "5 ayat-ayat jaminan untuk petobat baru"
    }
}

export default async function GuaranteesPage() {

    return (
        <div className="font-sans p-8 gap-16 sm:p-20">
            <main className="pt-3">
                <Button asChild>
                    <Link href="/">
                        <ChevronLeftIcon className="size-4" /> Kembali
                    </Link>
                </Button>
                <h1 className="text-4xl font-bold mt-8">5 Ayat-ayat Jaminan</h1>

                {/* List ayats */}
                <Guarantees />
            </main>
            <footer className="flex items-center justify-center mt-8">
                <p className="font-base italic">Tuhan memberkati</p>
            </footer>
        </div>
    )

}