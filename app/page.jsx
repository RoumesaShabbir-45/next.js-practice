"use client";

import { useState ,useEffect} from "react";


export default function HomePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
     const [user, setuser] = useState([]);
////Get data
const fetchUser=async()=>{
    const res = await fetch("/api/users");
    const data =await res.json();
    setuser(data.data)
    console.log(data.data)
}
//load data
useEffect(()=>{
fetchUser();
},[])
     //data handle
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
            <hr />
            <h2>User list</h2>{
                user.map((user)=>
                <div key={user._id}>{user.name}={user.email}</div>
                 )}
                 </div>
                );
            }
    