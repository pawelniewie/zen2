import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import LayoutReducer from '../layouts/reducers';
import { reducer as formReducer } from 'redux-form';

/**
 * @param {App} app
 * @param {Array<Function>} asyncReducers
 * @returns {Reducer}
 */
export default function(app, asyncReducers) {
    return combineReducers({
        apollo: app.apolloClient.reducer(),
        routing: routerReducer,
        layout: LayoutReducer,
        form: formReducer,
        ...asyncReducers
    });
}
