import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { ParticleComponent } from "@/components/particle";
import HomeSection from "@/components/home";
import AboutSection from "@/components/about";
import DivisiSection from "@/components/divisi";
import KegiatanSection from "@/components/kegiatan";
import PengurusSection from "@/components/pengurus";
import FooterSection from "@/components/footer";
import PendaftaranSection from "@/components/pendaftaran";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <ParticleComponent />
            <main className={`h-auto w-auto`}>
                <HomeSection />
                <AboutSection />
                <DivisiSection />
                <KegiatanSection />
                <PengurusSection />
                <PendaftaranSection />
                <FooterSection />
            </main>
        </>
    );
}
