// Scroll hint button
import React from 'react'
import scrollIntoView from 'scroll-into-view'

export default class ScrollHint extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animationDone: false, hover: false, scrolled: false }
    this.toggleHover = this.toggleHover.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.decideClassName = this.decideClassName.bind(this)
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover })
  }

  handleClick () {
    const about = window.i18n`navbar.items`.map(i => i.href)[1].substring(1)
    scrollIntoView(document.getElementById(about))
  }

  handleScroll () {
    if (!this.state.scrolled) this.setState({ scrolled: true })
  }

  decideClassName () {
    const state = this.state
    let className = ''

    // This is quite verbose, but should be easier to understand than a switch
    if (!state.scrolled && !state.animationDone) className = 'out-of-viewport' // Page is untouched
    else if (!state.scrolled && state.animationDone) className = 'show' // Page is untouched and animation finishes
    else if (state.scrolled && state.animationDone) className = 'out-of-viewport hide' // Page is scrolled when the animation has finished
    else if (state.scrolled && !state.animationDone) className = 'out-of-viewport' // Page has already been scrolled but the animation has not finished

    return className
  }

  render () {
    window.onscroll = this.handleScroll

    setTimeout(() => {
      // Prevent the hide animation if the page has already been scrolled by pretending the animation did not finish
      if (!this.state.scrolled && !this.state.animationDone) this.setState({ animationDone: true })
    }, 3500)

    return (
      <div
        className={`scroll-hint ${this.decideClassName()}`}
        id={'scroll-hint'}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div
          className={`hint-content ${this.state.hover ? 'pulse' : ''}`}
          onClick={this.handleClick}
        >
          <i className={'fas fa-angle-down'}/>
        </div>
      </div>
    )
  }
}
