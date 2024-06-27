import React,{useState} from 'react';

const Example2 = () =>{
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        color:"black",
        year:"1964"
    })

    const updateColor=()=>{
        setCar(prevState=>{
            return{
                ...prevState,color:"red"
            }
        })
    }

    return(
        <div>
            <h1>Car Details</h1>
            <p>{car.brand}</p>
            <p>{car.model}</p>
            <p>{car.color}</p>
            <p>{car.year}</p>
            <button type="button" onClick={updateColor}>
                Click to change color
            </button>
        </div>
    )
}

export default Example2;