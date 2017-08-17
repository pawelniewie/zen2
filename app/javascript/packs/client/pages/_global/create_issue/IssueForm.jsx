import React from 'react';
import ProjectSelector from 'app/components/FormFields/Project';
import {FormField, FormLabel, FormErrors, FormButtons} from 'app/components/Form';
import Button from 'app/components/Button';
import Assignee from 'app/components/FormFields/Assignee';
import formMixin from 'app/mixins/formMixin';
import loadingIndicator from 'app/mixins/loadingIndicator';
import {autobind} from 'core-decorators';
import reactMixin from 'react-mixin';

require('./IssueForm.scss');

export default class IssueForm extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: {},
            isLoading: false
        };
        this.formFields = {};
    }

    render() {
        return <form onSubmit={this.onSubmit} className="issue-form form form__label-top">
            <FormField>
                <FormLabel htmlFor={'project-id'}>Project</FormLabel>
                <ProjectSelector id="project-id" className="issue-form--project"
                                 controlRef={this.formField('project')}/>
                <FormErrors errors={this.getErrors('project')}/>
            </FormField>
            <FormField>
                <FormLabel htmlFor={'summary-id'}>Summary</FormLabel>
                <input type="text" id="summary-id"
                       className="input form--control issue-form--summary"
                       ref={this.formField('summary')}/>
                <FormErrors errors={this.getErrors('summary')}/>
            </FormField>
            <FormField>
                <FormLabel htmlFor={'description-id'}>Description</FormLabel>
                <textarea className="input form--control" id="description-id" ref={this.formField('description')}/>
                <FormErrors error={this.getErrors('description')}/>
            </FormField>
            <FormField>
                <FormLabel>Assignee</FormLabel>
                <Assignee controlRef={this.formField('assignee')}/>
            </FormField>

            <FormButtons>
                <Button isPrimary={true} isLoading={this.state.isLoading} loadingLabel="Creating...">Create</Button>
                <Button isLink={true} onClick={this.onCancel}>Cancel</Button>
            </FormButtons>
        </form>
    }

    @autobind
    onSubmit(e) {
        e.preventDefault();
        const data = this.getFormData();
        this.wrapPromiseWithLoading(
            this.props.onSubmit(data)
                .catch((errors) => {
                    if (errors.isFormErrors) {
                        this.setState({errors: errors});
                    }
                }),
            {rejectDelay: 300}
        );
    }

    @autobind
    onCancel(e) {
        e.preventDefault();
        this.props.onCancel();
    }
}

IssueForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    errors: React.PropTypes.objectOf(React.PropTypes.array)
};

reactMixin.onClass(IssueForm, formMixin());
reactMixin.onClass(IssueForm, loadingIndicator);
