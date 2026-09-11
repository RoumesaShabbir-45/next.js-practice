"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setuser] = useState([]);
    const [editId, setEditId] = useState(null);
    ////Get data
    const fetchUser = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setuser(data.data);
        console.log(data.data);
    };
    //load data
    useEffect(() => {
        fetchUser();
    }, []);

    //create user or updated user
    const handleSubmit = async (e) => {
        e.preventDefault();
        //updated user
        if (editId) {
            await fetch(`/api/users/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name })
            });
            alert("user update");
            setEditId(null);
            setName("");
            setEmail("");
            fetchUser();
        } else {
            //Add user
            const res = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name }),
            });
            const data = await res.json();
            console.log(data)
            alert("user created");
        }
        setName("");
        setEmail("");

        fetchUser();
    };

    const handelEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setEditId(user._id);
    }

    //delete handle
    const handleDelete = async(id)=>{
        await fetch(`/api/users/${id}`,{
         method:"DELETE"
        });
    alert("user Delete");
    fetchUser();
}
    return (
        <div>
            <h1>{editId ? "Update User" : "Create User"}</h1>
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
                <button type="submit">{editId ? "Update User" : "Create User"}</button>

            </form>
            <hr />
            <h2>Users list</h2>{
                user.map((user) =>
                    <div key={user._id}>{user.name} - {user.email}

                        <button onClick={() => handelEdit(user)}>Edit User</button>
                        <button onClick={() => handleDelete(user._id)}>Delete User</button>
                    </div>
                )}
        </div>
    );
}