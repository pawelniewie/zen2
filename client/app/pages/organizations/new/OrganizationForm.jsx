import React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';
import { Field } from 'redux-form';
import FocusedTask, { FocusedTaskContent } from 'app/layouts/FocusedTask';

require('./OrganizationForm.scss');

export default class OrganizationForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        return <FocusedTask>
            <FocusedTaskContent>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Organisation name</label>
                        <Field name="name" component={Input} placeholder="Put a name here"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Subdomain</label>
                        <Field name="slug" component={Input} placeholder="Your subdomain"/>
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <Field name="email" component={Input} placeholder="Your business e-mail"/>
                    </Form.Field>
                    <Form.Field>
                        <label>First name</label>
                        <Field name="first_name" component={Input} placeholder="First name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last name</label>
                        <Field name="last_name" component={Input} placeholder="Last name"/>
                    </Form.Field>
                    <Form.Button primary disabled={this.props.pristine || this.props.submitting}>Create</Form.Button>
                </Form>
            </FocusedTaskContent>
        </FocusedTask>;
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onLogin({
            login: this.refs.login.value,
            password: this.refs.password.value
        });
    }
}

OrganizationForm.propTypes = {
    onLogin: React.PropTypes.func.isRequired,
    isLogging: React.PropTypes.bool,
    error: React.PropTypes.instanceOf(Error)
};

OrganizationForm.defaultProps = {
    isLogging: false
};
