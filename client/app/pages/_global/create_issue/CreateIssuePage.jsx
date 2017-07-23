import IssueForm from './IssueForm';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import FocusedTask, {FocusedTaskContent, FocusedTaskHeader} from 'app/layouts/FocusedTask';
import React from 'react';
import {createIssueCanceled, createIssueSuccess} from './actions';
import createComponent from 'app/utils/createComponent';
import createFormErrors from 'app/utils/createFormErrors';


const mutation = gql`mutation IssueCreation($issue: IssueInput!, $projectId: ID!) {
    issue: createIssue(input: {issue: $issue, projectId: $projectId}) {
        errors {
            field
            message
        }
        success {
            issue {
                id
            }
        }
    }
}`;

export default createComponent((app) => {
    return graphql(mutation, {
        props: ({mutate}) => {
            return {
                onSubmit: (data) => {
                    const {project, ...issue} = data;
                    return mutate({
                        variables: {
                            issue: issue,
                            projectId: project
                        }
                    })
                        .then((gqlResult) => {
                            const result = gqlResult.data.issue;
                            if (result.errors && result.errors.length) {
                                return Promise.reject(createFormErrors(result.errors, {
                                    stripPrefix: 'issue.'
                                }));
                            } else {
                                app.store.dispatch(createIssueSuccess());
                            }
                        });
                },
                onCancel: () => {
                    app.store.dispatch(createIssueCanceled());
                }
            }
        }
    })((props) => {
        return <FocusedTask isWide={true}>
            <FocusedTaskHeader>Create new issue</FocusedTaskHeader>
            <FocusedTaskContent>
                <IssueForm {...props}/>
            </FocusedTaskContent>
        </FocusedTask>
    });
})
