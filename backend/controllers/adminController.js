


// API for adding doctor
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, specialty, degree, experience, about, available, fee, address } = req.body;
        const imageFile = req.file

        console.log({ name, email, password, specialty, degree, experience, about, available, fee, address, imageFile });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export { addDoctor };