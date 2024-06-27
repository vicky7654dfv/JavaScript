import {useState } from "react" 
export default function ChangeFunction(){
    const [name,setName] =useState('Divya')
    const [age,setAge] =useState(32)
    const [location,setLocation] =useState('Coimbatore')

    const handEvent = () =>{
        setName('Ganesh')
        setAge(23)
        setLocation('Chennai')
    }
    return(
        <div>
            <h1>Functional Component - State Modification</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <button type="button" onClick={handEvent}>
            Click here
            </button>
        </div>
    )

}