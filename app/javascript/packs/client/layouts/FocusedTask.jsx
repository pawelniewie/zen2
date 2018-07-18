import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
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
    return <div className="create-task--wrapper">
		<div className="grid-container">
            <div className="grid-x">
                <Segment className={classes}>
                    {children}
                </Segment>
            </div>
        </div>
				</div>;
}

FocusedTask.propTypes = {
    isWide: React.PropTypes.bool
};

export function FocusedTaskHeader(props) {
    return <Header className="focused-task--header">{props.children}</Header>;
}

export function FocusedTaskContent(props) {
    return <div className="focused-task--content">{props.children}</div>;
}
