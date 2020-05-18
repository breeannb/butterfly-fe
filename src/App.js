/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import './App.css';
// import Header from './Header.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage';
import List from './List';
import ListItem from './ListItem';
import AboutMe from './AboutMe';
import Header from './Header';
import Admin from './Admin';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';



  export default class App extends Component {
    render() {
        return (
            <>
            <Header />
            
            
            <div className="container">
                <Router>
                <ul>
                    My Tiny Navigation Bar
                    <Link to="/admin"><div>Form</div></Link>
                    <Link to="/list"><div>List Page</div></Link>
                    <Link to="/aboutme"><div>About Me</div></Link>
                </ul>
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