import IssuesList from './IssuesList';

export default (app) => ({
    path: ':projectName',
    component: IssuesList
})