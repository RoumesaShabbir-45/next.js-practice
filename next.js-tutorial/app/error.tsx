"use client";

import { error } from "console";

export default function Error({
error,
reset,
}:{
    error: Error;
    reset :() => void;
}){
return(
<div>
    <h1>Some thing went wrong</h1>
    <p>{error.message}</p>
    <button onClick={() =>reset()}>Try again</button>
</div>
);
}



