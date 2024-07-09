import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Pendaftar() {
    const [data, setData] = useState<Array<any>>([]);

    const deleteUser = async (id: number) => {
        const res = await axios.delete("/api/data", { data: { id } });
        const data = await res.data;

        if (res.status == 200) {
            toast.success("Berhasil menghapus data!", { autoClose: 3000 });
        } else {
            toast.error("Gagal menghapus data!", { autoClose: 3000 });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/api/data");
            const data = res.data;
            setData(data);
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <main className="p-32">
            <h1 className="text-3xl font-bold font-ubuntu">
                List Pendaftar ICT
            </h1>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nomor WA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gugus
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Alasan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Divisi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((pendaftar, index) => {
                            return (
                                <tr
                                    className="bg-white border-b text-center"
                                    key={index}
                                >
                                    <td>{pendaftar.id}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {pendaftar.name}
                                    </th>
                                    <td>{pendaftar.phoneNumber}</td>
                                    <td>{pendaftar.gugus}</td>
                                    <td>{pendaftar.alasan}</td>
                                    <td>{pendaftar.divisi}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteUser(pendaftar.id);
                                            }}
                                            className="mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </main>
    );
}
