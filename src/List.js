import React, { Component } from 'react';
import './App.css';
import request from 'superagent'; 
import ListItem from './ListItem.js';
import WingPatternDropdown from './WingPattern_Dropdown';




export default class App extends Component {
  
  state = { butterflies: []}
  
  componentDidMount = async () => {
    const data = await request.get(`https://glacial-lake-69827.herokuapp.com/butterflies`);

    this.setState({ butterflies: data.body})
  }
  
  // Wingpattern Handle Change for Dropdown
  handleWingPatternChange = async (e) => {
    this.setState({ selected: e.target.value })
    const fetchedData = await request.get(`https://glacial-lake-69827.herokuapp.com/wingpatterns/${e.target.value}`);
    this.setState({ wingpatterns: fetchedData.body})
  }


  render() {
    return (
      <div>
          <div> 
            {/* This is the List Page */}

            {/* Wingpattern Dropdown */}
            <WingPatternDropdown wingPatternChange={this.handleWingPatternChange}/>


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