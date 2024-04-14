import { useReducer } from "react";


function ReduceHook() {


    let myinitialStage = "Devanshu sir"
    let initialStage = 0

    function myreducer(mystate,action){
      switch(action){
        case "nameUpdate":
            return mystate = "manny"
        default :
            return mystate    
      }
    }

    function reducer(state,action){
        switch(action){
            case "Increment":
                return state+1
            case "Decrement":
                return state-1
            default:
                return state
        }
    }

    const [mystate,mydispatch] = useReducer(myreducer,myinitialStage)  
    const [state,dispatch]  = useReducer(reducer,initialStage)

    return (  
        
        <>
            <button onClick={()=>{dispatch("Increment")}}>+</button>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch("Decrement")}}>-</button>
            <h1>{mystate}</h1>
            <button onClick={()=>{mydispatch("nameUpdate")}}>Update</button>
        </>
    );
}

export default ReduceHook;