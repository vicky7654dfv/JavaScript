import { useState } from "react";

function MultipleInput(){
    const[id , setId] = useState("1");
    const[firstName , setFname] = useState("Gokul");
    const[lastName , setLname] = useState("Balasubramanian");
    const[age , setAge] = useState("22");

    function handleChange(event){
        //gives the value of the targetted element
        let value = event.target.value;
        let inputName = event.target.value;
        if(inputName == "id"){
            setId(value);
        }
        else if(inputName == "fname"){
            setFname(value);
        }
        else if(inputName =="lname"){
            setLname(value);
        }
        else{
            setAge(value);
        }
    }

    return(
        <div>
            <h3>Using <i> handleChange() function </i> with input in react functional components</h3>
            <label for="id">ID</label>
            <input type="text" id="id" name="id" onChange={handleChange} value={id}></input><br></br><br></br>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" onChange={handleChange} value={firstName}></input><br></br><br></br>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" onChange={handleChange} value={lastName}></input><br></br><br></br>
            <label for="age">Age</label>
            <input type="text" id="age" name="age" onChange={handleChange} value={age}></input><br></br><br></br>
            
            <h1>User Information</h1>
            <p>Id : {id}</p>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Age : {age}</p>

        </div>
    )
}

export default MultipleInput;