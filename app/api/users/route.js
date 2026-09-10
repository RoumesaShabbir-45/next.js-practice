import {connectDB} from "@/lib/mongoose";
import {NextResponse} from "next/server";
import  User from "@/models/User";
//post api
export async function POST(req) {
        try{
            await connectDB();
            const body =await req.json();
            const user= await User.create(body);

            return NextResponse.json({
                message:"user created successfully",
                data:user
            })
    
        } catch(err){
            return NextResponse.json({
                message:"Error creating user",
                error:err.message
            });
        }
    }
    //Get api
    export async function GET() {
        try{
            await connectDB();
            const user= await User.find();

            
            return NextResponse.json({
                message:"user fetch successfully",
                data:user
            })
        }catch(err){
            return NextResponse.json({
                message:"Error creating user",
                error:err.message
            });
        
    }
}
