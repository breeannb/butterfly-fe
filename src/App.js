import React, { Component } from 'react';
import './App.css';
import request from 'superagent'; 

export default class App extends Component {
  
  state = { butterflies: []}
  
  componentDidMount = async () => {
    const data = await request.get(`https://glacial-lake-69827.herokuapp.com/butterflies`);

    this.setState({ butterflies: data.body})
  }
  
  
  render() {
    return (
      <div>
        {/* Home Page */}
        {/* List */}
          <div> 
            My List
            {
              this.state.butterflies.map(butterfly => {
                return <div>
                  <p>{butterfly.name}</p>
                  <p>{butterfly.wingspan}</p>
                  <p>{butterfly.endangered}</p>
                  <p>{butterfly.color}</p>
              </div>
              })
            }
          </div>
        {/* List Item */}
        {/* About Me Page */}
      </div>
    )
  }
}

