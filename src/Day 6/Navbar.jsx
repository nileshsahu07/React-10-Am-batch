import {Link} from "react-router-dom"
 import "./navbar.css"

function Navbar() {
    return ( 
        <>
            <div className="navcss">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/todo"}>Todo</Link></li>
                    <li><Link to={"/data"}>Data</Link></li>
                    <li><Link to={"/counter"}>Counter</Link></li>
                    <li><Link to={"/form"}>Form</Link></li>
                    <li><Link to={"/useeffect"}>useEffect</Link></li>
                    <li><Link to={"/music"}>Music</Link></li>
                    <li><Link to={"/signin"}>Sign In</Link></li>
                    

                </ul>
            </div>

          
        </>
     );
}

export default Navbar;