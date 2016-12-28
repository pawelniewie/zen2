import React from 'react';
import styles from './listing-layout.scss';

export default function ListingLayout(props) {
    return <div className="listing-layout">
        <header className="listing-layout--header">
            {   props.sideHeaderContent ?
                <div className="listing-layout--side-header-content">{props.sideHeaderContent}</div> : null }
            <h1 className="listing-layout--title">{props.title}</h1>
        </header>
        <div className="listing-layout--content">
            {props.children}
        </div>
    </div>
};

ListingLayout.propTypes = {
    title: React.PropTypes.string,
    sideHeaderContent: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ])
};

ListingLayout.filterClass = 'listing-layout--filter';