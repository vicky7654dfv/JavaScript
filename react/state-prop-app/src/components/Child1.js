import { Component } from "react";

class Child1 extends Component{
    render(){
        return(
            <div>
                <h2>Child1 Component</h2>
                <p>{this.props.greetings}</p>
                <p>{this.props.quote}</p>
                <p>{this.props.proverb}</p>
            </div>
        )
    }
}

export default Child1;