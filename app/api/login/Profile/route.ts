import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { error } from "console";

export async function GET(request:Request) 
{
    const authHeader = request.headers.get("Authorization");

    if(!authHeader)
    {
        return NextResponse.json(

            { message : "unauthorize"},
            {status:401}
        );
    }
    const token = authHeader.split("")[1];

    try{
        const user = verifyToken(token);
        return NextResponse.json(
            {
                message : "protected data",
                user,
            });
    }
    catch(error) {
        return NextResponse.json(
           { message :"invalid token"},
           {status:401}
        );
    }
}