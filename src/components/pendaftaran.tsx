import Link from "next/link";

export default function PendaftaranSection() {
    return (
        <section
            id="pendaftaran"
            className="h-auto py-40 px-5 lg:px-20 bg-neutral-900 m-0"
        >
            <h1 className="text-3xl lg:text-5xl font-bold font-helvetica mb-10 text-white text-center">
                Pendaftaran ICT
            </h1>
            <div className="text-center">
                <Link href={"/daftar"}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="text-lg lg:text-3xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Daftar ICT Sekarang!
                        </span>
                    </button>
                </Link>
            </div>
            <h1 className="text-md lg:text-xl text-center text-white font-ubuntu mt-10">
                Jika ada pertanyaan, kalian bisa hubungi WA:
            </h1>
            <h2 className="text-sm lg:text-lg text-center text-white font-ubuntu">
                081280997703 (Fatih)
            </h2>
        </section>
    );
}
