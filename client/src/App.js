import React, { Component } from 'react'
import { commitMutation } from 'react-relay'
import { setUserTerms } from './mutations'

class App extends Component {
  terms = () => {
    commitMutation({}, {
      mutation: setUserTerms('user', this.props).gql,
      variables: setUserTerms('user', this.props).queryVars,
    })
  }

  render() {
    return (
      <a onClick={() => this.terms()} >
      </a>
    )
  }
}

export default App
