import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CreateProjectForm from './ProjectForm';
import { reduxForm, SubmissionError } from 'redux-form';

import { createProjectCanceled, createProjectSuccess } from './actions';
import createFormErrors from 'app/utils/graphqlErrorsForReduxForm';
import apolloErrorsForReduxForm from 'app/utils/apolloErrorsForReduxForm';
import createComponent from 'app/utils/createComponent';

const mutation = gql`mutation ProjectCreation($project: ProjectInput!) {
    createProject(input: {project: $project}) {
        errors {
            field
            message
        }
        success {
            project {
                id
            }
        }
    }
}`;

export default createComponent((app) => {
    return compose(
        graphql(mutation, {
            props: ({ mutate }) => {
                return {
                    onSubmit: (project) => {
                        return mutate({
                            variables: { project }
                        })
                            .then((gqlResult) => {
                                const result = gqlResult.data.createProject;
                                if (result.errors && result.errors.length) {
                                    return Promise.reject(new SubmissionError(createFormErrors(result.errors, {
                                        stripPrefix: 'project.'
                                    })));
                                } else {
                                    app.store.dispatch(createProjectSuccess());
                                }
                            }).catch((error) => {
                                return Promise.reject(new SubmissionError(apolloErrorsForReduxForm(error)));
                            });
                    },
                    onCancel: () => {
                        app.store.dispatch(createProjectCanceled());
                    }
                }
            }
        }),
        reduxForm({
            form: 'newProject'
        })
    )(CreateProjectForm);
});
