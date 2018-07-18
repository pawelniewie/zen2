import React from 'react';
import {PropTypes as PT} from 'prop-types';
import {Label, List} from 'semantic-ui-react';

require('./IssuesList.scss');

const IssueListItem = (props) => {
  const {issue} = props;

  return (
    <List.Item className="issue-list-item" key={issue.id}>
        <div className="content grid-x">
					<div className="large-3 cell">
          <span className="issues-list--entry--main">
            <span className="issues-list--key">{issue.key}</span>
            <span className="issues-list--summary">
              <a href="#" onClick={() => props.onViewIssue(issue)}>{issue.summary}</a>
            </span>
          </span>
					</div>
					<div className="large-3 cell">
          <span className="issues-list--entry--details">
            <span className="issues-list--status">
              <Label>{issue.assignee} Pawel Pe</Label>
            </span>
          </span>
					</div>
					<div className="large-3 cell">
          <span className="issues-list--entry--details">
            <span className="issues-list--status">
              <Label>In progress</Label>
            </span>
          </span>
					</div>
					<div className="large-3 cell">
          <span className="issues-list--entry--details">
            <span className="issues-list--status">
              <Label>12.10.2017</Label>
            </span>
          </span>
					</div>
        </div>
    </List.Item>
  );
};

IssueListItem.propTypes = {
  onViewIssue: PT.func.isRequired
};

export default function IssuesList({issues, onViewIssue}) {
  return <List relaxed divided>
		<div className="grid-x">
			<div className="large-3 cell issue-list-header-key">
				Issue Key
			</div>
			<div className="large-3 cell issue-list-header">
				Assignee
			</div>
			<div className="large-3 cell issue-list-header">
				Status
			</div>
			<div className="large-3 cell issue-list-header">
				Finish before
			</div>
		</div>
  {(issues || []).map((issue) => {
      return <IssueListItem key={issue.id} assignee={issue.asignee} issue={issue} onViewIssue={onViewIssue}/>
    })}
  </List>;
}

IssuesList.propTypes = {
  issues: PT.array,
  onViewIssue: PT.func.isRequired
};
