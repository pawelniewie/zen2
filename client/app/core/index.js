import configureStore from './store';
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Main from '../components/Main';
import style from '../styles/main.scss';

const store = configureStore();
render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
