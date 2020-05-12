import React, { Component } from 'react';
import './App.css';
// import Header from './Header.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage';
import List from './List';
import ListItem from './ListItem';
import AboutMe from './AboutMe';
import Admin from './Admin';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';



  export default class App extends Component {
    render() {
        return (
            <>
            <div className="container">
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
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
                        <Route 
                            path="/admin" 
                            exact
                            render={(routerProps) => <Admin {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}