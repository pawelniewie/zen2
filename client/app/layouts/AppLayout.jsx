import React from 'react';
import MainHeader from './subcomponents/MainHeader';

export default function AppLayout(props) {
    return <div>
        <MainHeader user={props.user} showUserMenu={!props.isLoading}/>
        <main className="main-content">
            {props.children}
        </main>
    </div>
}