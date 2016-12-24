import {createAction} from 'redux-actions';

export const userLogin = function(login, password) {
    return (dispatch) => {
        dispatch(userLoginStarted());

        setTimeout(() => {
            const date = new Date();
            if (date % 2) {
                dispatch(userLoginFailed());
            } else {
                dispatch(userLoginSuccess());
            }
        }, 1000);
    }
};

export const userLoginStarted = createAction('USER_LOGIN_STARTED');
export const userLoginFailed = createAction('USER_LOGIN_FAILED');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');