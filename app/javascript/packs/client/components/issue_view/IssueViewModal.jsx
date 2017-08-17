import React from 'react';
import reduxDialog from 'redux-dialog';
import { PropTypes as PT } from 'prop-types';

import IssueViewWithData from './IssueViewWithData';

const IssueViewWrapper = (props) => {
    return (
        <IssueViewWithData issueId={props.payload.issueId}/>
    )
};

IssueViewWrapper.propTypes = {
    payload: PT.object
};

const IssueViewModal = reduxDialog({
    name: 'Issue View'
})(IssueViewWrapper);

export default IssueViewModal;
