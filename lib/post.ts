export type post = {
    slug: string;
    title: string;
    description: string;
    content: string;
};
export const posts: post[] = [
    { slug: 'learn-nextjs', 
        title: 'Learn Next.js', 
        description: 'A blog post about learning Next.js',
        content:'Next.js is a React framework that enables server-side rendering and static site generation for Next.js applications',
    },
    
   { slug: 'learn-react', 
        title: 'Learn react', 
        description: 'A blog post about learning react',
        content:'react is a React framework that enables server-side rendering and static site generation for React applications',
    },

     { slug: 'javascript-basics', 
        title: 'Learn javascript', 
        description: 'A blog post about learning javascript',
        content:'javascript is a React framework that enables server-side rendering and static site generation for javascript applications',
    },
];
export function getPostData(){
    return posts;
}
export function getPostDataBySlug(slug: string): post | undefined {
    return posts.find((post) => post.slug === slug);
}
