import clientPromise from "@/lib/mongodb";
import { connected } from "node:process";

export async function GET() {
    const client= await clientPromise;

    const db= client.db("next");

    return Response.json({
        message: "DB connected successfully"
    });
    
}