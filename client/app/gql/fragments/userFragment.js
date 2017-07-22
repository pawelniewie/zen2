import gql from 'graphql-tag';

const UserFragment = gql`
    fragment UserFragment on User {
          full_name
          username
          email
    }
`

export default UserFragment;