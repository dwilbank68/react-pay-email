import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/actionsIndex';

class Payments extends Component {

    render() {
        return (
            <StripeCheckout amount={500}
                            name="Emaily"
                            description="$5 for 5 email credits"
                            token={token => this.props.handleToken(token)}
                            stripeKey={process.env.REACT_APP_STRIPE_KEY} >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);

// 1 -  default U.S. dollars - amount in cents
// 2 -  callback function which has stripe's token as its argument


// import { bindActionCreators } from 'redux';
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



// if 'import * as actions from '../actions/actionsIndex';'

// export default connect(mapStateToProps, () => ({}))();
// export default connect(mapStateToProps, mapDispatchToProps)();
// export default connect(mapStateToProps, { nameOfImportedAction })();

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')