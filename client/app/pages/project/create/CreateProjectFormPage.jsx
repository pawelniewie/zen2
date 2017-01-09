import FocusedTask, {FocusedTaskHeader} from 'app/layouts/FocusedTask';
import React from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import {connect} from 'react-redux';
import CreateProjectForm from './CreateProjectForm';
import {createProjectCanceled, createProjectSuccess} from './actions';
import createFormErrors from 'app/functions/createFormErrors';


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

const CreateProjectFormPage = compose(
    connect(undefined, (dispatch) => {
            return {
                onCancel: () => {
                    dispatch(createProjectCanceled());
                },
                // temporary fix
                dispatch: dispatch
            }
        }
    ),
    graphql(mutation, {
        props: ({mutate, ownProps}) => {
            return {
                onSubmit: (project) => {
                    return mutate({
                        variables: {project}
                    })
                        .then((gqlResult) => {
                            const result = gqlResult.data.createProject;
                            if (result.errors && result.errors.length) {
                                return Promise.reject(createFormErrors(result.errors, {
                                    stripPrefix: 'project.'
                                }));
                            } else {
                                ownProps.dispatch(createProjectSuccess());
                            }
                        });
                }
            }
        }
    }),
)(
    function CreateProjectWithData(props) {
        return <FocusedTask>
            <FocusedTaskHeader>Create new project</FocusedTaskHeader>
            <CreateProjectForm {...props}/>
        </FocusedTask>
    }
);
export default CreateProjectFormPage;