import {assert} from 'chai';
import * as subject from './prepareErrorsForReduxForm';

describe('libs/prepareErrorsForReduxForm', () => {
    it('unmarshal nested errors', () => {
        assert.deepEqual(subject.prepareErrorsForReduxForm({
            "organization.name": [
                "error"
            ]
        }), {
            organization: {
                name: ['error']
            }
        });
    });
});
