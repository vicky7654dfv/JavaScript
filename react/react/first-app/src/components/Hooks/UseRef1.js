import React,{ useState, useRef, useEffect} from 'react'

const UseRef1=()=>{
    const [InputValue, setInputValue]=useState("")
    const prevInputValue = useRef("")

    useEffect(()=>{
        prevInputValue.current=InputValue
    },[InputValue])

    return(
        <div>
            <h1>UseRef Getting the Previous Value</h1>
            <input type="text" value={InputValue}
            onChange={(e)=>setInputValue(e.target.value)} />
            <h2>Current Value: {InputValue}</h2>
            <h2>Previous Value: {prevInputValue.current}</h2>
        </div>
    )
}

export default UseRef1;