export default function apolloErrorsForReduxForm(errors) {
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
