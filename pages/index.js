import { useEffect ,useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function Home(){
    const [user,setUsers]=useState();

    useEffect(() => {
        fetch("/api/user")
        .then (res=>res.json())
        .then(data=> setUsers(data.user))
    },[])

      const router = useRouter();
    const GoToAbout = ()=>{
        router.push("/about")
    }

    return(
        <div>
            <h1 className={styles.title}>User Data</h1>
            {
                user && user.map(user=>(
                    <p key={user.id}>{user.name}</p>
                ))
            }
            <div>
            <button className={styles.button}onClick={GoToAbout}>Go To About Page</button>
        </div>
        </div>
    );  
}