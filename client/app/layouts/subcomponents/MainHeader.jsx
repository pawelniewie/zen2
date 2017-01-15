import React from 'react';
import UserInHeader from './UserInHeader';
import InlineSVG from 'react-svg-inline';

import {Link} from 'react-router';
import SearchBar from 'app/components/SearchBar';

const logo = require('!!svg-inline!app/images/logo.svg');

export default function MainHeader(props) {
    let headerUser;
    if (props.showUserMenu) {
        headerUser = <div className="main-header--user">
            <UserInHeader {...props.user} />
        </div>;
    }
    return <header className="main-header">
        {headerUser}

        <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
        <div className="main-header--search">
            <SearchBar className="main-header--search--search-bar" placeholder="Search issues, actions..."/>
        </div>
    </header>
}

MainHeader.propTypes = {
    user: React.PropTypes.object,
    showUserMenu: React.PropTypes.bool
};