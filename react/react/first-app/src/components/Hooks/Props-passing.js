import { createContext, useContext, useState } from "react";
const userContext = createContext();
function Component(){
    const [user,setUser] = useState('Hello world')
    
    return(
        <div>
            <userContext.Provider value={user}>
            <h1>Component 1 : {user} </h1>
            <Component2></Component2>
            </userContext.Provider>
        </div>
    )
}

function Component2() {
    return(
        <div>
            <h1>Component 2</h1>
            <Component3></Component3>
        </div>
    )
}

function Component3(){
    return(
        <div>
            <h1>Component 3</h1>
            <Component4></Component4>
        </div>
    )
}

function Component4(){
    return(
        <div>
            <h1>Component 4</h1>
            <Component5></Component5>
        </div>
    )
}


function Component5(){
    const user = useContext(userContext)
    return(
        <div>
            <h1>Component 5</h1>
            <h1>{`${user} again`}</h1>
        </div>
    )
}

export default Component;