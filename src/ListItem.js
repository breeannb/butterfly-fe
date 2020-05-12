import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListItem extends Component {
    render() {
        return (
            <div className='single-butterfly-listitem'>
                <Link to={`/butterfly/${this.props.object.id}`} >
                    <h2>Butterfly Name: {this.props.object.name}</h2>
                    <p>Wingspan (in inches): {this.props.object.wingspan}</p>
                    <p>Is this butterfly endangered: {this.props.object.endangered
                        ? 'it is endangered'
                        : 'it is not endangered'}</p>
                    <p>Main color of the butterfly?:{this.props.object.color}</p>
                </Link>
            </div>
        )
    }
}
