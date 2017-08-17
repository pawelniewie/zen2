import * as actions from './actions';
import {handleActions} from 'redux-actions';

export default handleActions({
    [actions.userLogOutStarted]: (state) => {
        return {...state, isLoggingOut: true};
    },
    [actions.userLogOutFailed]: (state, action) => {
        return {...state, isLoggingOut: false, error: action.payload};
    }
}, {
    isLoggingOut: false
});
