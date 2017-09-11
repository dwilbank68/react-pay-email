import { FETCH_SURVEYS} from '../actions/types';

let defaultState = [];

var surveysReducer = (state=defaultState, action) => {
    switch(action.type){
        case FETCH_SURVEYS: return action.payload;
        default: return state;
    };
};

export default surveysReducer;

////////// paste this in index.js - surveysReducer //////////////

// import surveysReducer from './surveysReducer';

// surveysReducer: surveysReducer

//////////// paste this in test ///////////////

// var expect = require("expect");
// var df = require('deep-freeze-strict');

// var reducers = require("reducers");

// describe('surveysReducer', () => {
//    it('should ', () => {
//        var action = {
//            type: DO_IT
//        }
//        var res = reducers.surveysReducer(df(), df(action));
//        expect(res).toEqual();
//    });
// });



// to return an object when action.payload is an array,
// return _.mapKeys(action.payload.data, 'id');