import CreateProjectFormPath from './CreateProjectFormPage';
import {createProjectCanceled, createProjectSuccess} from './actions';
let removeCreateProjectCanceledListener;
let removeCreateProjectSuccessListener;
export default (app) => ({
    path: 'create',
    component: CreateProjectFormPath,
    onEnter: () => {
        removeCreateProjectCanceledListener = app.actionListener.afterAction(createProjectCanceled + '', () => {
            app.history.push('/');
        });
        removeCreateProjectSuccessListener = app.actionListener.afterAction(createProjectSuccess + '', () => {
            app.history.push('/');
        });
    },
    onLeave: () => {
        removeCreateProjectCanceledListener && removeCreateProjectCanceledListener();
        removeCreateProjectSuccessListener && removeCreateProjectSuccessListener();
    }
})