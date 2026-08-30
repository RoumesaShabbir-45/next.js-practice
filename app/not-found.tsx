import Link from "next/link";
 export default function NotFound(){
    return(
<div>
    <h1>404: page not found</h1>
    <p>soory the page u are looking for doesnot exist.</p>
    <Link href="/">Go back to Home</Link>
</div>
    );
 }