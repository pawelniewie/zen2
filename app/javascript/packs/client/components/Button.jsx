import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

export default function Button(props) {
    const {
        isPrimary,
        isSmall,
        disabled,
        isLoading,
        loadingLabel,
        isLink,
        className,
        children,
        ...otherProps
    } = props;
    const newProps = {
        className: classNames({
            button: true,
            button__primary: isPrimary,
            button__small: isSmall,
            button__link: isLink
        }, className),
        disabled: isLoading || disabled
    };
    const Element = (props.to) ? Link : 'button';

    const content = isLoading ? (loadingLabel || 'Loading...') : children;
    return (
        React.createElement(Element, {...newProps, ...otherProps}, content)
    )
}

Button.propTypes = {
    isPrimary: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    isSmall: React.PropTypes.bool,
    loadingLabel: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    isLink: React.PropTypes.bool,
    to: React.PropTypes.string
};