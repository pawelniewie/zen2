import React from 'react';
import {default as Dropdown, DropdownContent} from 'app/components/Dropdown';
import {DropdownMenu, DropdownItem, DropdownSeparator} from 'app/components/DropdownMenu';
import Button from 'app/components/Button';
import Avatar from 'app/components/Avatar';
import classNames from 'classnames';
import InlineSVG from 'react-svg-inline';

export default class UserInHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const classes = classNames('main-header--user', {
            'main-header--user__pressed': this.state.isOpen
        });

        const {user} = this.props;
        const dropdownContent = <DropdownContent className="main-header--user--dropdown">
            <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem isDisabled={true}>Billing</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownSeparator/>
                <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
        </DropdownContent>;

        if (user) {
            return <Dropdown
                attachment="top right"
                targetAttachment="bottom right"
                offset="-4 4"
                content={dropdownContent}
                onOpen={() => this.setState({isOpen: true})}
                onClose={() => this.setState({isOpen: false})}
            >
                <button className={classes}>
                    <Avatar key="2" email='wokieb@gmail.com' className="main-header--user--avatar"/>
                    <span key="1" className="main-header--user--name">Paweł Niewiadomski</span>
                </button>
            </Dropdown>;
        }

        return <Button isPrimary={true} isSmall={true} className="main-header--login" to="/user/login">Log in</Button>;
    }

}

UserInHeader.propTypes = {
    user: React.PropTypes.object
};