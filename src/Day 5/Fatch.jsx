import { useEffect, useState } from "react";

function Fatch() {

    const [count,setCount] = useState(0)
    const [title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    // const [image,setImage] = useState("")

    async function myData(){
        let result = await fetch(`https://dummyjson.com/products/${count}`)
        let data = await result.json()
        console.log(data)
        setTitle(data.title)
        setDesc(data.description)
        // setImage(data.images[0])
        return data
    }

    useEffect(()=>{
        myData()
    },[count])


    function handleNext(){
        if(count<100){
            setCount(count+1)
        }   
    }

    function handleprevious(){
        if(count>0){
            setCount(count-1)
        }
    }

    return ( 
        <>

    <div className="card" style={{ width: "18rem"}}>
    {/* <img src={image} className="card-img-top" /> */}
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <button onClick={handleprevious} className="btn btn-primary" style={{marginRight:"100px"}}>Previous</button>
    <button onClick={handleNext} className="btn btn-primary">Next</button>
  </div>
    </div>
    <h1>{count}</h1>
        
        </>
     );
}

export default Fatch;