import {NextResponse}from"next/server";

const posts = [
    {id:1,title:"learn Next.js"},
    {id:2,title:"learn react"},
    {id:3,title:"learn javascript"},
];

export async function GET() {
    return NextResponse.json(posts);
};