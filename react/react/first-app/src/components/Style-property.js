import { Component } from "react";
import './first.css'

class StyleProperty extends Component{
    render(){
        const element ="myId";
        const message1 = "Class Component"
        const message2 = "stle Property"

        return(
            <div className="container">
                <h1 id={element}>{message1}</h1>
                <h2>{message2}</h2>
            </div>
        )
    }
}
export default StyleProperty;