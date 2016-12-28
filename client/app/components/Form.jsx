import React from 'react';
import classNames from 'classnames';

export function FormErrors({errors}) {
    let newErrors = [];
    if (errors && !Array.isArray(errors)) {
        if (Array.isArray(errors)) {
            newErrors = errors;
        } else {
            newErrors.push(errors);
        }
    }

    if (newErrors.length > 0) {
        return <ul className="form--errors">
            {newErrors.map((e, i) => <li key={i} className="form--errors--error">{e}</li>)}
        </ul>
    }
    return null;
}

FormErrors.propTypes = {
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
};

export function FormField(props) {
    const className = classNames('form--field');
    return <div className={className}>{props.children}</div>;
}

