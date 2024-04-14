import { useEffect, useRef, useState } from "react";

function ValueRef() {

    const [value,setValue] = useState()
    const useCount = useRef(0)

    useEffect(()=>{
        useCount.current = useCount.current+1
    },[value])



    return ( 
        <>
            <h1>{useCount.current}</h1>
            <input type="text"
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
            />
            
        </>
     );
}

export default ValueRef;