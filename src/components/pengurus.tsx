import { Swiper, SwiperSlide } from "swiper/react";
import placeholderImage from "@/assets/images/placeholder.png";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { CSSProperties } from "react";

export default function PengurusSection() {
    const bphs = [
        {
            nama: "Callysta Meichan K. L.",
            jabatan: "Ketua ICT",
            image: placeholderImage,
        },
        {
            nama: "Kafka Zaru S.",
            jabatan: "Wakil ICT",
            image: placeholderImage,
        },
        {
            nama: "Nandana Praba A.",
            jabatan: "Sekretaris 1",
            image: placeholderImage,
        },
        {
            nama: "Azizah Khairani",
            jabatan: "Sekretaris 2",
            image: placeholderImage,
        },
        {
            nama: "Ghatfan Zharif B.",
            jabatan: "Bendahara 1",
            image: placeholderImage,
        },
        {
            nama: "M. Haikal. A. P",
            jabatan: "Bendahara 2",
            image: placeholderImage,
        },
        {
            nama: "M. Daffa Apriza",
            jabatan: "Kadiv Litbang",
            image: placeholderImage,
        },
        {
            nama: "Ismail Daffa R.",
            jabatan: "Humas",
            image: placeholderImage,
        },
        {
            nama: "Dylan Joseph B.",
            jabatan: "Humas",
            image: placeholderImage,
        },
        {
            nama: "Nada Savaira",
            jabatan: "Humas",
            image: placeholderImage,
        },
        {
            nama: "Rizky Fadillah",
            jabatan: "Kadiv Danus",
            image: placeholderImage,
        },
        {
            nama: "Fatihul Ihsan R.",
            jabatan: "Manager Software",
            image: placeholderImage,
        },
        {
            nama: "Ayudya Lintang",
            jabatan: "Manager Hardware",
            image: placeholderImage,
        },
        {
            nama: "Hossam Maulana D.",
            jabatan: "Manager Multimedia",
            image: placeholderImage,
        },
        {
            nama: "Arya Bima P.",
            jabatan: "Manager Robotik",
            image: placeholderImage,
        },
    ];

    return (
        <section
            id="pengurus"
            className="h-auto py-40 px-5 lg:px-20 bg-neutral-800 m-0"
        >
            <h1 className="text-3xl lg:text-5xl font-bold font-helvetica mb-10 text-white text-center">
                BPH ICT 2023/2024
            </h1>
            <Swiper
                // slidesPerView={5}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={50}
                pagination
                modules={[Pagination]}
                style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    } as CSSProperties
                }
            >
                {bphs.map((bph, index) => {
                    return (
                        <SwiperSlide key={index} className="mb-10 w-max">
                            <div
                                className="bg-white py-5 px-5 rounded-md
                            "
                            >
                                <Image
                                    alt={bph.nama}
                                    src={bph.image}
                                    width={224}
                                    height={224}
                                    className="w-56 aspect-square rounded-md object-cover mx-auto mb-7"
                                />
                                <h1 className="text-xl font-bold font-ubuntu text-center w-max mx-auto">
                                    {bph.nama}
                                </h1>
                                <h2 className="text-lg font-helvetica w-max mx-auto">
                                    {bph.jabatan}
                                </h2>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
