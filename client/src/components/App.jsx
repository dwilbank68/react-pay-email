import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom';

import * as actions from '../actions/actionsIndex';
import Dashboard from'./Dashboard';
import SurveyNew from'./surveys/SurveyNew';

// import App from './App.jsx';
// const App = (props) => {

import Header from './Header';
import Landing from './Landing';;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }


    render(){
        return (
            <div className="app container">
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }

};

export default connect(null, actions)(App);