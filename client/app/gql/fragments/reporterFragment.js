import gql from 'graphql-tag';

const ReporterFragment = gql`
    fragment ReporterFragment on Reporter {
        full_name
    }
`

export default ReporterFragment;
