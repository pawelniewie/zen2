import issuesRoute from './issues';
import createProjectRoute from './create';
import createIssue from './create_issue';

export default (app) => ({
    path: 'projects',
    childRoutes: [
        createProjectRoute(app),
        issuesRoute(app),
        createIssue(app)
    ]
});
