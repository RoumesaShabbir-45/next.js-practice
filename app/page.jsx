import Image from 'next/image';
// app/page.jsx
export  default function Home( ){
    return(
        <main style={{padding:'40px'}}>
            <p>This is the main component</p>
    <Image src='/eyes.jpg'
     alt='EyeImage'
     width={300}
     height={200}
     />
     <hr></hr>
 <Image 
  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" 
  alt='Flower'
  width={200} 
  height={200} 
/>
    </main>
    );
}