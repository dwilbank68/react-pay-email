import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';

import FIELDS from './formFields';
import * as actions from '../../actions/actionsIndex';
// import SurveyFormReview from './SurveyFormReview.jsx';
// const SurveyFormReview = (props) => {
const SurveyFormReview = ({onCancel, formValues, submitSurvey}) => {

    // no lifecycle methods
    // no refs

    const reviewFields = _.map(FIELDS, ({label, name}) => {
        return (
            <div key={label}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return (
        <div className="survey-review">
            <h5>Please confirm your entries</h5>

            {reviewFields}

            <button className="yellow white-text darken-3 btn-flat"
                    onClick={onCancel}>
                Back
            </button>
            <button className="green btn-flat right white-text"
                    onClick={()  => submitSurvey(formValues)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state, ownProps) {
   return { formValues: state.form.SurveyForm.values }
}



// SurveyFormReview.defaultProps = {};
// SurveyFormReview.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default connect(mapStateToProps, actions)(SurveyFormReview);
// export default SurveyFormReview;