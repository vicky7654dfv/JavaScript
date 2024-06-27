import {component} from 'react'

class Uncontrolled extends Component{
    constructor(props){
        super(props)
        this.updateSubmit = this.updateSubmit.bind(this)

    }
    updateSubmit(event){
        event.preventDefault();
        alert('You have entered the username and company name'+'successfully')
    }

    render(){
        return(
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled Component</h1>
                Name:
                <input type='text' ref={this.input} />
                CompanyName:
                <input type="text" ref={this.input} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Uncontrolled;