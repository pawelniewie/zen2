import LoginFormPage from './LoginFormPage';
import {injectAsyncReducer, removeAsyncReducer} from 'app/core/store';
import reducers from './reducers';
import {userLoginSuccess} from './actions';


let removeListener;

export default (app) => ({
    path: 'login',
    component: LoginFormPage,
    title: 'Login',
    onEnter: () => {
        injectAsyncReducer(app, 'loginForm', reducers);
        removeListener = app.actionListener.afterAction(userLoginSuccess + '', () => {
            app.apolloClient.resetStore();
            app.history.push('/');
        })
    },
    onLeave: () => {
        removeAsyncReducer(app, 'loginForm');
        removeListener && removeListener();
    }
})