interface BlogPageProps{
    params: Promise<{
        slug:string;
    }>;
}
const BlogData:Record<string ,{title:string; content:string}>={
    "next.js":{
        title:"next.js basic",
        content:"next.js is the React frame work for production it makes building.",
    },
    "react":{
        title:"React basic",
        content:"React is the java script library use to amke the user interface.",
},
 "node":{
        title:"Node basic",
        content:"node.js is java script runtime build on chrom's v8 JavaScript.",
},
};
export default async function  BlogDetailPage({params}:BlogPageProps)
{
    const{slug}= await params;
    const blog= BlogData[slug];
    
    if(!blog){
        return <h1>Blog not found</h1>;
    }
    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Slug URL:{slug}</p>
        </div>
    );
}
