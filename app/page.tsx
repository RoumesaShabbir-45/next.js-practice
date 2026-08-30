import { json } from "node:stream/consumers";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function home() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',
        { cache:"no-store"
    });
    if (!res.ok){
        throw new Error('failed to fecth posts');
    }

    const posts: Post[] = await res.json();

    return (
        <div>
            <h1>posts fetch data by server</h1>
            <ul>
                {posts.slice(0, 5).map(post =>
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </div>
    );

}