import IssuesList from './IssuesList';

export default (store) => ({
    path: ':projectName',
    component: IssuesList
})