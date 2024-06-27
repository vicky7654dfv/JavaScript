import { Component } from "react";

class DerivedFromProps extends Component {
    constructor(props) {
        super(props);
        this.state = {favoriteFood: 'briyani'}
    }

    static getDerivedStateFromProps(props, state) {
        return {favoriteFood: props.favCol}
    }

    render() {
        return (
            <h1>My Favorite Food is {this.state.favoriteFood}</h1>
        )
    }
}

export default DerivedFromProps;