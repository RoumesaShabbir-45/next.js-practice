import React, { Children } from "react";

export default function Layout({children}:{children:React.ReactNode}){

return(
    <div>
    <header style={{background:'#8d5c5c',padding:'12px'}}>My Navbar</header>
   
   <main>
   {children}
   </main>

   <footer style={{background:'#8d5c5c',padding:'12px'}}>My Footer</footer>
    </div>

);
}
