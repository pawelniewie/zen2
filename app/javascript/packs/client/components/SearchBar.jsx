import React from 'react';
import cx from 'classnames';
import InlineSVG from 'react-svg-inline';

require('./search-bar.scss');


const icon = require('!!svg-inline-loader!app/images/icons/magnifier.svg');
export default function SearchBar({placeholder, className, ...otherProps}) {

    return <div className={cx('search-bar', className)} {...otherProps}>
        <InlineSVG svg={icon} className="search-bar--icon"/>
        <input type="search" className="input search-bar--input" placeholder={placeholder}/>
    </div>
}

SearchBar.propTypes = {
    placeholder: React.PropTypes.string
};