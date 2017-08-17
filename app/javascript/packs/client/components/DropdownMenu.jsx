import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

export function DropdownMenu({className, children, ...otherProps}) {
    return <div className={classNames('dropdown-menu', className)} {...otherProps}>
        {children}
    </div>;
};

export function DropdownItem(props) {
    const {
        to,
        isActive,
        isDisabled,
        className,
        ...otherProps
    } = props;

    const element = to ? Link : 'button';
    return React.createElement(element, {
        className: classNames(
            'dropdown-menu--item',
            className, {
                'dropdown-menu--item__active': isActive,
                'dropdown-menu--item__disabled': isDisabled
            }
        ),
        to: to,
        ...otherProps
    })
}

DropdownItem.propTypes = {
    isActive: React.PropTypes.bool,
    isDisabled: React.PropTypes.bool,
    component: React.PropTypes.element,
    to: React.PropTypes.string
};

export function DropdownSeparator() {
    return <div className="dropdown-menu--separator"></div>;
};