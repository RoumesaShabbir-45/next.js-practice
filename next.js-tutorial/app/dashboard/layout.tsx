import type { ReactNode } from "react"
export default function RootLayout({ children }: { children: ReactNode })
 {
    return(
<section style={{padding:12, backgroundColor:'#e0bc7f',color:'#2c1070'}}>
<aside style={{padding:12, backgroundColor:'#f8966c',color:'#179755'}}>
     <h2>Dashboard Sidebar</h2>
     <ul>
        <li>Overview</li>
        <li>Analytics</li>
        <li>Setting </li>
     </ul>
     </aside>
     <div style={{padding:12}}>
        {children}
     </div>
    </section>
    );
}