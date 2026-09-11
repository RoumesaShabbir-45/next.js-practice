import Link from "next/link";
import {getPostData} from "@/lib 1/post";

export default function WritingBlogPage() {
    const posts = getPostData();
return (
    <div>
        <h1>Writing Blog</h1>
        <ul>
            {posts.map((post: any)=> (
                <li key={post.slug}>
                    <Link href={`/writingblog/${post.slug}`}>
                       {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>

        );
    }
