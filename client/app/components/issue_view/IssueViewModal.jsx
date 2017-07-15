import reduxDialog from 'redux-dialog';

import IssueView from './IssueView';

const IssueViewModal = reduxDialog({
    name: 'Issue View'
})(IssueView);

export default IssueViewModal;
