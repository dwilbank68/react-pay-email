import {combineReducers} from 'redux';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    surveys: surveysReducer
});

export default rootReducer;