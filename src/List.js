import React, { Component } from 'react';
import './App.css';
import request from 'superagent'; 
import ListItem from './ListItem.js';

export default class App extends Component {
  
  state = { butterflies: []}
  
  componentDidMount = async () => {
    const data = await request.get(`https://glacial-lake-69827.herokuapp.com/butterflies`);

    this.setState({ butterflies: data.body})
  }
  
  
  render() {
    return (
      <div>
          <div> 
            This is the List Page
            {
              this.state.butterflies.map(onebutterfly => {
                return <div>
                  <ListItem object={onebutterfly}/>
              </div>
              })
            }
          </div>
      </div>
    )
  }
}