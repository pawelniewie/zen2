import React from 'react';
import {Link} from 'react-router';
import Button from 'app/components/Button';
import Avatar from 'app/components/Avatar';

export default function UserInHeader({email}) {
    if (email) {
        return <Avatar email={email} className="main-header--user--avatar"/>
    } else {
        return <Button isPrimary={true} isSmall={true} className="main-header--login" to="/user/login">Log in</Button>
    }
}

UserInHeader.propTypes = {
    email: React.PropTypes.string
};