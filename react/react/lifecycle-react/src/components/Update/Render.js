import { Component } from "react";

class Render extends Component{
    constructor(props){
        super(props)
        this.state={favouriteColor:'red'}
    }
    render(){
        return(
            <div>
                <h1>
                    My favourite color is:
                    {this.state.favouriteColor}
                </h1>
                <button type="button" onClick={this.changeColor}>
                    Click to change color
                </button>
            </div>
        )
    } e
}

export default Render;