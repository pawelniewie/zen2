import React from 'react';
import classNames from 'classnames';

export function FormErrors({errors}) {
    let newErrors = [];
    if (errors) {
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


export function FormLabel({className, htmlFor, children, ...otherProps}) {
    const classes = classNames('form--label', className);
    return <label htmlFor={htmlFor} className={classes} {...otherProps}>{children}</label>
}

FormLabel.propTypes = {
    htmlFor: React.PropTypes.string,
    className: React.PropTypes.string
};


export function FormButtons({className, children, ...otherProps}) {
    return <div className={classNames('form--buttons', className)} {...otherProps}>{children}</div>;
}

export function FormDescription({className, children, ...otherProps}) {
    return <div className={classNames('form--description', className)} {...otherProps}>{children}</div>;
}