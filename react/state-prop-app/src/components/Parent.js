import {Component} from 'react'
import Child from './Child'

export default  class Parent extends Component  {
    render(){
        return (
            <div>
                <h1>Parent Component</h1>
                <Child text="1st Value"/>
                <Child text="2st Value"/>
            </div>
        )
    }
}