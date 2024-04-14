import { data } from "../App";
import { data1 } from "../App";

function ChildD() {
    return ( 
        <>

        <data.Consumer>
            {
                (firstName)=>{
                    return(
                        <>
                            <data1.Consumer>
                                {
                                    (lastName)=>{
                                        return(
                                            <>
                                                <h1>Child D comp... {firstName} {lastName}</h1>
                                            </>
                                        )
                                    }
                                }
                            </data1.Consumer>   
                        </>
                    )
                }
            }
        </data.Consumer>    
           
        </>
     );
}

export default ChildD;