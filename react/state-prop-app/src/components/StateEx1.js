import {Component} from 'react'

export default class Statenew extends Component {
    state = {
        username :"Gowtham",
        userplace:"cbe"
    }
    render(){
        return (
            <div>
                <h1>{this.state.username}</h1>
                <h1>{this.state.place}</h1>
            </div>
        )
    }
}