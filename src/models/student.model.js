import mongoose from "mongoose";

const studentSchena = new mongoose.SchemaTypeOptions({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    programme: {
        type: String,
        required: true,
    },
    residence: {
        type: String,
        required: true,
    },
});

export default mongoose.nodel("Student", studentSchema);