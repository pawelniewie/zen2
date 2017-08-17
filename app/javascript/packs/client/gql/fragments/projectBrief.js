import gql from 'graphql-tag';

const projectBrief = gql`
    fragment projectBrief on Project {
        id
        key
        name
    }
`;

export default projectBrief;