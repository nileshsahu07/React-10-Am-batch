import styled from "@emotion/styled";
import { TextField,Box ,Button,Stack} from "@mui/material";

const Mydiv = styled(Box)({
    width:"500px",
    height:"200px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"auto"

})

function LoginPage() {
    return ( 
        <>
            <Mydiv>
            <Stack direction={"row"} spacing={2} >
            <TextField id="outlined-basic" label="Name" variant="outlined" size="small"/> 
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" size="small"/>
            <Button variant="contained" color="success" size="small">Submit</Button>
            </Stack>
            </Mydiv> 
        </>
     );
}

export default LoginPage;