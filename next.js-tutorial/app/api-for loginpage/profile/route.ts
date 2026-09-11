import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request:Request) 
{
    const authHeader = request.headers.get("authorization");
    console.log("Backend recieved header:", authHeader);

    if(!authHeader)
    {        return NextResponse.json(
            { message : "unauthorize"},
            {status:401}
        );
    }
    const token = authHeader.split(" ")[1];

    try{
        const user = verifyToken(token);
        return NextResponse.json(
            {
                message : "protected data",
                user,
            });
    }
    catch (error) {
        return NextResponse.json(
           { message :"invalid token"},
           {status:401}
        );
    }
}