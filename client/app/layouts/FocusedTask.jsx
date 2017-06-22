import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import classNames from 'classnames';

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
    return <Grid centered columns={2} doubling>
            <Grid.Column>
                <Segment className={classes}>
                    {children}
                </Segment>
            </Grid.Column>
        </Grid>;
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
