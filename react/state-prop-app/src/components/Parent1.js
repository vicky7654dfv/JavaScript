import { Component } from "react";
import Child1 from "./Child1";

class Parent1 extends ComponentP{
    render(){
        return(
            <div>
               <h1>Parent1 Component</h1>
               <Child1 greetings="Hello Imarticus"
               quote="Morning quote" proverb="Evening proverb" />
            </div>
        )
    }
}

export default Parent1;