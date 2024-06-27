import { useState } from "react";

export default function Product1(){
    const [id,setid]= useState(1)
    const [Name,setName]= useState('Monitor')
    const [Price,setPrice]= useState(23000)

    const Discount =()=>{
        // setid(1)
        // setName('Monitor')
        setPrice(20700)   
    }
    return(
        <div>
            <h1> Product Details Functional Modification</h1>
            <p>Product id:{id}</p>
            <p>Product Name:{Name}</p>
            <p>Price:{Price}</p>
            <button type="button" onClick={Discount}>
                Discount
            </button>
        </div>
    )
}