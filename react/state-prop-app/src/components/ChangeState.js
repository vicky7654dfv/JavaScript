import { Component } from "module";

class ChangeState extends Component{
    constructor(props){
        super(props);
        this.this.state={
            name:'Gokul',
            age:'22',
            location:'Coimbatore'
        }
    }

    change=()=>{
        this.setState({
            name:'Gopal',
            age:'25',
            location:'Chennai'
        })
    }
    render(){
        return(
            <div>
                <h1>Change the state value using setState</h1>
                <p>Name :{this.state.name}</p>
                <p>Age :{this.state.age}</p>  
                <p>Location :{this.state.location}</p>
                <button type="button" onClick={this.change}>Click here to change the value</button>
            </div>
        )
    }
}

export default ChangeState;