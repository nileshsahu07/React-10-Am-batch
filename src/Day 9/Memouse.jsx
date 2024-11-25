import { useMemo, useState } from "react";

function Memouse() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Nilesh Sahu");
  

  // const deviderFun = useMemo(
  //   function Devide() {
  //     console.log("I Am a Developer"); 
  //     return value / 2;
  //   },
  //   [value]
  // );

  return (
    <>
      <h1 >{deviderFun}</h1>
      <br></br>
      <button className="bg-red-600 w-10 h-5"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <h1 className="text-2xl">{value}</h1>
      <button className="bg-red-600 w-10 h-5"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>

      <br></br>
      <br></br>

      <h1 className="text-xs" >{name}</h1>
      <button className="w-10 h-5"
        onClick={() => {
          setName("Nilesh Pancholi");
        }}
      >
        Click
      </button>

      
    </>
  );
}

export default Memouse;
