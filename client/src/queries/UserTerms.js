import { graphql } from 'react-relay'

const USER_TERMS = graphql`
  query UserTermsQuery {
    userTermsChecked
  }
`

export const userTerms = () => {
  return {
    gql: USER_TERMS,
    query: 'userTermsChecked',
    queryVars: null
  }
}
