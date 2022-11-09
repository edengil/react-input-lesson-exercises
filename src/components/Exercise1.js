import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    addText = (event) =>{
        const  target = event.target
        const val = target.id === "name-input" ? "name" : "age"
        this.setState({
            [val]: target.value
        })
    }
    alertText = () => alert(`${this.state.name} ${this.state.age}`)
    render() {
        return (
            <div>
                <input id="name-input"
                 value={this.state.name} onChange={this.addText}/>
                <input id="age-input"
                 value={this.state.age} onChange={this.addText}/>
                <button onClick={this.alertText}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;