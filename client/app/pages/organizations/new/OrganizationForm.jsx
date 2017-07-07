import React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';
import { Field } from 'redux-form';
import FocusedTask, { FocusedTaskContent } from 'app/layouts/FocusedTask';

require('./OrganizationForm.scss');

const OrganizationForm = (props) => {
    const { error, handleSubmit, pristine, submitting } = props;
    return (
        <FocusedTask>
            <FocusedTaskContent>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Organisation name</label>
                        <Field name="user.organization.name" component={Input} placeholder="Put a name here"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Subdomain</label>
                        <Field name="user.organization.slug" component={Input} placeholder="Your subdomain"/>
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <Field name="user.email" component={Input} placeholder="Your business e-mail"/>
                    </Form.Field>
                    <Form.Field>
                        <label>First name</label>
                        <Field name="user.first_name" component={Input} placeholder="First name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last name</label>
                        <Field name="user.last_name" component={Input} placeholder="Last name"/>
                    </Form.Field>
                    <Form.Button primary disabled={props.pristine || props.submitting}>Create</Form.Button>
                </Form>
            </FocusedTaskContent>
        </FocusedTask>
    );
};

export default OrganizationForm;
