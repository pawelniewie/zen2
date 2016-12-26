import React from 'react';
import {Link} from 'react-router';

export default function UserInHeader({email}) {
    if (name) {

    } else {
        return <Link to="/user/login" className="main-header--login">Log in</Link>
    }
}

UserInHeader.propTypes = {
    email: React.PropTypes.string
};