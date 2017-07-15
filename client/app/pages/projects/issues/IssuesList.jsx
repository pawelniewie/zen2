import React from 'react';
import Label from 'app/components/Label';
import { PropTypes as PT } from 'prop-types';
import reduxDialog from 'redux-dialog';

require('./issues-list.scss');

const IssueView = ({issue, loading}) => {
    return (
        <div>
            {issue && <div>{issue.summary}</div>}
            Chuj, dupa i kamieni kupa.
        </div>
    )
};

const IssueListItem = (props) => {
    const { issue } = props;
    const Dialog = reduxDialog({
        name: 'issueView-' + issue.id
    })(IssueView);

    return (
        <li className="issues-list--entry" key={issue.id}>
                <Dialog onAfterOpen={ () => console.log('On After Open') } issue={issue}/>
                <span className="issues-list--entry--main">
                    <span className="issues-list--key">{issue.key}</span>
                    <span className="issues-list--summary">
                        <a href="#" onClick={() => props.onViewIssue(issue)}>{issue.summary}</a>
                    </span>
                </span>
                <span className="issues-list--entry--details">
                    <span className="issues-list--status">
                        <Label isWarning={true}>In progress</Label>
                    </span>
                </span>
        </li>
    );
};

IssueListItem.propTypes = {
    onViewIssue: PT.func.isRequired,
};

export default function IssuesList({ issues, onViewIssue }) {
    return <ol className="issues-list">
        {(issues || []).map((issue) => {
            return <IssueListItem key={issue.id} issue={issue} onViewIssue={onViewIssue}/>
        })}
    </ol>;
}

IssuesList.propTypes = {
    issues: PT.array,
    onViewIssue: PT.func.isRequired,
};
