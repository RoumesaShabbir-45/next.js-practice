"use client";

import { useState } from "react";


export default function HomePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit= async(e)=>{e.preventDefault();
        try{
        const res = await fetch("/api/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"
            },
            body: JSON.stringify({email,name})
        });
        const data = await res.json();
        console.log(data)
        alert ("user created");

        setName("");
        setEmail("");
         } catch (err) {
      console.error("Error creating user:", err);}
        };
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <button type="submit">Create User</button>

            </form>
        </div>
    );

}