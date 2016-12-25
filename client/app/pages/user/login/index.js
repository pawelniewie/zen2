import LoginFormPage from './LoginFormPage';
import {injectAsyncReducer, removeAsyncReducer} from 'app/core/store';
import reducers from './reducers';

export default (app) => ({
    path: 'login',
    component: LoginFormPage,
    title: 'Login',
    onEnter: () => {
        injectAsyncReducer(app, 'loginForm', reducers);
    },
    onLeave: () => {
        removeAsyncReducer(app, 'loginForm')
    }
})