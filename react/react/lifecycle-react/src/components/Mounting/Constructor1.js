import {Component} from "react";

class Constructor1 extends Component{
    constructor(props){
        super(props);
        this.state={favouriteColor:'red'}
    }

    render(){
        return(
            <div>
                <h1>My Favourite Color:
                    {this.state.favouriteColor}
                </h1>
            </div>
        )
    }
}

export default Constructor1;