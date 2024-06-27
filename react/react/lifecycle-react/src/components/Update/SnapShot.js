import { Component } from "react";

class SnapShot extends Component{
    constructor(props){
        super(props)
        this.state={favouriteColor:'red'}
    }

    componentDisMount(){
        setTimeout(()=>{
            this.setState({favouriteColor:'blue'})
        },2000)
    }

    getSnapshotBeforeUpdate(preProps,preState){
        document.getElementById("div1").innerHTML = "My favourite color before update is: "+preState.favouriteColor
    }

    componentDidUpdate(){
        document.getElementById("")
    }
}