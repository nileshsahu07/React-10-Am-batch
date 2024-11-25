import { useEffect, useState } from "react";

function EffectHook() {

    const[name,setName]= useState("UseEffect")

    function handleUpdate(){
        setName("UseREf")
    }

    useEffect(()=>{
        alert("Welcome Page")
        console.log("welcom to jumbanji")
    },[name])

    return (
        <>
            <h1>{name}</h1>
            <button onClick={handleUpdate}>Update</button>
        </>
      );
}
export default EffectHook;