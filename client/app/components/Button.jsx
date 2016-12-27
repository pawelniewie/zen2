import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
    const newProps = {
        className: classNames({
            button: true,
            button__primary: props.isPrimary,
            button__small: props.isSmall
        }, props.className),
        disabled: props.isLoading || props.disabled
    };

    const content = props.isLoading ? (props.loadingLabel || 'Loading...') : props.children;
    return <button {...newProps}>{content}</button>
}

Button.propTypes = {
    isPrimary: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    isSmall: React.PropTypes.bool,
    loadingLabel: React.PropTypes.string,
    disable: React.PropTypes.bool
};