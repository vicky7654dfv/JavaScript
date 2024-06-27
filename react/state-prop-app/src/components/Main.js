import { Component } from "react"

class Main extends Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {isLoggedIn: false}
    }
    handleLogin(){
        this.setState({isLoggedIn: true});
    }
    handleLogout(){
        this.setState({isLoggedIn: false});
    }

render(){
    return(
        <div>
            <h1>Conitional Rendering Example</h1>
            <Message isLoggedIn = {this.state.isLoggedIn} />
            {
                (this.state.isLoggedIn) ? (
                    <Logout isclickinfo={this.handleLogout} />
                ):(
                    <Login isclickinfo={this.handleLogin} /> 
                )
            }
        </div>
    )
}}

export default Main;