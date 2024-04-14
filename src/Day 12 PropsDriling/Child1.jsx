import Child2 from "./Child2";

function Child1(props) {
    const {name} = props
    return ( 
        <>
            <h1>Child-1</h1>
            <Child2 name={name}/>
        </>
     );
}

export default Child1;