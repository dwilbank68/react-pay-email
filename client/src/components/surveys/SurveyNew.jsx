import React, { Component } from 'react';
import {reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
// import * as actions from '../actions/actionsIndex';

// import { bindActionCreators } from 'redux';

import SurveyForm from './SurveyForm.jsx';
import SurveyFormReview from './SurveyFormReview.jsx';



class SurveyNew extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    componentWillUnmount() {
        this.props.dispatch(reset('surveyForm'));
    }


    state = {showFormReview: false};

    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    renderContent(){
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={ () => this.setState({showFormReview:false}) }/>;
        }
        return <SurveyForm onSurveySubmit={ () => this.setState({showFormReview:true}) }/>;
    }

    render() {
        return (
            <div className="survey-new">
                {this.renderContent()}
            </div>
        );
    }
}

const options = { form:'surveyForm' }
const connectedComponent = connect(null, null)(SurveyNew);


export default reduxForm(options)(connectedComponent);
