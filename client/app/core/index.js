import configureStore from './store';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux'
import createRoutes from '../pages';

import style from '../styles/main.scss';

const store = configureStore();
const routes = createRoutes(store);
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
