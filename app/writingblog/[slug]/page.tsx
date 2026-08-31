import {getPostDataBySlug} from "@/lib/post";
import type{ Metadata} from 'next';

type Props = {
    params:Promise <{ slug: string }>;
};
//Dynamic SEO
export async function generateMetadata({ params }:Props):Promise<Metadata> 
{
    const { slug } = await params;
    const post = await getPostDataBySlug(slug);
    
    if (!post) {
    return {
        title: 'Post Not Found',
    };
}
     return {
        title: 'Post.title',
        description: 'Post.description',
        openGraph: {
            title: 'post.title',
            description: 'post.description',  
            images:["next.js-tutorial/public/og.jpg"],
    },
};
}

export default async function PostPage({params }: Props) 
{
    const { slug } = await params;
    const post = await getPostDataBySlug(slug);

    if(!post){  
        return 
            <h1>Post Not Found</h1>;
    }
    return (
        <article>
        <h1> {post.title} </h1>
        <p> {post.description} </p>
        <p> {post.content} </p>
        </article>
    );
}
