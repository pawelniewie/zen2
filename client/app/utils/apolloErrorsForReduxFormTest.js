import { assert } from 'chai';
import subject from './apolloErrorsForReduxForm';

xdescribe('utils/apolloErrorsForReduxForm', () => {
    it('unmarshal nested errors', () => {
        assert.deepEqual(subject({
            "errors": [{
                "message": "Variable project of type ProjectInput! was provided invalid value",
                "locations": [{ "line": 1, "column": 26 }],
                "value": { "key": "sdf" },
                "problems": [{ "path": ["name"], "explanation": "Expected value to not be null" }]
            }]
        }, { stripPrefix: "project." }), {
            "name": ["This is sparta!"]
        });
    });

    it('produces global error', () => {
        assert.deepEqual(subject({
            "errors": [{
                "message": "Variable project of type ProjectInput! was provided invalid value",
                "locations": [{ "line": 1, "column": 26 }],
                "value": { "key": "sdf" }
            }]
        }), {
            "_error": "Variable project of type ProjectInput! was provided invalid value"
        });
    });
});
