import React from 'react';
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
        return <div className="login-form">
            <FocusedTaskHeader>Login</FocusedTaskHeader>
            <FocusedTaskContent>
                <form onSubmit={this.onSubmit} className="login-form form form__label-top">
                    <FormField>
                        <FormLabel htmlFor="login-id">Email or login</FormLabel>
                        <input type="text" ref="login" className="form--control input" id="login-id"/>
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="password-id">Password</FormLabel>
                        <input type="password" ref="password" className="form--control input" id="password-id"/>
                        <FormErrors errors={this.props.error && this.props.error.message}/>
                    </FormField>

                    <FormButtons className="login-form--buttons">
                        <Button className="login-form--submit"
                                isLoading={this.isLogging}
                                isPrimary={true}
                                loadingLabel="Logging...">Login</Button>
                        <a href="#" className="login-form--forgot-password">Forgot your password?</a>
                    </FormButtons>
                </form>
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