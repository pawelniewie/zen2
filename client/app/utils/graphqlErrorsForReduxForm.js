/**
 * @typedef {Object} GQLMutationError
 * @property string field
 * @property string message
 */

/**
 *
 * @param {Array<GQLMutationError>} errors
 * @param {Object} [options]
 * @param {string} [options.stripPrefix] whether to strip prefix from fields
 *
 * @return {Object} object with errors assi
 */
export default function graphqlErrorsForReduxForm(errors, options) {
    if (!Array.isArray(errors)) {
        return {};
    }

    options = options || {};

    return errors.reduce((errors, error) => {
        const field = options.stripPrefix ? error.field.replace(options.stripPrefix, '') : error.field;
        if (!errors[field]) {
            errors[field] = [];
        }
        errors[field].push(error.message);
        return errors;
    }, Object.create(null, {
        isFormErrors: {
            value: true
        }
    }));
}
