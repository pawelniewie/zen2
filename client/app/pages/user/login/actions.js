import {createAction} from 'redux-actions';

export const userLogin = function(login, password) {
    return (dispatch) => {
        dispatch(userLoginStarted());

        fetch('/users/sign_in.json', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: login,
                    password: password
                }
            })
        })
            .then(() => {
                dispatch(userLoginSuccess);
            })
            .catch((err) => {
                dispatch(userLoginFailed(err));
            })
    }
};

export const userLoginStarted = createAction('USER_LOGIN_STARTED');
export const userLoginFailed = createAction('USER_LOGIN_FAILED');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');