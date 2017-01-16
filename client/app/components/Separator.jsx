import React from 'react';
require('./separator.scss');

export default function Separator(props) {
    return <div className="separator">
        <div className="separator--content">
            {props.children}
        </div>
    </div>
};