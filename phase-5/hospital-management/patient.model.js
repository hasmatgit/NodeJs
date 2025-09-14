import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    diagonsedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gloodGrout:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    admitedIn:{
        type: mongoose.String.Types.ObjectId,
        ref: Hospital
    }
} ,{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);