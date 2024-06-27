import React,{useState} from "react";
import 

const CallbackFun=()=>{
    const[count, setCount]=useState(0)
    const[todos, setTodos]=useState([])

    const increment=()=>{
        setCount(count+1)
    }

    const addTodo=()=>{
        setTodos((t)=>[...t,"New Todo"])
    }

    return(
        <div>
            <todos todos={todos} addTodo={addTodo} />
            <button type="button" onClick={increment}>+</button>
        </div>
    )
}