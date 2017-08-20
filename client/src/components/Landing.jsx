import React from 'react';
import PropTypes from 'prop-types';


// import Landing from './Landing.jsx';
// const Landing = (props) => {
const Landing = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <div className="landing" style={{textAlign: 'center'}}>
            <h1>Emaily!</h1>
            Collect feedback from your users
        </div>
    );
};


// Landing.defaultProps = {};
// Landing.propTypes = {
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

export default Landing;
