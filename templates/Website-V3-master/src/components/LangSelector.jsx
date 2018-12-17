// Lang selector dropdown
import React from 'react'
import PropTypes from 'prop-types'
import { emitOne } from '../backend/dispatcher'

// Animation overrides for the lang selector
const styles = {
  dropdownOverrides: {
    opacity: 1,
    transition: 'all 300ms', // Same as %navbar-toggle-animation
    WebkitTransition: 'all 300ms', // Browser compat
    transitionTimingFunction: 'ease-in-out'
  },
  dropdownHidden: {
    opacity: 0,
    transition: 'all 300ms',
    WebkitTransition: 'all 300ms',
    transitionTimingFunction: 'ease-in-out',
    pointerEvents: 'none'
  }
}

class DropdownItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    emitOne('LANG_SELECT', this.props.country)
  }

  render () {
    return (
      <div
        className={'dropdown-item item'}
        onClick={this.handleClick}
      >
        <span className={`flag-icon flag-icon-${this.props.country}`}/>
      </div>
    )
  }
}

export default class LangSelector extends React.Component {
  render () {
    return (
      <div
        className={`dropdown-menu dropdown-container`}
        style={this.props.active ? styles.dropdownOverrides : styles.dropdownHidden}
        id={'lang-selector'}
        role={'menu'}
      >
        <div className={'dropdown-content dropdown-inner'}>
          <DropdownItem country={'gb'}/>
          <DropdownItem country={'fi'}/>
          <DropdownItem country={'se'}/>
        </div>
      </div>
    )
  }
}

DropdownItem.propTypes = {
  country: PropTypes.string.isRequired
}

LangSelector.propTypes = {
  active: PropTypes.bool.isRequired
}
