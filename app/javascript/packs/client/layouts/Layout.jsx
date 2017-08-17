import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Dropdown, Icon, Menu, Button } from 'semantic-ui-react'
import InlineSVG from 'react-svg-inline';
import { Link } from 'react-router';
import { branch, renderComponent, mapProps } from 'recompose';
import IssueViewModal from '../components/issue_view/IssueViewModal';

const logo = require('!!svg-inline-loader!app/images/logo.svg');

require('./Layout.scss');

const UserMenu = (props) => {
    return <Dropdown item icon="user" text={props.user.first_name + " " + props.user.last_name}>
        <Dropdown.Menu>
            <Dropdown.Item onClick={props.onLogOut}>Log out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>;
};

const AnonymousMenu = (props) => {
    return <Menu.Item position="right" onClick={props.onLogIn}>
        <Button icon="user" content="Log In"/>
    </Menu.Item>;
};

const AnonymousOrUserMenu = branch(
    (props) => !props.currentUser || props.currentUser.anonymous === true,
    renderComponent(AnonymousMenu),
)(mapProps(ownerProps => {
    return { user: ownerProps.currentUser.user, onLogOut: ownerProps.onLogOut };
})(UserMenu));

const Layout = (props) => {
    return <div>
        <Menu size='small' className="top-menu">
            <Menu.Item>
                <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
            </Menu.Item>
            <Menu.Menu position="right">
                <AnonymousOrUserMenu currentUser={props.currentUser} onLogIn={props.onLogIn}
                                     onLogOut={props.onLogOut}/>
            </Menu.Menu>
        </Menu>
        <main className="main-content">
            {props.children}
        </main>
        <footer className="main-footer">
            <span className="main-footer--product-version">Zen 0.1.5</span>
        </footer>
        <IssueViewModal/>
    </div>;
};

Layout.propTypes = {
    currentUser: PT.object,
    isLoading: PT.bool,
    onLogOut: PT.func.isRequired,
    onLogIn: PT.func.isRequired,
};

export default Layout;
