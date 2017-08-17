import React from 'react';
import Gravatar from 'react-gravatar';
import classNames from 'classnames';

export default function Avatar({email, className}) {

    return <span className={classNames('avatar', className)}>
        <Gravatar email={email} size={30} className="avatar--image" default="identicon"/>
    </span>;
}

Avatar.propTypes = {
    email: React.PropTypes.string.isRequired
}