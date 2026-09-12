type User={
id:number;
name:string;
};

export async function getServerSideProps() {
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data: User[] =await res.json();
    console.log("Server call");

    return{
    props:{
        users:data,
    },
};
}

export default function Users({users}:{users:User[]})
{
    return(
    <div>
        <h1>User Data (SSR)</h1>
        {
            users.map((user)=>(
            <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
    );
}
