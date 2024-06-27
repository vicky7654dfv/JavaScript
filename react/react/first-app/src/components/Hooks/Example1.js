import React,{useState} from 'react';

const Example1 = () =>{
    const [color,setColor] = useState('black')
    return(
        <div>
            <h1>Color state: {color}</h1>
            <button type="button" onClick={()=>setColor("blue")}>
                Blue
            </button>
            <button type="button" onClick={()=>setColor("yellow")}>
                Yellow
            </button>
            <button type="button" onClick={()=>setColor("blue")}>
                Blue
            </button>
            <button type="button" onClick={()=>setColor("green")}>
                Green
            </button>
        </div>
    )
}

export default Example1;