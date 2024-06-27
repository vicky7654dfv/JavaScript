import { useState } from "react";
function InputvalueFunction(){
    const [value,setValue] = useState("Initial");
    function handleChange(e){
        //gives the value of the target element
        let value1 = e.target.value;
        setValue(value1);
    }

    return(
        <div>
            <h3>
                Using the <i> handleChange() function </i> with inputs in react functional components
            </h3>
            <input type="text" onChange={handleChange} value={value}></input>
            <br></br>
            <div style={{color:'blue'}}>
                The text entered in the input field is {value}
            </div>
        </div>
    )
}

export default InputvalueFunction;