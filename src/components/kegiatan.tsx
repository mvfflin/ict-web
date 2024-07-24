import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    EffectCube,
    EffectCards,
    EffectFade,
    EffectFlip,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CSSProperties, useState } from "react";

// fotos
import codingpres from "@/assets/images/codingpresentasi.jpg";
import keyboardpres from "@/assets/images/keyboardpresentasi.jpg";
import roadwaycharity from "@/assets/images/roadwaycharity.jpg";
import Image, { StaticImageData } from "next/image";

export default function KegiatanSection() {
    const [currentSlide, setSlide] = useState<number>(0);

    const kegiatans: Array<{
        judul: string;
        description?: string;
        image: StaticImageData;
    }> = [
        {
            judul: "Belajar web development",
            // description: "lorem100asd",
            image: codingpres,
        },
        {
            judul: "Roadway Charity ICT x JC",
            // description: "lorem1000asdiyadia",
            image: roadwaycharity,
        },
        {
            judul: "Belajar hardware",
            // description: "lorem123713suyc",
            image: keyboardpres,
        },
    ];

    return (
        <section
            id="kegiatan"
            className="h-auto py-40 px-5 lg:px-20 bg-neutral-900 m-0"
        >
            <h1 className="text-3xl lg:text-5xl font-bold font-helvetica mb-10 text-white">
                Kegiatan ICT
            </h1>
            <hr className="w-auto" />
            <div className="h-auto bg-black mt-8 rounded-md bg-opacity-50 lg:p-32 p-5">
                <Swiper
                    loop
                    style={
                        {
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        } as CSSProperties
                    }
                    color="white"
                    className="h-auto pb-20"
                    modules={[Pagination, Autoplay]}
                    // navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    spaceBetween={1000}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={(swiper) => setSlide(swiper.realIndex)}
                    grabCursor
                    freeMode
                >
                    {kegiatans.map((kegiatan, index) => {
                        return (
                            <SwiperSlide className="mb-10" key={index}>
                                <div className="text-center" key={index}>
                                    <Image
                                        alt={kegiatan.judul}
                                        src={kegiatan.image}
                                        width={1200}
                                        height={1200}
                                        className="mx-auto w-full md:w-full aspect-square md:aspect-video object-cover bg-cover bg-center bg-no-repeat"
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <h1 className="text-xl text-center mt-5 md:text-3xl text-white font-bold font-helvetica">
                    {kegiatans[currentSlide].judul}
                </h1>
                <h1 className="text-white text-lg md:text-xl mb-5 block text-justify mt-10">
                    Jangan lewatkan kesempatan emas ini untuk mengembangkan
                    potensimu di bidang teknologi! Segera daftarkan dirimu di
                    Ekstrakurikuler ICT saat Masa Orientasi Siswa! Tempat
                    terbatas! Hubungi kakak-kakak panitia ICT untuk informasi
                    lebih lanjut. Bersama ICT, raih mimpimu di dunia digital!
                </h1>
            </div>
        </section>
    );
}
