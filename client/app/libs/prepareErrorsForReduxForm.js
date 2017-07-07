import isArray from 'lodash/isArray'
import indexOf from 'lodash/indexOf'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

const prepareErrorsForReduxForm = (errors) => {
    if (typeof errors !== 'object') {
        return errors
    } else {
        if (isArray(errors)) {
            return errors.map( m => prepareErrorsForReduxForm(m) )
        } else {
            return reduce(errors, (result, value, key) => {
                if (indexOf(key, '.') !== -1) {
                    set(result, key, prepareErrorsForReduxForm(value))
                } else {
                    result[key] = prepareErrorsForReduxForm(value)
                }
                return result
            }, {});
        }
    }
};

export default prepareErrorsForReduxForm;
