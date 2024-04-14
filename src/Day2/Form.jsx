import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

function Form(){

    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [fValue,setFvalue] = useState()
    const [lValue,setLvalue] = useState()

    function handleForm(e){
        e.preventDefault()
    }
    function handlebtn(){
        if(lname,fname){
            setFvalue(fname)
            setFname("")
            setLvalue(lname)
            setLname("")
        }
    }

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }
    return(
        <>
            <form onSubmit={handleForm}>
            <h2>Hello {fValue} {lValue} </h2>
            <Stack direction={"row"} spacing={2} >
            <TextField id="outlined-basic" label="FirstName" variant="outlined"
                value={fname}
                onChange={handleFname}
                size="small"
            />
            <TextField id="outlined-basic" label="LastName" variant="outlined"
                value={lname}
                onChange={handleLname}
                size="small"
            />
            

            {/* <input type="text"
                value={fname}
                onChange={handleFname}
            /> */}
            {/* <input type="text"
                value={lname}
                onChange={handleLname}
            /> */}
            <Button variant="contained" color="success" onClick={handlebtn}>Submit</Button>
            </Stack>
            </form>
        </>
    )
}
export default Form;