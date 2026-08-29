import Link from "next/link";
import CurrentFilter from "./CurrentFilter";
interface ProductsPageProps{
    
searchParams: Promise<{
        category?:String;
        Sort?:String;
    }>;
     }
const products=[
 {id:1, name:"ReactCourse",category:"react"},  
 {id:2, name:"AngulaCourser",category:"angular"}, 
 {id:3, name:"VueCourse",category:"vue"},  
 {id:4, name:"next.jsCourse",category:"next.js"},   
 {id:5, name:"svelteCourse",category:"svelte"},  
];

export default async function ProductsPage({ searchParams }:ProductsPageProps){
const {category,Sort} = await searchParams

let filtered = products;
 if(category){
    filtered=filtered.filter((products) => products.category.toLowerCase() ===category.toLowerCase()
);
 }
 if (Sort === "asc"){
    filtered=[...filtered].sort((a,b) => a.name.localeCompare(b.name));
 }
  return (
    <div>
       <h1>Products Page</h1>

        <div style={{display:"flex", gap: "12px" }}> 
<Link href="/products">All</Link>
<Link href="/products?category=angular">Angular</Link>
<Link href="/products?category=react">React</Link>
<Link href="/products?category=vue">Vue</Link>
<Link href="/products?category=svelte">Svelte</Link>
<Link href="/products?sort=asc">Sort A-Z</Link>
    </div>
<p>Current filtered: <b>{category||"All"}</b>|Sort:{""}
    <b>{Sort||"default"}</b>
</p>
 <ul>
    {filtered.map((product) =>(
<li key={product.id}>
    {product.name} _ {product.category}
</li>
    ))}
 </ul>
 <CurrentFilter/>
    </div>
 );
}
