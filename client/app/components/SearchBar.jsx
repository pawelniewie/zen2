import React from 'react';
import cx from 'classnames';
import InlineSVG from 'react-svg-inline';
import magnifierIcon from 'app/images/icons/magnifier.svg';
import style from './search-bar.scss';

export default function SearchBar({placeholder, className, ...otherProps}) {

    return <div className={cx('search-bar', className)}>
        <InlineSVG svg={magnifierIcon} className="search-bar--icon"/>
        <input type="search" className="input search-bar--input" placeholder={placeholder}/>
    </div>
}

SearchBar.propTypes = {
    placeholder: React.PropTypes.string
};