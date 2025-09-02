import { Labels } from "@/components/labels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HafalAyat.fun",
  description: "HafalAyat.fun adalah aplikasi yang menyediakan ayat-ayat hafalan untuk pembinaan kelompok PA PERKANTAS",
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="pt-10">
        <h1 className="text-4xl font-bold">Ayat Hafalan</h1>

        {/* List ayat hafalan */}
        <Labels />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Tuhan memberkati */}
      </footer>
    </div>
  );
}
