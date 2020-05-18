import React, { Component } from 'react'

export default class WingPatternDropdown extends Component {
    render() {
        return (
            <div>
                <h3>Wing Pattern Uses of Moth/Butterfly</h3>
                <p>Butterflies and Moths have a unique reasoning for colors and patterns of their wings. Please select between the 3:</p>

                <select className="wingpatterns" onChange={this.props.wingPatternChange}>
                    <option value="" defaultValue>All Values</option>
                    <option value="1">Camouflage</option>
                    <option value="2">Colorful</option>
                    <option value="3">Mating</option>
                </select>
            </div>
        )
    }
}
