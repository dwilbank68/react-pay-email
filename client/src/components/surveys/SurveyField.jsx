import React from 'react';


// import SurveyField from './SurveyField.jsx';
// const SurveyField = (props) => {
const SurveyField = ({input, label, meta:{error, touched}}) => {

    // input --> onBlur, onChange, onDragStart, onDrop, onFocus, value
    // meta  --> active, asyncValidating, autofilled, dirty, dispatch,
    //           error, form, initial, invalid, pristine,
    //           submitFailed, submitting, touched, valid, visited



    return (
        <div className="survey-field">
            <label >{label}</label>
            <input {...input}
                    style={{marginBottom: '5px'}}/>
            <div    className="red-text"
                    style={{marginBottom:'20px'}}>
                {touched && error}
            </div>
        </div>
    );
};


// SurveyField.defaultProps = {};
// SurveyField.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default SurveyField;
