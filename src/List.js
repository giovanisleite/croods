import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import { Consumer } from './Context'

@connect(
  (state, { name }) => ({ ...state[name] }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
export default class extends Component {
  componentWillMount() {
    const { list, actions } = this.props

    if (!list) {
      actions.list()
    }
  }

  render() {
    const { render, list, listing, listError } = this.props

    return (
      <Consumer>
        {options => {
          const { renderLoading, renderError } = options

          if (!list || listing) {
            return renderLoading()
          }

          if (listError) {
            return renderError(listError)
          }

          return render(this.props)
        }}
      </Consumer>
    )
  }
}
