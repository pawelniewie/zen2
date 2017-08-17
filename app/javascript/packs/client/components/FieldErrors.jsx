import React from 'react';
import { Message } from 'semantic-ui-react';

const FieldErrors = (props) => {
    const { errors } = props;
    return (
        <Message error visible>
            <Message.List>
                {errors.map((error) => (<Message.Item key={error} content={error}/>))}
            </Message.List>
        </Message>);
};

export default FieldErrors;
