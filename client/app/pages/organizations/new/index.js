import LoginFormPage from './NewOrganizationPage';
import {injectAsyncReducer, removeAsyncReducer} from 'app/core/store';
import reducers from './reducers';
import {userLoginSuccess} from './actions';


let removeListener;

export default (app) => ({
    path: 'new',
    component: LoginFormPage,
    title: 'Login',
    onEnter: () => {
        injectAsyncReducer(app, 'organizationForm', reducers);
        removeListener = app.actionListener.afterAction(userLoginSuccess + '', () => {
            app.apolloClient.resetStore();
            app.history.push('/');
        })
    },
    onLeave: () => {
        removeAsyncReducer(app, 'organizationForm');
        removeListener && removeListener();
    }
})
