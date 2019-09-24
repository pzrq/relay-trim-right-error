import { graphql } from 'react-relay'

const SET_USER_TERMS = graphql`
  mutation SetUserTermsMutation {
    setUserTermsChecked
  }
`

export const setUserTerms = () => {
  return {
    gql: SET_USER_TERMS,
    query: 'setUserTermsChecked',
    queryVars: null
  }
}
