import { useEffect ,useState } from "react";

export default function Homepage(){
    const [user,setUsers]=useState();

    useEffect(() => {
        fetch("/api/user")
        .then (res=>res.json())
        .then(data=> setUsers(data.user))
    },[])

    return(
        <div>
            <h1>User Data</h1>
            {
                user && user.map(user=>(
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </div>
        
    );
}
