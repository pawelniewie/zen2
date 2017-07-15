import React from 'react';
import {PropTypes as PT} from 'prop-types';
import {Label} from 'semantic-ui-react';

require('./IssuesList.scss');

const IssueListItem = (props) => {
  const {issue} = props;

  return (
    <li className="issues-list--entry" key={issue.id}>
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
    </li>
  );
};

IssueListItem.propTypes = {
  onViewIssue: PT.func.isRequired
};

export default function IssuesList({issues, onViewIssue}) {
  return <ol className="issues-list">
    {(issues || []).map((issue) => {
      return <IssueListItem key={issue.id} issue={issue} onViewIssue={onViewIssue}/>
    })}
  </ol>;
}

IssuesList.propTypes = {
  issues: PT.array,
  onViewIssue: PT.func.isRequired
};
