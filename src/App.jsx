// import State from "./Day1/State";
// import Statesecond from "./Day1/Statesecond";
// import Form from "./Day2/Form"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EffectHook from "./Day 4/EffectHook";
// import HookEffect from "./Day 4/HookEffect";
// import Fatch from "./Day 5/Fatch";
// import Todo from "./Day3/Todo";
// import Navbar from "./Day 6/Navbar";
// import Footer from "./Day 6/Footer"
// import Homepage from "./Day 6/Homepage"
// import State from "./Day1/State";
// import Form from "./Day2/Form"
// import HookEffect from "./Day 4/HookEffect";
// import MuiButton from "./Day 7/MuiButton";
// import MusicPlayer from "./Day 7/MusicPlayer"
// import SignInSide from "./Day 7/SignInSide";
// import DrawerAppBar from "./Day 7/DrawerAppBar";
// import SignUp from "./Day 7/SignUp";
// import BasicTable from "./Day 7/BasicTable";
// import LoginPage from "./Day 7/LoginPage";
// import ReduceHook from "./Day 8/ReduceHook";
// import Formreduce from "./Day 8/Formreduce";
// import Memouse from "./Day 9/Memouse";
// import Telwind from "./Day 10/Telwind";
// import TailwindTable from "./Day 10/TailwindTable";
// import HookRef from "./Day 11/HookRef";
// import ValueRef from "./Day 11/ValueRef";
// import Child1 from "./Day 12 PropsDriling/Child1";

// import { useCallback, useState } from "react";
// import Callbackuse from "./Day 9/Callbackuse";

// import Calculator from "./Calculator/Calculator";


function App() {

// for callback hook =>
//  const [count,setCount] = useState(0)
//  const [name,setName] = useState("Nilesh")

//  function TestFun(){
//   let a = 10
//   console.log(a)
//  }

//  let handleValue = useCallback(TestFun,[count])

  return(
    <>
      {/* <State/>
      <Statesecond/>
      <Form/> */}
      {/* <Todo/> */}
      {/* <HookEffect/> */}
      {/* <EffectHook/> */}
      {/* <Fatch/> */}

      {/* <BrowserRouter> */}
      {/* <Navbar/> */}
      {/* <DrawerAppBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/todo" element={<Todo/>}/> 
          <Route path="/data" element={<Fatch/>}/>
          <Route path="/counter" element={<State/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/useeffect" element={<HookEffect/>}/>
          <Route path="/music" element={<MusicPlayer/>}/>
          <Route path="/signin" element={<SignInSide/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/table" element={<BasicTable/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter> */}

      {/* <MuiButton/> */}
      {/* <LoginPage/>
      <ReduceHook/> */}
      
      {/* <Formreduce/> */}
      {/* <Memouse/> */}
      {/* <Telwind/> */}
      {/* <TailwindTable/> */}
      {/* <HookRef/> */}
      {/* <ValueRef/> */}
      {/* <Child1 name={"Nilesh"}/> */}
      {/* <Calculator/> */}


     {/* for callback hook */}
      {/* <Callbackuse myvalue={handleValue}/>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <h1>{name}</h1>
      <button onClick={()=>{setName("Nilesh Pancholi")}}>Enter</button> */}
      
    </>
  )
}

export default App;




// CreateContext example => props drilling se bachne ke liye ise use karte hai ya fir hum kah sakte hai direct last wale child me data show karne ke liye.

// import { createContext} from "react";
// import ChildD from "./Day 13 CreateContext/ChildD";

// let data = createContext()
// let data1 = createContext()

// function App(){


// const firstName = "Nilesh"
// const lastName = "Pancholi"

//   return(
//     <>

          
//       <data.Provider value={firstName}>
//       <data1.Provider value={lastName}>
//         <ChildD/>
//       </data1.Provider>
//       </data.Provider>
//     </>
//   )
// }

// export default App;
// export {data}
// export {data1}




// UseContext example => pura phase createcontext ki tarah hi rahega bas usecontext or add ho jayega

// import { createContext} from "react";
// import ChildFour from "./Day 14 UseContext/ChildFour";


// let data = createContext()
// let data1 = createContext()

// function App(){

// const firstName = "Nilesh"
// const lastName = "Pancholi"

//   return(
//     <>

          
//       <data.Provider value={firstName}>
//       <data1.Provider value={lastName}>
//         <ChildFour/>
//       </data1.Provider>
//       </data.Provider>
//     </>
//   )
// }

// export default App;
// export {data}
// export {data1}