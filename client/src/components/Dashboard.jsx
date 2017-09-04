import React from 'react';
import {Link} from 'react-router-dom';
// or 'react-router', if version < 4
// import {connect} from 'react-redux';

// import Dashboard from './Dashboard.jsx';
// const Dashboard = (props) => {
const Dashboard = ({whatever1, whatever2}) => {

    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <div className="dashboard">
            <div >
                Dashboard
                <div className="fixed-action-btn">
                    <Link   className="btn-floating btn-large red"
                            to="/surveys/new">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

//function mapStateToProps(state, ownProps) {
//    return { whatever: state.whatever }
//}
//or
//const mapStateToProps = state => ({
//    articles: state.articles
//});


// Dashboard.defaultProps = {};
// Dashboard.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;