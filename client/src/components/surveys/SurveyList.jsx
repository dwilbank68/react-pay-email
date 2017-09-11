import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {fetchSurveys} from '../../actions/actionsIndex';

// import { bindActionCreators } from 'redux';

// import SurveyList from './SurveyList.jsx';
class SurveyList extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    // state = { whatever: false }; // if using create-react-app

    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    componentDidMount() {
        this.props.fetchSurveys();
    }


    render() {
        return (
            <div className="survey-list">
                {this.renderSurveys()}
            </div>
        );
    }

    renderSurveys() {
        return this.props.surveys.map( survey => {
            return (
                <div className="card blue-grey darken-1" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">
                            {survey.title}
                        </span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Send On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#">Yes: {survey.yes}</a>
                        <a href="#">No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }
}

// SurveyList.defaultProps = {};
// SurveyList.propTypes = {
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

function mapStateToProps(state, ownProps) {
    return { surveys: state.surveys }
}

///////////////////////////// context //////////////////////////////

// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

// export default SurveyList;
// export default connect()(SurveyList);
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(SurveyList);

// export default connect(mapStateToProps, () => ({}))(SurveyList);
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')