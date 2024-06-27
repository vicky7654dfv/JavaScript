import {Component} from "react";
class InputValue extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'HariPriya',
            age:32,
            gender:'Female',
            salary:20000
        }
    }
    handleClick = () =>{
        this.setState({age:document.getElementById("newAge").value})
    }
    render(){
        return(
            <div>
                <h1>Getting the Input Value and Change the age</h1>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Salary: {this.state.salary}</p>
                <input type="text" id="newAge" />
                <button type="button" onClick={this.handleClick}>
                    Click here to change
                </button>
            </div>
        )
    }
}

export default InputValue;