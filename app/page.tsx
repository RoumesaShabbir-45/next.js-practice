export default async function Home(){
    const res= await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache:'no-store'
    })
    const data = await res.json()
    console.log(data)
    return(
        <div>
            <h1>Welcome to home page(Dynamic Render Page)</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
            
        </div>
    );
} 