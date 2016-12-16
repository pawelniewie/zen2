import {Router, browserHistory} from 'react-router';
import React from 'react';
import routes from '../pages';

export default function Main() {
    return <Router history={browserHistory} routes={routes}></Router>;
}