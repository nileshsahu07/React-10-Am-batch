import Child4 from "./Child4";

function Child3(props) {
    const {name} = props
    return ( 
        <>
            <h1>Child-3</h1>
            <Child4 name = {name}/>
        </>
     );
}

export default Child3;