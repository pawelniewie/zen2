import React from 'react';
import styles from './login-form.scss';
import {Link} from 'react-router';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        return <div className="login-form">
            <form onSubmit={this.onSubmit} className="login-form form form__label-top">
                {this.props.isLogging ? 'Logging...' : ''}
                <div className="form--field">
                    <label className="form--field--label" htmlFor="login-id">Login</label>
                    <input type="text" ref="login" className="form--field--control input" id="login-id"/>
                </div>
                <div className="form--field">
                    <label className="form--field--label" htmlFor="password-id">Password</label>
                    <input type="password" ref="password" className="form--field--control input" id="password-id"/>
                </div>


                <div className="form--buttons login-form--buttons">
                    <button className="button button__primary login-form--submit">Login</button>

                    <a href="#">Forgot your password?</a><br/>
                    <Link to="/user/register">Register</Link>
                </div>
            </form>
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