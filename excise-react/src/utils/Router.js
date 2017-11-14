import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RouterComponent extends Component {
  static childContextTypes = {
    path: PropTypes.string.isRequired,
    onPathChange: PropTypes.func.isRequired
  }

  state = {
    path: this.getCurrentPath()
  }

  getChildContext = () => {
    return {
      path: this.state.path,
      onPathChange: this.onRouteChange
    }
  }

  onRouteChange = (path) => {
   window.history.pushState(null, '', path)
    this.setState({ path: this.getCurrentPath() })
  }

  getCurrentPath() {
    return window.location.pathname
  }

  render() {
    return this.props.children
  }
}

export default RouterComponent