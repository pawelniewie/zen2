import React from 'react';
import classNames from 'classnames';
import Button from 'app/components/Button';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

require('./assignee.scss');
class AssigneeComponent extends React.Component {

    constructor() {
        super();

        this.state = {};

        this.onAssignToMe = this.onAssignToMe.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        const {
            className,
            currentUser,
            users = [],
            defaultValue,
            controlRef
        } = this.props;

        const classes = classNames('select', 'assignee--select', className);
        return <div className="assignee">
            <select className={classes} defaultValue={defaultValue} ref={controlRef} value={this.state.value}
                    onChange={this.onChange}>
                <option value="0">Just for test</option>
                {users.map(u => {
                    return <option key={u.id} value={u.id}>{u.full_name.trim() || u.username.trim()}</option>
                })}
            </select>
            {currentUser ?
                <div className="assignee--actions">
                    <Button className="assignee--assign-to-me"
                            isLink={true}
                            isSmall={true}
                            onClick={this.onAssignToMe}>Assign to me</Button>
                </div> : null}
        </div>;
    }

    onAssignToMe(e) {
        e.preventDefault();
        this.setState({
            value: this.props.currentUser.id
        });
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onChange && this.props.onChange(e.target.value);
    }
}

AssigneeComponent.propTypes = {
    onChange: React.PropTypes.func,
    controlRef: React.PropTypes.func
};

const query = gql`
    {
        user: currentUser {
            id
        }

        users: users {
            edges {
                node {
                    id
                    full_name
                    username
                }
            }
        }
    }
`;
const Assignee = graphql(query, {
    props: ({data: {users, user}}) => {
        return {
            currentUser: user,
            users: users ? users.edges.map(n => n.node) : []
        };
    }
})(AssigneeComponent);


export default Assignee;