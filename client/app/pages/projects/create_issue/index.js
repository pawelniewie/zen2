import CreateIssuePage from 'app/pages/_global/create_issue/CreateIssuePage';
import {createIssueCanceled, createIssueSuccess} from 'app/pages/_global/create_issue/actions';
import createRoute from 'app/functions/route';

export default (app) => {
    const redirectToProjectPage = (action, route) => {
        app.history.push(`/projects/${route.params.projectName}`);
    };

    return createRoute(app, ':projectName/create-issue')
        .useComponent(CreateIssuePage(app))
        .afterActionListener(createIssueCanceled, redirectToProjectPage)
        .afterActionListener(createIssueSuccess, redirectToProjectPage);
};
