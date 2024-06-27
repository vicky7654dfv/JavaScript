import { useState } from "react"
function Dropdown(){
    const [selectoption, setSelectOption] =useState("option1")
    const handleChange = (event) =>{
        setSelectOption(event.target.value)
    }
    return(
        <div>
            <h2>Select an option:</h2>
            <select value={selectoption} onChange={handleChange}>
                <option value="Java">Java</option>
                <option value="DSA">DSA</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
            </select>
            <h2>Selected option: {selectoption}</h2>
        </div>
    )
}

export default Dropdown;