// Link component
import React from 'react'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  render () {
    return (
      <a
        href={this.props.to}
        className={this.props.className || ''}
        target={this.props.noTab ? '' : '_blank'}
        tabIndex={this.props.focus ? '0' : '-1'}
      >{this.props.children}</a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  noTab: PropTypes.any,
  tabIndex: PropTypes.any
}
