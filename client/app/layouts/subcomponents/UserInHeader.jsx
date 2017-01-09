import React from 'react';
import {Link} from 'react-router';
import Avatar from 'app/components/Avatar';

export default function UserInHeader({email}) {
    if (email) {
        return <Avatar email={email} className="main-header--user--avatar"/>
    } else {
        return <Link to="/user/login" className="main-header--login">Log in</Link>
    }
}

UserInHeader.propTypes = {
    email: React.PropTypes.string
};