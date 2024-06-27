import { useState } from "react";

const Controlled1 = () =>{
    const [value,setValue] = useState('')
    const handleChange = (event) =>{
        setValue(event.target.value)
    }
    return(
        <div>
            <form>
                <h2>Enter the value</h2>
                <input type="text" value={value} onChange={handleChange} />
                <br/><br/>
                <h2>The value is: {value} </h2>
            </form>
        </div>
    )
}

export default Controlled1;