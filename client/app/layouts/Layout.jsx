import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Menu, Icon, Button } from 'antd';
import InlineSVG from 'react-svg-inline';
import { Link } from 'react-router';
import { autobind } from 'core-decorators'
import DevTools from '../components/DevTools';

const SubMenu = Menu.SubMenu;

const logo = require('!!svg-inline-loader!app/images/logo.svg');

require('./Layout.scss');

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Menu mode="horizontal" className="top-menu" onClick={this.onMenuClick}>
                <Menu.Item>
                    <InlineSVG svg={logo} component={Link} to="/" className="main-header--logo"/>
                </Menu.Item>
                {this.props.user !== undefined ? (
                    <SubMenu title={<span><Icon
                        type="user"/>{this.props.user.first_name} {this.props.user.last_name}</span>}>
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
                {this.props.children}
            </main>
            <footer className="main-footer">
                <span className="main-footer--product-version">Zen 0.1.5</span>
            </footer>
            {__DEV__ && <DevTools/>}
        </div>;
    }

    @autobind
    onMenuClick(e) {
        console.log(e);
        switch (e.key) {
            case "user:logout":
                this.props.onLogOut();
                break;
        }
    }
}

Layout.propTypes = {
    user: PT.object,
    isLoading: PT.bool,
    onLogOut: PT.func.isRequired
};
