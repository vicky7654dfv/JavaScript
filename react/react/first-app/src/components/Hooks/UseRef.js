import React,{useState,useRef,useEffect} from 'react';

const UseRef = () => {
    const count=useRef(0)
    const [InputValue, setInputValue]=useState("")
    useEffect(()=>{
        count.current=count.current+1
    })
    return (
        <div>
            <h1>UseRef Example </h1>
            <input type="text" value={InputValue}
            onChange={(e)=>setInputValue(e.target.value)} />
            <h2>Render Count: {count.current}</h2>
        </div>
    )
}

export default UseRef;