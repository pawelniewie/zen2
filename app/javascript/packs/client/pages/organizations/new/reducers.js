import * as actions from './actions';
import {handleActions} from 'redux-actions';

export default handleActions({
    [actions.organizationNewStarted]: (state) => {
        return {...state, isLogging: true};
    },
    [actions.organizationNewSuccess]: (state) => {
        return state;
    },
    [actions.organizationNewFailed]: (state, action) => {
        return {...state, isLogging: false, error: action.payload};
    }
}, {
    isLogging: false
});
