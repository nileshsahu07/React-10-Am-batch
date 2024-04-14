import { useRef, useState } from "react";

function HookRef() {

   const [name,setName] = useState("Nilesh")

    const useDom = useRef("")

    function handleClear(){
        setName(" ")
        useDom.current.focus()
    }

    function handleChange(){
        useDom.current.style.color = "brown"
        useDom.current.style.backgroundColor = "yellow"
    }

    return ( 
        <>
            <h1>UseRef Hook</h1>
            <input type="text" value={name} ref={useDom}/>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleChange}>Change</button>
        </>
     );
}

export default HookRef;