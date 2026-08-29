// app/page.jsx
"use client";

import {useRouter} from "next/navigation";

export  default function DashboardPage( ){
    const router = useRouter();

    function handleclick(){
        router.push("/");
    }
    return(
        <div>
            <h1>Dashboard Page</h1>
            <p>This is dashboard page of next.js application</p>
            <button onClick={handleclick}>Go to Home</button>
        </div>
    );
}