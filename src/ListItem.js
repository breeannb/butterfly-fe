import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                This is the ListItem Page 
                <h2>Butterfly Name: {this.props.object.name}</h2>
                <p>Wingspan (in inches): {this.props.object.wingspan}</p>
                <p>Is this butterfly endangered? {this.props.object.endangered}</p>
                <p>Main color of the butterfly:{this.props.object.color}</p>
            </div>
        )
    }
}
