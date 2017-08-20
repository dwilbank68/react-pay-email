import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom';

import * as actions from '../actions/actionsIndex';

// import App from './App.jsx';
// const App = (props) => {

import Header from './Header';
import Landing from './Landing';;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }


    render(){
        return (
            <div className="app container">
                <BrowserRouter>
                    <div>
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