import React from 'react';
import InlineSVG from 'react-svg-inline';

import {Link} from 'react-router';
import SearchBar from 'app/components/SearchBar';
import UserInHeader from './UserInHeader';

const logo = require('!!svg-inline!app/images/logo.svg');

export default function MainHeader(props) {
    return <header className="main-header">
        <UserInHeader user={props.user}/>

        <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
        <div className="main-header--search">
            <SearchBar className="main-header--search--search-bar" placeholder="Search issues, actions, projects..."/>
        </div>
    </header>
}

MainHeader.propTypes = {
    user: React.PropTypes.object,
    showUserMenu: React.PropTypes.bool
};