import React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';
import { Field } from 'redux-form';

require('./OrganizationForm.scss');

import {FocusedTaskHeader, FocusedTaskContent} from 'app/layouts/FocusedTask';
import {FormErrors, FormField, FormLabel, FormButtons} from 'app/components/Form';
import Button from 'app/components/Button';

export default class OrganizationForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        return <Form onSubmit={this.onSubmit}>
            <Form.Field>
                <label>Organisation name</label>
                <Input placeholder="Put a name here"/>
            </Form.Field>
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

OrganizationForm.propTypes = {
    onLogin: React.PropTypes.func.isRequired,
    isLogging: React.PropTypes.bool,
    error: React.PropTypes.instanceOf(Error)
};

OrganizationForm.defaultProps = {
    isLogging: false
};
