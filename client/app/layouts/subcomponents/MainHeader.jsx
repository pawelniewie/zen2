import React from 'react';
import UserInHeader from './UserInHeader';
import InlineSVG from 'react-svg-inline';

import logo from 'app/images/logo.svg';
import {Link} from 'react-router';

export default function MainHeader(props) {
    return <header className="main-header">
        <div className="main-header--user">
            <UserInHeader {...props.user} />
        </div>

        <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
    </header>
}

MainHeader.propTypes = {
    user: React.PropTypes.object
};