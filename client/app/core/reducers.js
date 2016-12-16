import {combineReducers} from 'redux';

export default function(asyncReducers) {
    return combineReducers({
        stubReducer: () => {
            return {test: 1}
        },
        ...asyncReducers
    });
}