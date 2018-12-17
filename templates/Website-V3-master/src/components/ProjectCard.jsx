// Project card
import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

class GitHubButton extends React.Component {
  render () {
    return (
      <Link className={`button ${this.props.centerFix ? 'center-fix' : ''}`} to={this.props.link}>
        <span className={'icon'}>
          <i className={'fab fa-github'}></i>
        </span>
        <span>GitHub</span>
      </Link>
    )
  }
}

class WebsiteButton extends React.Component {
  render () {
    return (
      <Link className={`button ${this.props.centerFix ? 'center-fix' : ''}`} to={this.props.link}>
        <span className={'icon'}>
          <i className={'fas fa-globe'}></i>
        </span>
        <span>Website</span>
      </Link>
    )
  }
}

class ButtonGroup extends React.Component {
  render () {
    return (
      <div className={'buttons button-group'}>
        <GitHubButton link={this.props.github} centerFix />
        <WebsiteButton link={this.props.website} centerFix />
      </div>
    )
  }
}

export default class ProjectCard extends React.Component {
  render () {
    return (
      <div className={'tile card notification is-child'}>
        <h2 className={'section-title card-title'}>{this.props.title}</h2>
        <p className={'section-text card-text'}>{this.props.text}</p>
        {
          // If both defined, use group - otherwise check for either
          this.props.links.github && this.props.links.website
            ? <ButtonGroup github={this.props.links.github} website={this.props.links.website} />
            : this.props.links.github
              ? <GitHubButton link={this.props.links.github} />
              : this.props.links.website
                ? <WebsiteButton link={this.props.links.website} />
                : ''
        }
      </div>
    )
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  links: PropTypes.object
}

GitHubButton.propTypes = {
  link: PropTypes.string.isRequired,
  centerFix: PropTypes.any // No value required
}

WebsiteButton.propTypes = {
  link: PropTypes.string.isRequired,
  centerFix: PropTypes.any // No value required
}

ButtonGroup.propTypes = {
  github: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
}
