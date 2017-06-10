import FocusedTask, {FocusedTaskHeader, FocusedTaskContent} from 'app/layouts/FocusedTask';
import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import CreateProjectForm from './CreateProjectForm';
import {createProjectCanceled, createProjectSuccess} from './actions';
import createFormErrors from 'app/functions/createFormErrors';
import createComponent from 'app/functions/createComponent';


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
    return graphql(mutation, {
        props: ({mutate}) => {
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
                                app.store.dispatch(createProjectSuccess());
                            }
                        });
                },
                onCancel: () => {
                    app.store.dispatch(createProjectCanceled());
                }
            }
        }
    })
    (
        function CreateProjectWithData(props) {
            return <FocusedTask>
                <FocusedTaskHeader>Create new project</FocusedTaskHeader>
                <FocusedTaskContent>
                    <CreateProjectForm {...props}/>
                </FocusedTaskContent>
            </FocusedTask>
        }
    );
});