// Daftar Template By @WillisRH from KIR SMAN 12
import mongoose, { Schema, Document } from "mongoose";

interface IDaftarICT extends Document {
    id: number;
    name: string;
    phoneNumber: string;
    class: string;
    agreement: boolean;
    alasan: string; // Add alasan field
    divisi: string; // Add eskul field
}

const ssChema = mongoose.Schema;

const DaftarICTSchema: Schema = new ssChema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gugus: { type: String, required: true },
    // agreement: { type: Boolean, required: true },
    alasan: { type: String, required: true }, // Define alasan field
    divisi: { type: String, required: true }, // Define eskul field
});

export const DaftarICT =
    mongoose.models?.DaftarICT || mongoose.model("DaftarICT", DaftarICTSchema);
