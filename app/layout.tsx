 import type {Metadata}from 'next';

export const metadata: Metadata={
  title:
  { default: 'Roumesa Decodes', 
    template: '%$s | Roumesa Decodes'
},
description: 'Roumesa Decodes is a blog where I share my thoughts and experiences on various topics, including technology, programming, and personal development.',

  openGraph: {
    siteName: 'Roumesa Decodes',
}
}
 export default function RootLayout ({
  children,
 }:{
 children: React.ReactNode
 }) 
{
  return(
     <html lang="en">
      <body>
     {children}
      </body>
      </html>

  );
 }
