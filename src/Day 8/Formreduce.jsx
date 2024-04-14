import { useReducer } from "react";

function Formreduce() {

let initialStage = ""

function reducer (state,action){
   
}

const [state,dispatch] = useReducer(reducer,initialStage)

function handleSubmit(e){
    e.preventDefault()
}

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <h1>{state}</h1>
            <input type="text" 
               
                onChange={(e)=>{dispatch(e.target.value)}}
            />
            <button onClick={()=>{dispatch("submitbtn")}}>submit</button>
            </form>
        </>
     );
}

export default Formreduce;