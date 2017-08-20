import _ from 'lodash';
import { FETCH_USER} from '../actions/types';

let defaultState = null;

var authReducer = (state=defaultState, action) => {
    switch(action.type){
        case FETCH_USER: return action.payload || false;
        default: return state;
    };
};

export default authReducer;

////////// paste this in index.js - authReducer //////////////

// import authReducer from './authReducer';

// authReducer: authReducer

//////////// paste this in test ///////////////

// var expect = require("expect");
// var df = require('deep-freeze-strict');

// var reducers = require("reducers");

// describe('authReducer', () => {
//    it('should ', () => {
//        var action = {
//            type: DO_IT
//        }
//        var res = reducers.authReducer(df(), df(action));
//        expect(res).toEqual();
//    });
// });



// to return an object when action.payload is an array,
// return _.mapKeys(action.payload.data, 'id');