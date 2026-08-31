import type{ Metadata} from 'next';

type Props = {
    params:Promise <{ slug: string }>
    }
async function getPostData(slug: string){
    return{
        title: `Blog Post ${slug}`,
        description: `This is the blog post with slug ${slug}`,
    };
}
//Dynamic SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostData(slug);
    
    return {
        title: post.title,
        description: post.description,
       
        openGraph: {
            title: post.title,
            description: post.description,  
            url: `https://example.com/blog/${slug}`,
            type: 'article',
    }
}
}
//Page.content
export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    return (
        <h1>Blog: {slug}</h1>
    );
}