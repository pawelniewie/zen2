import React from 'react';
import {autobind} from 'core-decorators';
import { Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import FocusedTask, { FocusedTaskContent } from 'app/layouts/FocusedTask';
import SemanticInput from '../../../components/SemanticInput';

require('./ProjectForm.scss');

function getProjectKeyFromProjectName(projectName) {
    const words = projectName
        .trim()
        .split(' ')
        .filter(i => i);

    if (words.length > 1) {
        return words
            .map(w => w.substr(0, 1))
            .join('')
            .toUpperCase();
    }

    return projectName.trim().substr(0, 3).toUpperCase();
};

export default class CreateProjectForm extends React.Component {
    render() {
        const { pristine, submitting, handleSubmit, error } = this.props;

        return <FocusedTask>
            <FocusedTaskContent>
                <Message attached header="Create a new project!"
                         content="Fill in the form to create a new project, you'll become an admin automatically."/>

                <Form onSubmit={handleSubmit} className="attached fluid segment">
                    {error && <strong>{error}</strong>}

                    <Form.Field>
                        <label>Project name</label>
                        <Field name="name" onChange={this.onProjectNameChange} component={SemanticInput}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Project key</label>
                        <Field name="key" component={SemanticInput} maxLength="20"/>
                        <div>Used as prefix for every issue id in this project</div>
                    </Form.Field>

                    <Form.Button primary disabled={pristine || submitting}>Create</Form.Button>
                </Form>
            </FocusedTaskContent>
        </FocusedTask>;
    }

    getErrorsForField(field) {
        return this.state.errors[field];
    }

    @autobind
    onProjectNameChange(e) {
        this.props.change('key', getProjectKeyFromProjectName(e.target.value));
        this.props.touch('key');
    }
}

CreateProjectForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    errors: React.PropTypes.object
};
