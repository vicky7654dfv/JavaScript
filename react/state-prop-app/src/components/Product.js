import {useState } from "react" 
export default function Product(){
    const [prodId,setId] =useState(1)
    const [prodName,setName] =useState('Monitor')
    const [price,setPrice] =useState(23000)

    const handEvent = () =>{
        setPrice(20700)
    }
    return(
        <div>
            <h1>Example - Product</h1>
            <p>Product id: {prodId}</p>
            <p>Product name: {prodName}</p>
            <p>Price: {price}</p>
            <button type="button" onClick={handEvent}>
            Discount
            </button>
        </div>
    )

}