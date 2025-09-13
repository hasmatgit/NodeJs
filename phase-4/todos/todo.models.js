import express from "express";
import { SubTodo } from "./sub_todo.models";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schemas.Types.ObjectId,
        ref: "User"
    },
    SubTodo:[
        {
            type: mongoose.Schemas.Types.ObjectId,
            ref:"SubTodo"
        }
    ] // Array of Sub-Todos
},{ timestamps: true});

export const Todo = express.model("Todo", todoSchema);