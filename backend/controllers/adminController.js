import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";


// API for adding doctor
const addDoctor = async (req, res) => {
    try {

        console.log('Cloud Name:', process.env.CLOUDINARY_NAME);
        console.log('API Key:', process.env.CLOUDINARY_API_KEY);
        console.log('API Secret:', process.env.CLOUDINARY_SECRET_KEY);


        const { name, email, password, specialty, degree, experience, about, available, fees, address } = req.body;
        const imageFile = req.file

        // console.log({ name, email, password, specialty, degree, experience, about, available, fees, address, imageFile });

        //checking for all data to add doctor
        if (!name || !email || !password || !specialty || !degree || !experience || !about || !fees || !address || !imageFile) {
            return res.json({success: false, message: "Please enter all fields"});
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"});
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"});
        }

        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            specialty,
            degree,
            experience,
            about,
            available,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({success: true, message: "Doctor added successfully"});

    } catch (error) {
        console.log("Error in addDoctor: ", error);
        res.json({ success:false, message: error.message });
    }
};

export { addDoctor };