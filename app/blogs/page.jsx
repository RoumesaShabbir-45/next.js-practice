import Link from "next/link";

const blogs=[
        {slug:"next.js",title:"next.js basic"},
        {slug:"react",title:"React basic"},
        {slug:"node",title:"Node basic"},
]
export default function BlogPage(){
    return(
        <div>
            <h1>Blog Page</h1>
            <ul>
                 {blogs.map((blogs)=>(
                    <li key={blogs.slug}>
                    <Link href={`/blogs/${blogs.slug}`}>
                    {blogs.title}
                    </Link>
                    </li>
                 ))}
                </ul>
        </div>
    );
}