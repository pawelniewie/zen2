import React from 'React';

export default class LoginForm extends React.Component {
    render() {
        return <form onSubmit="{this.onSubmit}">
            <div className="form-field">
                <label className="form-field--label" htmlFor="login-id">Login</label>
                <input type="text" ref="login" className="form-field--control input" id="login-id"
                       value="{this.state.login}"/>
            </div>
            <div className="form-field">
                <label className="form-field--label" htmlFor="password-id">Password</label>
                <input type="password" ref="password" className="form-field--control input" id="password-id"
                       value="{this.state.password}"/>
            </div>

            <div className="form-buttons">

            </div>
        </form>;
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
};