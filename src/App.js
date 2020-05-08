import React, { Component } from 'react';
import './App.css';
// import Header from './Header.js';
import HomePage from './HomePage.js'
import DetailPage from './DetailPage'
import List from './List'
import ListItem from './ListItem'
import AboutMe from './AboutMe'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';



  export default class App extends Component {
    render() {
        return (
            <>
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/butterfly" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/butterfly/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                        <Route 
                            path="/aboutme" 
                            exact
                            render={(routerProps) => <AboutMe {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <List {...routerProps} />} 
                        />
                        <Route 
                            path="/listitem" 
                            exact
                            render={(routerProps) => <ListItem {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}