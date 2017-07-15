import React from 'react';
import Label from 'app/components/Label';

require('./issues-list.scss');

const IssueListItem = (props) => {
    const { issue } = props;
    return (<li className="issues-list--entry" key={issue.id}>
                <span className="issues-list--entry--main">
                    <span className="issues-list--key">{issue.key}</span>
                <span className="issues-list--summary">{issue.summary}</span>

                </span>
        <span className="issues-list--entry--details">
                    <span className="issues-list--status">
                        <Label isWarning={true}>In progress</Label>
                    </span>
                </span>
    </li>);
};

export default function IssuesList({issues}) {
    return <ol className="issues-list">
        {(issues || []).map((issue) => {
            return <IssueListItem issue={issue}/>
        })}
    </ol>;
}

IssuesList.propTypes = {
    issues: React.PropTypes.array
};
