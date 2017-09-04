import _ from 'lodash';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// or 'react-router', if version < 4
import {Field, reduxForm} from 'redux-form';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'

import FIELDS from './formFields';

// import { connect } from 'react-redux';
// import * as actions from '../actions/actionsIndex';

// import { bindActionCreators } from 'redux';

// import SurveyForm from './SurveyForm.jsx';



class SurveyForm extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    renderFields(){
        return _.map(FIELDS, ({label, name}) => {
            return (
                <Field  component={SurveyField}
                        type="text"
                        key={name}
                        label={label}
                        name={name} />
            )
        })
    }

    render() {
        return (
            <div className="survey-form">
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link   to="/surveys"
                            className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button     className="teal btn-flat right white-text"
                                type="submit">
                        Submit
                        <i className="material-icons right">
                            done
                        </i>
                    </button>
                </form>

            </div>
        );
    }
}

// SurveyForm.defaultProps = {};
// SurveyForm.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

///////////////////////////// mapDispatchToProps //////////////////////////////
//
// Option 1. Skip it - dispatch is on props anyway
// -----------> this.props.dispatch(loadCourses());
//
//
// Option 2. Wrap props manually
//
// function mapDispatchToProps(dispatch) {
//     return {
//         loadCourses: () => {dispatch(loadCourses())},
//         createCourse: (course) => {dispatch(createCourse(course))},
//     };
// }
// -> this.props.loadCourses, this.props.createCourse
//
//
// Option 3. use bindActionCreators (which is just a shortcut method)
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { nameYouWantOnProps:nameOfImportedAction },
//         dispatch
//     );
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }
//
// -> this.props.actions.loadCourses();

///////////////////////////// mapStateToProps //////////////////////////////

// function mapStateToProps(state, ownProps) {
//     return { whatever: state.whatever }
// }
//
// const mapStateToProps = state => ({
//     articles: state.articles
// });

///////////////////////////// context //////////////////////////////

// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');


// export default connect()(SurveyForm);
// export default SurveyForm;

function validate (v){
    const errors = {};

    errors.emails = validateEmails(v.emails || '');

    _.each(FIELDS, ({name}) => {
        if (!v[name]) errors[name] = 'You must provide a value';
    })

    return errors;
}

const options = {
    form: 'SurveyForm',
    destroyOnUnmount: false,                            // 1
    validate
}

export default reduxForm(options)(SurveyForm)
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(SurveyForm);

// export default connect(mapStateToProps, () => ({}))(SurveyForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
// export default connect(mapStateToProps, { nameOfImportedAction })(SurveyForm);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')