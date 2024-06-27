import React,{useState,useEffect} from 'react'

const Example3=()=>{
    const [count,setCount]=useState(0)
    const [calculation,setCalculation]=useState()
    useEffect(()=>{
     //   setCalculation(()=>count*2)
    if(count && count>5){
        setCount(0)
    }
    },[count]);
    return(
        <div>
            <h1>Use Effect Example</h1>
            <h2>Count Value: {count}</h2>
            <button type="button" onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
    }
     
export default Example3;    