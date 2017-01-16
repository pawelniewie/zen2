import React from 'react';
import MainHeader from './subcomponents/MainHeader';

export default function AppLayout(props) {
    return <div>
        <MainHeader user={props.user} showUserMenu={!props.isLoading}/>
        <main className="main-content">
            {props.children}
        </main>
        <footer className="main-footer">
            <span className="main-footer--product-version">Zen 0.1.5</span>
        </footer>
    </div>
}