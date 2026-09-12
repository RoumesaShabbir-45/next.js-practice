
export async function getStaticPaths() {

    const posts = [
        { slug: "next.js" },
        { slug: "react.js" },
    ];

    const paths = posts.map((path) => ({
        params: { slug: path.slug },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const posts = [
        { slug: "next.js", title: "Next.js Blog" },
        { slug: "react.js", title: "React.js Blog" },
    ];

    const post = posts.find((p) => p.slug === params.slug);

    return {
        props: {
            post,
        },
    };
}
export default function BlogDetails({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>Slug:{post.slug}</p>
        </div>
    );
}
