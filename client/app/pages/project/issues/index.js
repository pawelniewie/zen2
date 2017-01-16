import IssuesPage from './IssuesPage';

export default (app) => ({
    path: ':projectName',
    component: IssuesPage(app)
})