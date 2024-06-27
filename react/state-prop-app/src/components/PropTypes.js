import { Component } from "react";
import PropTypes from 'prop-types'

class PropTypes1 extends Component{
    render(){
        return(
            <div>
                <h1>Validation under process</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray ? "True":"False"}</td>
                    </tr>
                    <tr>
                        <td>Boolean{this.props.propBool}</td>
                        <td>Boolean{this.props.propBool ? "True":"False"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{this.props.propFunction(200)}</td>
                        <td>{this.props.propFunction(200)?"True":"False"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.propString}</td>
                        <td>{this.props.propString?"True":"False"}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

