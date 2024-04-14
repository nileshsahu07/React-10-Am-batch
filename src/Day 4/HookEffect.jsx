import { useEffect, useState } from "react";

function HookEffect(){

    const [count,setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    },[count])

    return(
        <>
            <h1>useEffect</h1>
            <h2>count {count}</h2>
        </>
    )
}
export default HookEffect;