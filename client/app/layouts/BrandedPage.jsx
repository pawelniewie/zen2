import React from 'react';
import styles from './branded-page.scss';

export default function BrandedPage(props) {
    return <section className="branded-page">
        <header className="branded-page--header">
            Use zen
        </header>
        <div className="branded-page--content">
            {props.children}
        </div>
    </section>;
}