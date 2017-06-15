import {combineReducers} from 'redux';
import LayoutReducer from '../layouts/reducers';

/**
 * @param {App} app
 * @param {Array<Function>} asyncReducers
 * @returns {Reducer}
 */
export default function(app, asyncReducers) {
    return combineReducers({
        apollo: app.apolloClient.reducer(),
        Layout: LayoutReducer,
        ...asyncReducers
    });
}
