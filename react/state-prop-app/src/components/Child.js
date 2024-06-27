import { Component } from "react";

export default class Child extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}