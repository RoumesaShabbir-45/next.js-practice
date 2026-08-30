import Link from 'next/link';
import Counter from './components/Counter';

export  default  async function Home( ){

    const data =await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
    return(
       <div>
        <h1>Server Comp</h1>
        <Link href="/server-client-demo">Go to server client demo</Link>
      {/*<ul>
        {data.map(item => (
            <li key ={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </li> 
        ))}
      </ul>*/}
      <Counter />
       </div>
    );
}