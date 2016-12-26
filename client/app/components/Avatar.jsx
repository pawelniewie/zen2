import React from 'react';
import Gravatar from 'react-gravatar';

export default function Avatar({email}) {
    return <span className="avatar">
        <Gravatar email={email} size={30} className="avatar--image" default="identicon"/>
    </span>;
}