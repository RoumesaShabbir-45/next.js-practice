import Link from "next/link";
import{ products} from "@/lib/product";

type Product = {
    searchParams: Promise<{
        category?: string;
        page?:string;
    }>;
}
const PAGE_SIZE = 2;
export default async function ProductPage({ searchParams }: Product) {
    const { category, page } = await searchParams;

let filtered = products;
    
if ( category ) {
        filtered= filtered.filter((product) => product.category === category);
    }
    const currentPage =  Number(page) || 1;
    const start = (currentPage - 1) * PAGE_SIZE;

    const paginated = filtered.slice(start, start + PAGE_SIZE);
    return (
        <div>
            <h1>Products</h1>
            <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/product?category=All">All</Link>
            <Link href="/product?category=react">React</Link>
            <Link href="/product?category=vue">Vue</Link>
            <Link href="/product?category=angular">Angular</Link>
            </div>
           
            // products list
            <ul>
            {paginated.map((product) => (
                <li key={product.id}> {product.name} {product.category}</li>
            ))}
            </ul>
           
            {/* pagination */}
            <div style={{ display: "flex",  gap:10 }}>
                {currentPage > 1 && (
                    <Link href={`/product?category=${category||""}&page=${currentPage -1}`}>
                        Previous
                    </Link>
                    )}
                {start + PAGE_SIZE < filtered.length && (
                    <Link href={`/product?category=${category||""}&page=${currentPage +1}`}>
                        Next
                    </Link>
                )}
                </div>
                </div>
            );
        }