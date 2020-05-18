import React, { Component } from 'react'
// import request from 'superagent'
import { addButterfly } from './Api-Calls'; 
// import { Link } from 'react-router-dom'
// import Header from './Header'
export default class Admin extends Component {
    
    state = {
            name: '', 
            wingspan: 0, 
            endangered: false, 
            color: '', 
            owner_id: 0, 
            wingpattern_id: 0,
    }

    handleSubmit = async (e) => {
        e.preventDefault(); 
        const newButterfly = await addButterfly(this.state)

        this.setState({ success: newButterfly})
        
    }

    handleAllChange = (e) => {
    
        const newState = {}
        newState[e.target.name] = e.target.value;

        this.setState(newState); 
    }
    
    
    render() {
        // console.log('hello', this.state) able to log out an object 
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}> 
                    <h2>New Butterfly</h2>

                    <label>
                        Butterfly Name
                        <input onChange={this.handleAllChange} value={this.state.name} name="name" />
                    </label>

                    <label>
                        Wingspan in inches:
                        <input onChange={this.handleAllChange} value={this.state.wingspan} name="wingspan" type="number"/>
                    </label>

                    <label>
                        Is endgangered
                        <input onChange={this.handleAllChange} checked={this.state.endangered === 'true'} name="endangered" type="radio" value="true"/>
                    </label>

                    <label>
                        Is not endangered
                        <input onChange={this.handleAllChange} checked={this.state.endangered === 'false'} name="endangered" type="radio" value="false"/>
                    </label>

                    <label>
                        Color: 
                        <input onChange={this.handleAllChange} value={this.state.color} name="color"/>
                    </label>

                    <label>
                        Owner ID: 
                        <input onChange={this.handleAllChange} value={this.state.owner_id} name="owner_id" type="number"/>
                    </label>

                    {/* <label>
                        Wing Pattern ID: 
                        <input onChange={this.handleAllChange} value={this.state.owner_id} name="wingpattern_id" type="number"/>
                    </label> */}

                    <button> Submit</button>
 
                </form> 
            </div>
        )
    }
}
