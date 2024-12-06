import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    specialty: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: true},
    fee: { type: Number, required: true},
    address: { type: String, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Boject, default: {} },
}, {minimize: false});

const doctorModel = mongoose.models.doctor || mongoose.model("Doctor", doctorSchema);

export default doctorModel;