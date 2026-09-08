import mongoose from "mongoose";
import { type } from "node:os";

const UseSchema= new MessageChannel.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
})
export default mongoose.model.User||mongoose.model("user".UseSchema)