import React, { Component } from 'react'
import request from 'superagent'; 


export default class DetailPage extends Component {
    
    state = { butterfly: {} }
    componentDidMount = async () => {
        const fetchedData = await request.get(`https://glacial-lake-69827.herokuapp.com/butterflies/${this.props.match.params.id}`)

        // console.log(fetchedData.body); able to successfully log out an butterfly object corresponding with id in console

        //now set it into state so we can render it, make sure to initialize above 
        this.setState({ butterfly: fetchedData.body[0]})

    }

    render() {
        // console.log(this.props.match.params.id); verified that it is logging out correct id in url and in console
        return (
            
            <div>
                This is a Details Page.
                <div>
                {JSON.stringify(this.state.butterfly)}
                </div>
                
            </div>
        )
    }
}
