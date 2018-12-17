// Contact section
import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import { config } from '../config'

class SocialMediaIcon extends React.Component {
  render () {
    return (
      <Link className={'button social is-medium'} to={this.props.link}>
        <span className={'icon'}>
          <i className={this.props.iconClassName}></i>
        </span>
      </Link>
    )
  }
}

export default class Contact extends React.Component {
  render () {
    return (
      <section className={'section contact'} id={'contact'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`contact.title`}</h1>
          <div className={'columns'}>
            <div className={'column section-text contact-text'}>
              <div className={'contact-pre'}>
                <p>{window.i18n`contact.p1.l1`}<br/>{window.i18n`contact.p1.l2`}</p>
                <p>{window.i18n`contact.p2.l1`}<Link to={'https://discordapp.com'}>{window.i18n`contact.p2.l2`}</Link>{window.i18n`contact.p2.l3`}</p>
                <p>{window.i18n`contact.p3`}</p>
              </div>
              <div className={'contact-methods'}>
                <h2 className={'contact-method'}>{window.i18n`contact.email`}: <b>hello@linuswillner.me</b></h2>
                <h2 className={'contact-method'}>Discord: <b>LWTech#0005</b></h2>
                <p className={'field'}>
                  {config.contact.icons.map(icon => <SocialMediaIcon key={icon.link} link={icon.link} iconClassName={icon.iconClassName}/>)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

SocialMediaIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
}
