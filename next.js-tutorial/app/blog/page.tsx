import type{ Metadata} from 'next';

export const metadata: Metadata = {
title: 'Blog | Roumesa Decodes',
description: 'Read the latest blog posts from Roumesa Decodes, where I share my thoughts and experiences on various topics, including technology, programming, and personal development.',
 openGraph: {
    title: 'Blog | Roumesa Decodes',
    description: 'Read the latest blog posts from Roumesa Decodes, where I share my thoughts and experiences on various topics, including technology, programming, and personal development.',
    images: ["next.js-tutorial/public/og.jpg"]
 },
 twitter: {
    card: 'summary_large_image',
    title: 'Blog | Roumesa Decodes',
    description: 'Read the latest blog posts from Roumesa Decodes, where I share my thoughts and experiences on various topics, including technology, programming, and personal development.',
    images: ["next.js-tutorial/public/og.jpg"]
},
}
export default function BlogPage(){
    return(
        <div>
            <h1>Blog</h1>
            <p>Welcome to my blog</p>
        </div>
    );
}