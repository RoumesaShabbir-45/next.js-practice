"use client";

import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};
export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState("");

    async function getPosts() {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
    }

    async function createPost() {
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });
        setTitle("");
        setContent("");
        getPosts();
    }

    async function patchPost() {
        const response = await fetch(`/api/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });
        setId("");
        setTitle("");
        setContent("");
        getPosts();
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>GET PATCH AND POST API</h1>
            <button onClick={getPosts}> GET POSTS</button>

            <br />
            <div style={{ marginTop: 20 }}></div>
            <input
                placeholder="id (For PATCH)"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <div style={{ marginTop: 10 }}>
                <button onClick={createPost}>POST</button>
                <button onClick={patchPost}>PATCH</button>
            </div>

            <pre> {JSON.stringify(posts, null, 2)}</pre>
        </div>
    );
}







