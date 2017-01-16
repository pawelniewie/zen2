import React from 'react';
import classNames from 'classnames';

export default function Label(props) {
    const {
        isPrimary,
        isDanger,
        isSuccess,
        isInfo,
        isWarning,
        className,
        children,
        ...otherProps
    } = props;

    const cx = classNames({
        label: true,
        label__primary: isPrimary,
        label__danger: isDanger,
        label__success: isSuccess,
        label__info: isInfo,
        label__warning: isWarning
    }, className);
    return <span className={cx} {...otherProps}>{children}</span>;
}

Label.propTypes = {
    isPrimary: React.PropTypes.bool,
    isDanger: React.PropTypes.bool,
    isSuccess: React.PropTypes.bool,
    isInfo: React.PropTypes.bool,
    isWarning: React.PropTypes.bool
};