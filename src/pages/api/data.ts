// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from "@/lib/connectDB";
import { DaftarICT } from "@/models/DaftarSchema";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//     name: string;
// };

const transformPhoneNumber = (phoneNumber: string): string => {
    if (phoneNumber.startsWith("0")) {
        return "62" + phoneNumber.slice(1);
    }
    return phoneNumber;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method == "POST") {
        const jsonData = req.body;
        await connectToDatabase();
        console.log(jsonData);
        const { name, phoneNumber, gugus, alasan, eskul } = jsonData;
        // console.log(jsonData)

        if (!name || !phoneNumber || !gugus || !alasan || !eskul) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let randomNum = Math.floor(Math.random() * 90000) + 10000;
        let findNum = await DaftarICT.findOne({ id: randomNum });

        while (findNum) {
            randomNum = Math.floor(Math.random() * 90000) + 10000;
            findNum = await DaftarICT.findOne({ id: randomNum });
            if (!findNum) {
                break;
            }
        }

        const nama = name.toUpperCase();
        const transformedPhoneNumber = transformPhoneNumber(phoneNumber);
        // Asynchronously call the external API, but don't block the main flow if it fails
        // axios
        //     .post(
        //         `${waapi}/addgroup?phoneNumber=${transformedPhoneNumber}&name=${nama}`
        //     )
        //     .catch((err) => {
        //         console.error("Error calling waapi:", err);
        //     });
        const newDaftarICT = new DaftarICT({
            id: randomNum,
            name: nama,
            phoneNumber: transformedPhoneNumber,
            gugus,
            alasan,
            divisi: eskul,
        });
        await newDaftarICT.save();
        return res.status(200).json(newDaftarICT);
    } else if (req.method == "GET") {
        await connectToDatabase();
        const data = await DaftarICT.find({});
        console.log(data);
        res.status(200).json(data);
    } else if (req.method == "DELETE") {
        await connectToDatabase();
        const { id } = req.body;
        const deleteUser = await DaftarICT.findOneAndDelete({ id: id });
        if (deleteUser) {
            return res.status(200).json({ msg: "Berhasil delete!" });
        } else {
            return res.status(401).json({ msg: "Gagal delete!" });
        }
    }
}
