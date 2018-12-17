// Hero section (Top of page)
import React from 'react'
import Typist from 'react-typist'
import { config } from '../config'
import { dispatcher } from '../backend/dispatcher'

export default class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      typing: !window.lowWidth,
      typingEnabled: !window.lowWidth
    }
    this.typingDone = this.typingDone.bind(this)
  }

  typingDone () {
    setTimeout(() => {
      this.setState({ typing: false }, () => { this.setState({ typing: true }) })
    }, config.hero.typingDelay)
  }

  componentDidMount () {
    dispatcher.on('WIDTH_CHANGE', isLowWidth => this.setState({ typingEnabled: !isLowWidth }))
  }

  render () {
    const texts = window.i18n`hero.typingTexts`
    const delay = config.hero.typingDelay

    return (
      <div className={'hero banner is-fullheight'} id={'home'}>
        <div className={'hero-body'}>
          <div className={'container has-text-centered'}>
            <h1 className={'large-title'}>Linus Willner</h1>
            {
              this.state.typingEnabled && this.state.typing
                ? (
                  <Typist
                    className={'subtitle-typing'}
                    avgTypingDelay={90}
                    stdTypingDelay={0}
                    startDelay={1000}
                    cursor={{
                      element: '█'
                    }}
                    onTypingDone={this.typingDone}
                  >
                    echo "{texts[0]}"
                    <Typist.Backspace count={texts[0].length + 1} delay={delay} />
                    {texts[1]}"
                    <Typist.Backspace count={texts[1].length + 1} delay={delay} />
                    {texts[2]}"
                    <Typist.Backspace count={texts[2].length + 1} delay={delay} />
                    {texts[3]}"
                    <Typist.Backspace count={texts[3].length + 8} delay={delay} />
                  </Typist>
                )
                : ''
            }
            {
              this.state.typingEnabled === false
                ? <h2 className={'subtitle-lowwidth'}>{window.i18n`hero.typingTextLowWidth`}</h2>
                : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
