import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        reqrited: true
    },
    salary: {
        type: Number,
        reqrited: true
    },
    qualification: {
        type: String,
        reqrited: true
    },
    experienceInYears: {
        type: Number,
        reqrited: 0
    },
    worksInHospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
} ,{timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);