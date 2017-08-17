import React from 'react';
import { Form, Button } from 'semantic-ui-react';

require('./login-form.scss');

import {FocusedTaskHeader, FocusedTaskContent} from 'app/layouts/FocusedTask';
import {FormErrors, FormField, FormLabel, FormButtons} from 'app/components/Form';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        return <div className="login-form">
            <FocusedTaskHeader>Login</FocusedTaskHeader>
            <FocusedTaskContent>
                <Form onSubmit={this.onSubmit} className="login-form form form__label-top">
                    <Form.Field>
                        <label htmlFor="login-id">Email or login</label>
                        <input type="text" ref="login" className="form--control input" id="login-id"/>
                    </Form.Field>
                    <Form.Field>
                        <FormLabel htmlFor="password-id">Password</FormLabel>
                        <input type="password" ref="password" className="form--control input" id="password-id"/>
                        <FormErrors errors={this.props.error && this.props.error.message}/>
                    </Form.Field>

                    <FormButtons className="login-form--buttons">
                        <Button className="login-form--submit"
                                loading={this.isLogging}
                                primary>Login</Button>
                        <a href="#" className="login-form--forgot-password">Forgot your password?</a>
                    </FormButtons>
                </Form>
            </FocusedTaskContent>
        </div>;
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
