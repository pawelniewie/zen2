import React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';
import { Field } from 'redux-form';
import FocusedTask, { FocusedTaskContent } from 'app/layouts/FocusedTask';

require('./OrganizationForm.scss');

const OrganizationForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <FocusedTask>
            <FocusedTaskContent>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Organisation name</label>
                        <Field name="organization.name" component={Input} placeholder="Put a name here"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Subdomain</label>
                        <Field name="organization.slug" component={Input} placeholder="Your subdomain"/>
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
                    <Form.Button primary disabled={props.pristine || props.submitting}>Create</Form.Button>
                </Form>
            </FocusedTaskContent>
        </FocusedTask>
    );
};

export default OrganizationForm;
