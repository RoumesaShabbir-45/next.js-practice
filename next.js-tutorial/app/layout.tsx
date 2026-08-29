import Link from "next/link";
import type{ ReactNode} from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>next.js course</title>
      </head>
      <body>
        <header style={{padding:12, backgroundColor:'#5b5b56',color:'#0e0e0e'}}>
          MY App Navbar
        < nav style={{display:"flex",gap:12}}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/card">Card</Link>
        <a href="/contact">Contact</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/products">Product</a>
        </nav>
        </header>
        {children}
        <footer style={{padding:12, backgroundColor:'#676966'}}> My App Footer</footer>
      </body>
    </html>
  );
}

