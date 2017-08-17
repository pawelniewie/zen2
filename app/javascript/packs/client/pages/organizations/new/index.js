import NewOrganizationPage from './NewOrganizationPage';
import {injectAsyncReducer, removeAsyncReducer} from 'app/core/store';
import reducers from './reducers';

export default (app) => ({
    path: 'new',
    component: NewOrganizationPage,
    title: 'Sign up',
    onEnter: () => {
        injectAsyncReducer(app, 'organizationForm', reducers);
    },
    onLeave: () => {
        removeAsyncReducer(app, 'organizationForm');
    }
})
