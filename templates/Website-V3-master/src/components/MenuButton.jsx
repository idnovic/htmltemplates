// Menu button
import React from 'react'
import { dispatcher, emitOne } from '../backend/dispatcher'
import { config } from '../config'
import disableScroll from 'disable-scroll'
import inViewport from 'in-viewport'

export default class MenuButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    emitOne('MENU_TOGGLE', !this.state.hidden)

    // This is a wee bit hacky, but it works as intended (Toggling does not trigger transitions)
    if (window.lowWidth) {
      const elements = document.getElementsById(config.common.sections) // List of elements to blur
      const elementsInView = elements.filter(el => inViewport(el))
      const scrollHint = document.getElementById('scroll-hint')

      if (!this.state.hidden === false) {
        disableScroll.on()
        elementsInView.map(el => el.classList.add('blurred'))
        scrollHint.classList.add('scroll-hint-hidden')
      } else {
        disableScroll.off()
        elementsInView.map(el => el.classList.remove('blurred'))
        scrollHint.classList.remove('scroll-hint-hidden')
      }
    }

    this.setState({ hidden: !this.state.hidden })
  }

  componentDidMount () {
    dispatcher.on('NAVBAR_ITEM_CLICK', () => {
      this.handleClick()
    })

    dispatcher.on('CLOSE_ANY_OPEN_DIALOG', () => {
      if (this.state.hidden === false) this.handleClick()
    })
  }

  render () {
    return (
      <div>
        <a
          className={'button menu-button'}
          data-button={'menu'}
          onClick={this.handleClick}
        >
          <span
            className={'icon is-small'}
            data-button={'menu'}
          >
            <i className={`fas ${this.state.hidden ? 'fa-bars' : 'fa-times'}`} data-button={'menu'} />
          </span>
        </a>
      </div>
    )
  }
}
