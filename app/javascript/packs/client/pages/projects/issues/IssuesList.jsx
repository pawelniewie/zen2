import React from 'react';
import {PropTypes as PT} from 'prop-types';
import {Label, List} from 'semantic-ui-react';

require('./IssuesList.scss');

const IssueListItem = (props) => {
  const {issue} = props;

  return (
    <List.Item key={issue.id}>
        <div className="content">
          <span className="issues-list--entry--main">
            <span className="issues-list--key">{issue.key}</span>
            <span className="issues-list--summary">
              <a href="#" onClick={() => props.onViewIssue(issue)}>{issue.summary}</a>
            </span>
          </span>
          <span className="issues-list--entry--details">
            <span className="issues-list--status">
              <Label>In progress</Label>
            </span>
          </span>
        </div>
    </List.Item>
  );
};

IssueListItem.propTypes = {
  onViewIssue: PT.func.isRequired
};

export default function IssuesList({issues, onViewIssue}) {
  return <List relaxed divided>
  {(issues || []).map((issue) => {
      return <IssueListItem key={issue.id} issue={issue} onViewIssue={onViewIssue}/>
    })}
  </List>;
}

IssuesList.propTypes = {
  issues: PT.array,
  onViewIssue: PT.func.isRequired
};
