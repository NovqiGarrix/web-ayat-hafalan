import { Guarantee } from "@/components/guarantee";
import { Labels } from "@/components/labels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HafalAyat.fun",
  description: "HafalAyat.fun adalah aplikasi yang menyediakan ayat-ayat hafalan untuk pembinaan kelompok PA PERKANTAS",
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 gap-16 sm:p-20">
      <main className="pt-3">
        <h1 className="text-4xl font-bold">Ayat Hafalan</h1>

        <Guarantee />

        {/* List ayat hafalan */}
        <Labels />
      </main>
      <footer className="flex flex-wrap items-center mt-8 justify-center">
        <p className="font-base italic">Tuhan memberkati</p>
      </footer>
    </div>
  );
}
