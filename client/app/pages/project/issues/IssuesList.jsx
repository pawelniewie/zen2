import React from 'react';
import Label from 'app/components/Label';

require('./issues-list.scss');

export default function IssuesList({issues}) {
    return <ol className="issues-list">
        {issues.map((issue) => {
            return <li className="issues-list--entry" key={issue.id}>
                <span className="issues-list--entry--main">
                    <span className="issues-list--key">{issue.key}</span>
                <span className="issues-list--title">{issue.title}</span>

                </span>
                <span className="issues-list--entry--details">
                    <span className="issues-list--status">
                        <Label isWarning={true}>In progress</Label>
                    </span>
                </span>
            </li>
        })}
    </ol>;
}

IssuesList.propTypes = {
    issues: React.PropTypes.array
};