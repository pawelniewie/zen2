import {createAction} from 'redux-actions';
import AppError from 'app/libs/AppError';
import { push } from 'react-router-redux';

export const userLogOut = function () {
    return (dispatch) => {
        dispatch(userLogOutStarted());

        fetch('/users/sign_out.json', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    dispatch(userLogOutFailed(new AppError(json.error)));
                } else {
                    dispatch(push('/'));
                }
            })
            .catch((err) => {
                dispatch(userLogOutFailed(err));
            })
    }
};

export const userLogOutStarted = createAction('USER_LOGOUT_STARTED');
export const userLogOutFailed = createAction('USER_LOGOUT_FAILED');
