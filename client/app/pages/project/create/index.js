import CreateProjectFormPath from './CreateProjectFormPage';
import {createProjectCanceled, createProjectSuccess} from './actions';
import createRoute from 'app/functions/route';

export default (app) => {
    const redirectToMainPage = () => {
        app.history.push('/');
    };

    return createRoute(app, 'create')
        .useComponent(CreateProjectFormPath(app))
        .afterActionListener(createProjectCanceled, redirectToMainPage)
        .afterActionListener(createProjectSuccess, redirectToMainPage)
}