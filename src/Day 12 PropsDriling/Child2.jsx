import Child3 from "./Child3";


function Child2(props) {
    const {name} = props
    return ( 
        <>
            <h1>Child-2</h1>
            <Child3 name={name}/>
        </>
     );
}

export default Child2;