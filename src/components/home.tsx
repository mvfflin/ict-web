import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeSection() {
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    function type(words: Array<string>, id: string) {
        if (document.getElementById(id)) {
            currentWord = words[i];
            // if (isDeleting) {
            //     document.getElementById("typewriter")!.textContent =
            //         currentWord.substring(0, j - 1);
            //     j--;
            //     if (j == 0) {
            //         isDeleting = false;
            //         i++;
            //         if (i == words.length) {
            //             i = 0;
            //         }
            //     }
            // } else {
            document.getElementById(id)!.textContent = currentWord.substring(
                0,
                j + 1
            );
            j++;
            if (j == currentWord.length) {
                isDeleting = true;
            }
            // }
            setTimeout(function () {
                type(["ICT SMAN 5 Kota Bekasi"], id);
            }, 100);
        }
    }

    let i2 = 0;
    let j2 = 0;
    let currentWord2 = "";
    let isDeleting2 = false;
    function type2(words: Array<string>, id: string) {
        if (document.getElementById(id)) {
            currentWord2 = words[i];
            // if (isDeleting) {
            //     document.getElementById("typewriter")!.textContent =
            //         currentWord.substring(0, j - 1);
            //     j--;
            //     if (j == 0) {
            //         isDeleting = false;
            //         i++;
            //         if (i == words.length) {
            //             i = 0;
            //         }
            //     }
            // } else {
            document.getElementById(id)!.textContent = currentWord2.substring(
                0,
                j2 + 1
            );
            j2++;
            if (j2 == currentWord2.length) {
                isDeleting2 = true;
            }
            // }
            setTimeout(function () {
                type2(["Information, Communication, and Technology"], id);
            }, 100);
        }
    }

    useEffect(() => {
        type(["ICT SMAN 5 Kota Bekasi"], "typewriter");
        type2(["Information, Communication, and Technology"], "typewriter2");
    }, []);

    return (
        <section id="home" className="h-screen px-5 lg:px-20 py-32 lg:py-24">
            <div className="w-full mx-auto text-center text-white slide-down">
                <Image
                    alt="logo"
                    src="/ICT.jpg"
                    width={150}
                    height={150}
                    style={{ backgroundColor: "#383433" }}
                    className="h-auto mx-auto my-5 rounded-full aspect-square object-contain"
                />
                <h1
                    className="text-2xl lg:text-5xl text-center font-bold font-helvetica"
                    id="typewriter"
                >
                    ICT SMAN 5 Kota Bekasi
                </h1>
                <h2
                    className="text-lg lg:text-3xl mt-2 mb-20 font-thin font-typoslab"
                    id="typewriter2"
                >
                    Information, Communication, and Technology
                </h2>
                <Link
                    href={"#about"}
                    className="transition-all lg:text-lg lg:hover:text-xl bg-white bg-opacity-0 hover:bg-opacity-100 border-2 border-white hover:text-black text-white py-2 mt-20 px-14"
                >
                    See More
                </Link>
                {/* <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
            </div>
        </section>
    );
}
