import React from 'react';
import { Input } from 'semantic-ui-react';
import FieldErrors from './FieldErrors';

const SemanticInput = (props) => {
    const { meta: { touched, error }, input } = props;
    return (
        <div>
            <Input onChange={(e, { value }) => input.onChange(value)} {...props}/>
            {touched && error && <FieldErrors errors={error}/>}
        </div>
    );
};

export default SemanticInput;
