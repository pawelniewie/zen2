import React from 'react';
import {FormErrors, FormField, FormLabel, FormButtons, FormDescription} from 'app/components/Form';
import Button from 'app/components/Button';
require('./create-project-form.scss');
import loadingIndicator from 'app/mixins/loadingIndicator';
import reactMixin from 'react-mixin';

export default class CreateProjectForm extends React.Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onProjectNameChange = this.onProjectNameChange.bind(this);
        this.onCancel = this.onCancel.bind(this);

        this.state = {
            errors: {},
            isLoading: false
        }
    }

    render() {
        return <form className="form form__label-top create-project-form" onSubmit={this.onSubmit}>
            <FormField>
                <FormLabel htmlFor="project-name-id">Project name</FormLabel>
                <input type="text" ref="name" className="input form--control create-project-form--project-name"
                       id="project-name-id" onChange={this.onProjectNameChange}/>
                <FormErrors errors={this.getErrorsForField('name')}/>
            </FormField>

            <FormField>
                <FormLabel htmlFor="project-key-id">Project key</FormLabel>
                <input type="text" ref="key" className="input form--control create-project-form--project-key"
                       id="project-key-id" maxLength="20"/>
                <FormErrors errors={this.getErrorsForField('key')}/>
                <FormDescription>Used as prefix for every issue id in this project</FormDescription>
            </FormField>

            <FormButtons>
                <Button isPrimary={true}
                        isLoading={this.state.isLoading}
                        loadingLabel="Creating....">Create project</Button>
                <Button isLink={true} onClick={this.onCancel} disabled={this.state.isLoading}>Cancel</Button>
            </FormButtons>
        </form>;
    }

    getErrorsForField(field) {
        return this.state.errors[field];
    }

    getProjectKeyFromProjectName(projectName) {
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

        return projectName.trim().substr(0, 3);
    }

    onProjectNameChange(e) {
        this.refs.key.value = this.getProjectKeyFromProjectName(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.refs.name.value,
            key: this.refs.key.value.toUpperCase()
        };
        wrapPromiseWithLoading(
            this,
            this.props
                .onSubmit(data)
                .catch((errors) => {
                    if (errors.isFormErrors) {
                        this.setState({errors: errors});
                    }
                }),
            {rejectDelay: 400}
        )
    }

    onCancel(e) {
        e.preventDefault();
        this.props.onCancel && this.props.onCancel();
    }
}

CreateProjectForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    errors: React.PropTypes.object
};

reactMixin.onClass(CreateProjectForm, loadingIndicator);
