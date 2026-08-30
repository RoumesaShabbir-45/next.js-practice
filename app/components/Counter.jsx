"use client";
import { useState } from "react";
export default function Counter(){
 
    const [count, setcount]= useState(0);

    return(
        <div>
        <h1> Counter :{count}</h1>
        <button on onClick={()=> setcount(count+1)}>Increment</button>
        <button on onClick={()=> setcount(count-1)}>Decrement</button>
        </div>
    );
}