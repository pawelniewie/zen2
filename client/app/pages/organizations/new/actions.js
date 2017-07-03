import {createAction} from 'redux-actions';
import AppError from 'app/libs/AppError';
import {browserHistory} from 'react-router';

export const organizationNew = function(email, password, firstName, lastName, organizationName, organizationSlug) {
    return (dispatch) => {
        dispatch(organizationNewStarted());

        fetch('/users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    organization_attributes: {
                        name: organizationName,
                        slug: organizationSlug
                    }
                }
            }),
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(json => {
                if (json.errors) {
                    dispatch(organizationNewFailed(new AppError(json.errors)));
                } else {
                    dispatch(organizationNewSuccess());
                }
            })
            .catch((err) => {
                dispatch(organizationNewFailed(err));
            })
    }
};

export const organizationNewStarted = createAction('ORGANIZATION_NEW_STARTED');
export const organizationNewFailed = createAction('ORGANIZATION_NEW_FAILED');
export const organizationNewSuccess = createAction('ORGANIZATION_NEW_SUCCESS');
