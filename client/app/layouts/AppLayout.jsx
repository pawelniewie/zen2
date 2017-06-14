import React from 'react';
import { Menu, Icon, Button } from 'antd';
import InlineSVG from 'react-svg-inline';
import {Link} from 'react-router';

const SubMenu = Menu.SubMenu;

const logo = require('!!svg-inline-loader!app/images/logo.svg');

require('./AppLayout.scss');

export default function AppLayout(props) {
    return <div>
        <Menu mode="horizontal" className="top-menu">
            <Menu.Item>
                <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
            </Menu.Item>
            {props.user !== undefined ? (
                <SubMenu title={<span><Icon type="user" />{props.user.first_name} {props.user.last_name}</span>}>
                    <Menu.Item key="user:logout">Log out</Menu.Item>
                </SubMenu>
            ) : (
                <Menu.Item>
                    <Button type="primary" size="small" icon="user">
                        <Link to="/users/login" className="log-in">Log in</Link>
                    </Button>
                </Menu.Item>
            )}
        </Menu>

        <main className="main-content">
            {props.children}
        </main>
        <footer className="main-footer">
            <span className="main-footer--product-version">Zen 0.1.5</span>
        </footer>
    </div>
}
