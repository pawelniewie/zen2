import React from 'react';
import { Form, Icon, Input, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import FocusedTask, { FocusedTaskContent } from 'app/layouts/FocusedTask';

require('./OrganizationForm.scss');

const FieldErrors = (props) => {
    const { errors } = props;
    return (<Message error visible><Message.List>{errors.map((error) => (<Message.Item key={error} content={error}/>))}</Message.List></Message>);
};

const SemanticInput = (props) => {
    const { meta: { touched, error }, input } = props;
    return (
        <div>
            <Input onChange={(e, { value }) => input.onChange(value)} {...props}/>
            {touched && error && <FieldErrors errors={error}/>}
        </div>
    );
};

const OrganizationForm = (props) => {
    const { error, handleSubmit, pristine, submitting } = props;
    return (
        <FocusedTask>
            <FocusedTaskContent>
                <Message attached header="Create a new organisation!"
                         content="Fill in the form to create an organization, you'll become an admin automatically."/>

                <Form onSubmit={handleSubmit} className="attached fluid segment">
                    {error && <strong>{error}</strong>}

                    <Form.Field>
                        <label>Organisation name</label>
                        <Field name="organization.name" component={SemanticInput} placeholder="Put a name here"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Subdomain</label>
                        <Field name="organization.slug" component={SemanticInput} placeholder="Your subdomain"/>
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <Field name="email" component={SemanticInput} placeholder="Your business e-mail"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Field name="password" component={SemanticInput} placeholder="Make it at least 8 characters" type="password"/>
                    </Form.Field>
                    <Form.Field>
                        <label>First name</label>
                        <Field name="first_name" component={SemanticInput} placeholder="First name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last name</label>
                        <Field name="last_name" component={SemanticInput} placeholder="Last name"/>
                    </Form.Field>
                    <Form.Button primary disabled={pristine || submitting}>Create</Form.Button>
                </Form>
            </FocusedTaskContent>
        </FocusedTask>
    );
};

export default OrganizationForm;
