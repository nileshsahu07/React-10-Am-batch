
import { ButtonGroup, Checkbox, FormControlLabel, FormGroup, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/Delete';

function MuiButton() {
    return ( 
        <>
            <Stack spacing={5} direction={"row"}>
            <Button variant="contained"  color="success">Click Here</Button>
            <Button variant="outlined">Click Here</Button>
            </Stack>
            <IconButton>
                <DeleteIcon/>
            </IconButton>

            <ButtonGroup variant="contained" orientation="vertical">
                <Button color="secondary">One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

           <FormGroup>
            <FormControlLabel label="parent" control={<Checkbox/>}/>
           </FormGroup>
        </>
     );
}

export default MuiButton;