import mongoose from "mongoose";
import { type } from "node:os";
import { stringify } from "node:querystring";

const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
     email:{
        type: String,
        required: true
    },
});
export default mongoose.model.User||mongoose.model("User",UserSchema);
    
