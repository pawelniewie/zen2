import React from 'react';
import classNames from 'classnames';
require('./focused-task.scss');

export default function FocusedTask(props) {
    const {
        isWide,
        children,
        className,
        ...otherProps
    } = props;
    const classes = classNames('focused-task', {
        'focused-task__wide': isWide
    }, className);
    return <section className={classes}>
        {children}
    </section>;
}

FocusedTask.propTypes = {
    isWide: React.PropTypes.bool
};

export function FocusedTaskHeader(props) {
    return <h1 className="focused-task--header">{props.children}</h1>;
}

export function FocusedTaskContent(props) {
    return <div className="focused-task--content">{props.children}</div>;
}
