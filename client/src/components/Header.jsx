import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
// import Header from './Header.jsx';
class Header extends Component {

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

    renderContent(){
        switch(this.props.auth){
            case null: return;
            case false: return (
                <li>
                    <a href="/auth/google">Login With Google</a>
                </li>
            );
            default: return [
                <li key='a'><Payments/></li>,
                <li key='b' style={{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                </li>,
                <li key='c'><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                          className="left brand-logo" >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right">

                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

// Header.defaultProps = {};
// Header.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Header.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps, null) (Header);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class Header extends Component {

    // this.state = {
    //     'whatever':{}
    // }

    // handleSubmit = (e) => {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    // render() {
    //     return (
    //         <div className="header">
    //         </div>
    //     );
    // }
// }