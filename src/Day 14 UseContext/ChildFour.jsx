import { useContext } from "react";
import { data, data1 } from "../App";

function ChildFour() {

    let firstName = useContext(data)
    let lastName = useContext(data1)
    return ( 
        <>
            <h1>Child D Hello {firstName} {lastName}</h1>
        </>
     );
}

export default ChildFour;