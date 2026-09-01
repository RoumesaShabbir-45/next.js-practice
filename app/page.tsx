import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function HomePage(){
    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
  return(
        <div>
            <h1>Posts from Get API</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
} 