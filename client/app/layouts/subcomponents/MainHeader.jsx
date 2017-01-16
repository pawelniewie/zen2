import React from 'react';
import InlineSVG from 'react-svg-inline';

import {Link} from 'react-router';
import SearchBar from 'app/components/SearchBar';
import Button from 'app/components/Button';
import Avatar from 'app/components/Avatar';

const logo = require('!!svg-inline!app/images/logo.svg');

export default function MainHeader(props) {
    let headerUser;
    if (props.showUserMenu) {
        if (props.user && props.user.email) {
            headerUser = <div className="main-header--user">
                <span key="1" className="main-header--user--name">Paweł Niewiadomski</span>
                <Avatar key="2" email={props.user.email} className="main-header--user--avatar"/>
            </div>;
        } else {
            headerUser =
                <Button isPrimary={true} isSmall={true} className="main-header--login" to="/user/login">Log in</Button>;
        }
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