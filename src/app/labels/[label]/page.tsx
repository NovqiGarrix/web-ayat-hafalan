import { Verses } from "@/components/labels/verses";
import { Button } from "@/components/ui/button";
import { AYAT_HAFALAN } from "@/lib/constant";
import { ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface LabelPageProps {
    params: Promise<{ label: string }>;
}

export async function generateStaticParams() {
    return AYAT_HAFALAN.map(item => ({ label: item.label }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ label: string }> }
): Promise<Metadata> {
    const { label } = await params;
    const labelData = AYAT_HAFALAN.find(item => item.label === label);

    if (!labelData) {
        notFound();
    }

    const baseTitle = `${labelData.label}. ${labelData.title} | HafalAyat.fun`;
    const description = `Daftar ayat hafalan untuk ${labelData.label}. ${labelData.title} dari HafalAyat.fun`;

    const canonical = `/labels/${encodeURIComponent(labelData.label)}`;

    return {
        title: baseTitle,
        description,
        alternates: { canonical },
        openGraph: {
            title: baseTitle,
            description,
            url: canonical,
            type: "article"
        },
        twitter: {
            card: "summary",
            title: baseTitle,
            description
        }
    };
}

export default async function LabelPage({ params }: LabelPageProps) {

    const { label } = await params;

    const labelData = AYAT_HAFALAN.find((item) => item.label === label);
    if (!labelData) {
        notFound();
    }

    return (
        <div className="font-sans p-8 gap-16 sm:p-20">
            <main className="pt-10">
                <Button asChild>
                    <Link href="/">
                        <ChevronLeftIcon className="size-4" /> Kembali
                    </Link>
                </Button>
                <h1 className="text-4xl font-bold mt-8">{labelData.label}. {labelData.title}</h1>

                {/* List ayats */}
                <Verses labelData={labelData} />
            </main>
            <footer className="flex items-center justify-center mt-8">
                <p className="font-base italic">Tuhan memberkati</p>
            </footer>
        </div>
    )

}