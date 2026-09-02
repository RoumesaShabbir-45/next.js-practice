import {NextResponse}from"next/server";

let posts = [
    {id:1,title:"learn Next.js",content:"Next.js is a React framework for production"},
    {id:2,title:"learn react",content:"React is a JavaScript library for building user interfaces"},
    {id:3,title:"learn javascript",content:"JavaScript is a programming language that conforms to the ECMAScript specification"},
];

export async function GET() {
    return NextResponse.json(posts);
}

//post api
export async function POST(request: Request) {
    const body = await request.json();
     
    const newPost = {
        id: posts.length + 1,
        title: body.title,
        content: body.content
    };
    posts.push(newPost);
    return NextResponse.json({
        message: "Post created successfully",
        post: body,
},{
 status: 201,
});
}