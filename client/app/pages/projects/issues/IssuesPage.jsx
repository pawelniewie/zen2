import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import React from 'react';
import { connect } from 'react-redux';
import { openDialog } from 'redux-dialog';

import createComponent from 'app/functions/createComponent';
import ListingLayout from 'app/layouts/ListingLayout';
import Button from 'app/components/Button';
import IssuesList from './IssuesList';

const query = gql`
query IssuesForProject($project: ProjectSelector) {
  issues(project: $project) {
    edges {
      node {
        id
      	key
        summary
        no
        description
        assignee {
          username
          email
        }
      }
    }
  }
}`;

const IssuePage = (props) => {
    const { issues, params, onViewIssue } = props;
    return (
        <ListingLayout title="Issues" sideHeaderContent={
            <Button isSmall={true} to={`/projects/${params.projectName}/create-issue`}>New issue</Button>
        }>
            <IssuesList issues={issues} onViewIssue={onViewIssue}/>
        </ListingLayout>
    );
};

export default createComponent((app) => {
    return compose(
        connect(
            (state) => state,
            (dispatch, ownProps) => {
                return {
                    onViewIssue: (issue) => {
                        console.log(issue);
                        dispatch(openDialog('issueView-' + issue.id))
                    }
                }
            }
        ),
        graphql(query, {
            props: ({ data: { issues } }) => {
                const data = {
                    issues: []
                };
                if (issues && issues.edges) {
                    data.issues = issues.edges.map(e => e.node);
                }
                return data;
            },
            options: (ownProps) => ({
                variables: {
                    project: {
                        key: ownProps.params.projectName
                    }
                }
            })
        })
    )(IssuePage);
});
