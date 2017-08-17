import React from 'react';
import classNames from 'classnames';

export default function ButtonsGroup({className, children, ...otherProps}) {
    const cx = classNames('buttons-group', className);

    return <div className={cx} {...otherProps}>
        {children}
    </div>;
}