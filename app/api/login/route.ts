import { NextResponse } from "next/server";
import{ generateToken} from "@/lib/jwt"

//post api
export async function POST(request:Request) 
{
    const {email,password}= await request.json();
    
    //demo credentials
if (email === "admin@company.com" && password === "123456")
{
    const token = generateToken({email});
    
    return NextResponse.json({
         message: "Login successful" 
        });
       
        return NextResponse.json(
            { message: "Invalid credentials" },
             { status: 401 });
    };
}
