import React from 'react';
import {autobind} from 'core-decorators'
import classNames from 'classnames';
import Tether from 'react-tether';
import clickOutside from 'click-outside';
import key from 'key';

const enableClickOutside = function () {

    if (this.content) {
        this._unbinbClickOutside && this._unbinbClickOutside();
        this._unbinbClickOutside = clickOutside(this.content, this.close);
    }
};

const disableClickOutside = function () {
    this._unbinbClickOutside && this._unbinbClickOutside();
};

export default class Dropdown extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const children = React.cloneElement(
            React.Children.only(this.props.children), {
                onClick: this.onClickToggle
            }
        );

        return <Tether
            attachment={this.props.attachment}
            targetAttachment={this.props.targetAttachment}
            offset={this.props.offset}
        >
            {children}
            {this.state.isOpen && <div ref={this.onContentRef}>{this.props.content}</div>}
        </Tether>
    }


    componentDidMount() {
        console.log('mounted');
        document.body.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        disableClickOutside.call(this);
        document.body.removeEventListener('keydown', this.onKeyDown);
    }

    @autobind
    onKeyDown(e) {
        if (key.is(key.code.special.esc, e.which)) {
            this.close();
        }
    }

    @autobind
    onClickToggle(e) {
        e.preventDefault();
        if (this.state.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    @autobind
    onContentRef(content) {
        this.content = content;
        enableClickOutside.call(this);
    }

    @autobind
    open() {
        this.setState({isOpen: true});
        this.props.onOpen && this.props.onOpen();
    }

    @autobind
    close() {
        this.setState({isOpen: false});
        this.props.onClose && this.props.onClose();
    }
}

Dropdown.defaultProps = {
    attachment: 'top center',
    targetAttachment: 'bottom center',
    offset: '0 0'
};

Dropdown.propTypes = {
    content: React.PropTypes.element.isRequired,
    attachment: React.PropTypes.string,
    targetAttachment: React.PropTypes.string,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    offset: React.PropTypes.string
};

export function DropdownContent(props) {
    const className = classNames(props.className, 'dropdown');
    return <div className={className}>
        {props.children}
    </div>
};