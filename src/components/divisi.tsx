import Image from "next/image";
import CodeImage from "@/assets/images/code.png";
import CPUImage from "@/assets/images/cpu.png";
import MulmedImage from "@/assets/images/mulmed.png";
import RobotImage from "@/assets/images/robot.png";

export default function DivisiSection() {
    const divisions = [
        {
            title: "Software",
            description:
                "Divisi yang berfokus pada pengembangan software pada komputer seperti website, dan aplikasi.",
            image: CodeImage,
        },
        {
            title: "Hardware",
            description:
                "Divisi yang berfokus pada perangkat keras seperti CPU, dan barang elektronik lainnya.",
            image: CPUImage,
        },
        {
            title: "Multimedia",
            description:
                "Divisi yang berfokus pada editing dan visual seperti poster, flyer, edit video, dan sebagainya.",
            image: MulmedImage,
        },
        {
            title: "Robotik",
            description:
                "Divisi yang berfokus pada robotika seperti Arduino, ESP32, dan sebagainya.",
            image: RobotImage,
        },
    ];

    return (
        <section
            id="divisi"
            className="h-auto py-40 px-5 lg:px-20 bg-neutral-800 m-0"
        >
            <div className="text-white text-center">
                <h1 className="text-3xl lg:text-5xl font-bold font-helvetica mb-10">
                    DIVISI DIVISI ICT
                </h1>
                {/* <hr className="my-5" /> */}
                <ul className="flex-row lg:flex-col-4 lg:flex justify-center gap-10">
                    {divisions.map((divisi, index) => {
                        return (
                            <li className="lg:w-96" key={index}>
                                <Image
                                    alt="logo"
                                    src={divisi.image}
                                    width={150}
                                    height={150}
                                    style={{
                                        backgroundColor: "#383433",
                                    }}
                                    className="focus:scale-110 focus:shadow-lg focus:shadow-white hover:scale-110 transition-all cursor-pointer hover:shadow-lg hover:shadow-white h-auto mx-auto my-5 rounded-full aspect-square object-contain"
                                />
                                <h1 className="font-bold font-helvetica text-2xl my-3">
                                    {divisi.title}
                                </h1>
                                <h2 className="text-wrap font-minecraft">
                                    {divisi.description}
                                </h2>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
