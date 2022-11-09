import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}
 handleChange = event => {
    this.setState({
        fruit:event.target.value
    })
};
addText = (event) =>{
    const  target = event.target
    this.setState({
        name: target.value
    }, () => {
        console.log(this.state.name,this.state.fruit);
    }
    )
}

render() {
    return (
        <div>
            <input 
            id="name-input" 
            value={this.state.name}
            onChange={this.addText} />
            <select onChange={this.handleChange} id="select-input">
                <option value="volvo"></option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
}
}

export default Exercise2;