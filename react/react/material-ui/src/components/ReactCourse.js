const { Component } = require("react");


class ReactCourse extends Component{
     static defaultProps ={
          courseContent :[

               'JSX', 'ReactProps', 'React State',
               'React Lifecycle', 'Methods', 'React Event Handler'
          ]
     }

     constructor(props){
          super(props)
          this.state = {msg: 'React Course', content:''}

          this.handleClick = this.handleClick.bind(this)
     }

     renderContent(){
          return(
               <ul>
                    {this.props.courseContent.map(content=>(
                         <li>{content}</li>
                    ))}
               </ul>
          )
     }

     handleClick(){
          this.setState({
               msg:'Course Content',
               content : this.renderContent()
          })
     }

     render(){
          return(
               <div>
                    <h2>Message :</h2>
                    <p>{this.state.msg}</p>
                    <p>{this.state.content}</p>
                    <button onClick={this.handleClick}>
                         Click Here to know the contents
                    </button>
               </div>
          )
     }
}

export default ReactCourse;