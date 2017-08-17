import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { branch, renderComponent } from 'recompose';

require('./IssueView.scss');

const IssueViewLoading = (props) => {
    return (<div>Loading...</div>);
};

const UserAssignedView = ({issue}) => {
    return (
    <div className="user__fullname">
        {issue.assignee.full_name}
    </div>)
};

const UserUnassignedView = () => {
    return (
        <div className="user__noassignee">
            Unassigned
        </div>
    )
};

const ReporterAssigned = ({issue}) => {
    return (
    <div className="reporter__fullname">
        {issue.reporter.full_name}
    </div>)
};

const ReporterUnAssigned = () => {
    return (
        <div className="reporter__noassignee">
            Not set
        </div>
    )
};

const DisplayReporterView = branch(
    (props) => props.issue.reporter,
    renderComponent(ReporterAssigned),
)(ReporterUnAssigned);

const DisplayUserNameView = branch(
    (props) => props.issue.assignee,
    renderComponent(UserAssignedView),
)(UserUnassignedView);

const IssueViewLoaded = ({issue}) => {
    return (
        <div className="issue__dialog--wrapper">
            <div className="grid-container">
                <div className="grid-x">
                    <div className="large-8 cell">
                        <div className="issue__top">
                            <div className="grid-x">
                                <div className="large-4 cell">
                                  <span className="issue__top--key">
                                    {issue.key}
                                  </span>
                                </div>
                                <div className="large-8 cell">
                                    <div className="issue__assignee">
                                        <div className="grid-x">
                                            <div className="auto cell">
                                                <div className="icon__wrapper">
                                                    <Icon name='user' size='big'/>
                                                </div>
                                            </div>
                                            <div className="large-10 cell">
                                                Assigned to:
                                                <br/>
                                                <span className="issue__assignee--name">
                                                    <DisplayUserNameView issue={issue} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="issue__content">
                            <h2>{issue.summary}</h2>
                            <p>
                                {issue.description}
                            </p>
                        </div>
                    </div>
                    <div className="large-4 cell">
                        <div className="issue__info--meta">
                            <h3>About this task:</h3>
                            <div className="issue__info--status">
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Status:</h3>
                                    </div>
                                    <div className="large-7 cell">
                                        <Label color="orange" size="big">
                                          <span className="label__inner">
                                             Is Open
                                          </span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="large-7 cell">
                                        <Label color="grey" size="medium">
                                          <span className="label__inner">
                                            Marketing
                                          </span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Reporter</h3>
                                    </div>
                                    <div className="large-7 cell">
                                      <span className="label__inner">
                                        <DisplayReporterView issue={issue} />
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const IssueView = branch(
    (props) => !props.loading && props.issue,
    renderComponent(IssueViewLoaded),
)(IssueViewLoading);

export default IssueView;
