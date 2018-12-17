// Footer section
import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  constructor (props) {
    super(props)
    this.determineClassName = this.determineClassName.bind(this)
    this.determineLink = this.determineLink.bind(this)
  }

  determineClassName () {
    switch (this.props.type) {
      case 'react':
        return 'react-link'
      case 'sass':
        return 'sass-link'
      case 'bulma':
        return 'bulma-link'
    }
  }

  determineLink () {
    switch (this.props.type) {
      case 'react':
        return 'https://reactjs.org'
      case 'sass':
        return 'http://sass-lang.com'
      case 'bulma':
        return 'https://bulma.io'
    }
  }

  render () {
    return (
      <a
        className={this.determineClassName()}
        href={this.determineLink()}
        target={'_blank'}
        tabIndex={'-1'}
      >
        {this.props.children}
      </a>
    )
  }
}

export default class Footer extends React.Component {
  render () {
    return (
      <footer className={'footer page-footer'}>
        <div className={'container'}>
          <div className={'footer-text section-text'}>
            <p>{window.i18n`footer.copyright`}</p>
            <p>{window.i18n`footer.tech.l1`}<Link type={'react'}>{window.i18n`footer.tech.l2`}</Link>, <Link type={'sass'}>{window.i18n`footer.tech.l3`}</Link> {window.i18n`footer.tech.l4`} <Link type={'bulma'}>{window.i18n`footer.tech.l5`}</Link>. {window.i18n`footer.location`}</p>
          </div>
        </div>
      </footer>
    )
  }
}

Link.propTypes = {
  type: PropTypes.string.isRequired
}
