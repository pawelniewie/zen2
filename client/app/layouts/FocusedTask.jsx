import React from 'react';
import styles from './focused-task.scss';

export default function FocusedTask(props) {
    return <section className="focused-task">
        {props.children}
    </section>;
}

export function FocusedTaskHeader(props) {
    return <h1 className="focused-task--header">{props.children}</h1>
}