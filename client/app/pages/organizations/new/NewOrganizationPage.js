import { connect } from 'react-redux';
import { prepareModelForRails } from 'app/libs/prepareModelForRails';
import { prepareErrorsForReduxForm } from 'app/libs/prepareErrorsForReduxForm';
import OrganizationForm from './OrganizationForm';
import React from 'react';
import { compose } from 'react-apollo';
import { reduxForm, SubmissionError } from 'redux-form';

const NewOrganizationPage = compose(
    connect(
        (state) => ({}),
        (dispatch) => {
            return {
                onSubmit: (values) => {
                    return fetch('/users.json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user: prepareModelForRails(values, ["organization"])
                        }),
                        credentials: 'same-origin'
                    })
                        .then(response => response.json())
                        .then(json => {
                            if (json.errors) {
                                throw new SubmissionError(prepareErrorsForReduxForm(json.errors));
                            } else {
                                dispatch(organizationNewSuccess());
                            }
                        });
                }
            }
        }
    ),
    reduxForm({
        form: 'newOrganization'
    })
)(OrganizationForm);

export default NewOrganizationPage;
