import { useState } from "react";

function Statesecond(){

    const[name,setName]= useState({firstName:"Nilesh",lastName:"Pancholi"})

    function handleName(){
        setName({...name,firstName:"kushal"})
    }

    return(
        <>
            <h1>FirstName:-{name.firstName} <br></br>LastName:-{name.lastName}</h1>
            <button onClick={handleName}>Click To Change</button>
        </>
    )
}
export default Statesecond;