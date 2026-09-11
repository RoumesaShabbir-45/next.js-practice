import {NextResponse} from "next/server";
export async function POST(request: Request){
    const {email, password} = await request.json();

    //demo credentials
if (email === "admin@company.com" && password === "123456") {

    const response = NextResponse.json({
         message: "Login successful" 
        });

        //set auth cookie
        response.cookies.set("auth", "true", { 
            httpOnly: true, 
            path: "/"
         });

        return response;
    } 
        return NextResponse.json(
            { message: "Invalid credentials" },
             { status: 401 });
    }
   
     
