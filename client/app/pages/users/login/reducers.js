import * as actions from './actions';
import {handleActions} from 'redux-actions';

export default handleActions({
    [actions.userLoginStarted]: (state) => {
        return {...state, isLogging: true};
    },
    [actions.userLoginSuccess]: (state) => {
        return {...state, isLogging: false};
    },
    [actions.userLoginFailed]: (state, action) => {
        return {...state, isLogging: false, error: action.payload};
    }
}, {
    isLogging: false
});
