import React from 'react';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

require('./login-form.scss');

import {FocusedTaskHeader, FocusedTaskContent} from 'app/layouts/FocusedTask';
import {FormErrors, FormField, FormLabel, FormButtons} from 'app/components/Form';
import Button from 'app/components/Button';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        return <Form onSubmit={this.onSubmit}>
            <FormItem>
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Organization name" />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit">
                    Create
                </Button>
            </FormItem>
        </Form>;
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onLogin({
            login: this.refs.login.value,
            password: this.refs.password.value
        });
    }
}

LoginForm.propTypes = {
    onLogin: React.PropTypes.func.isRequired,
    isLogging: React.PropTypes.bool,
    error: React.PropTypes.instanceOf(Error)
};

LoginForm.defaultProps = {
    isLogging: false
};
