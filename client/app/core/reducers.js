import {combineReducers} from 'redux';
import userLoginReducer from '../pages/user/login/reducers';

export default combineReducers({
    stubReducer: () => {
        return {test: 1}
    },
    loginForm: userLoginReducer
});