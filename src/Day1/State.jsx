import { useState } from "react";
import "./state.css"

function State(){

const [value,setValue] = useState(0)

function handleInc(){
    setValue(value+1)
}

function handleDec(){
    if(value>0){
        setValue(value-1)
}
    }
    


    return(
        <>
            <div className="divv">
            <div >
            {value===10 ? <p className="para">yahooo you won</p> : <></>}
            {value<10 ? <button onClick={handleInc} className="btn1">+</button> : <button disabled className="btn1">+</button>}
            <h1 >{value}</h1>
            <button onClick={handleDec} className="btn1">-</button>
            </div>
            </div>
        </>
    )
}
export default State;