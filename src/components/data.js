//TODO:
//Add another version of the json data and this class that can be used for the calculation aspect of the program
//Rename this file to better fit the class's function.

import React from 'react';

class Tool extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: "",
            checked: false,
            data: []
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            id: props.id,
            name: props.name,
        }
    }

    changeChecked = () => {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return(
            <div id={this.state.id}>
                <input type="checkbox" id={this.state.id} name={this.state.name} value={this.state.name} onClick={this.changeChecked} />
                <label htmlFor={this.state.id}>{this.state.name}</label>
                <p>{this.state.checked.toString()}</p>
            </div>
        )
    };
}

export default Tool;