import {createStore} from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState) {
    let store = createStore(createReducer(), initialState);
    store.asyncReducers = {};
    return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}