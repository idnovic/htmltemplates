// Application layout
import React from 'react'

// Backend
import { dispatcher, emitOne } from '../backend/dispatcher'
import { lang, i18n } from '../lang/lang'

// Misc components
import Navbar from '../components/Navbar'
import LangButton from '../components/LangButton'
import MenuButton from '../components/MenuButton'
import ScrollHint from '../components/ScrollHint'
import Divider from '../components/Divider'

// Sections
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// Globals
global.lang = lang // Lang files
global.i18n = i18n // Translation function

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { lowWidth: window.innerWidth < 770 }
  }

  globalClickHandler (e) {
    // Closes any open dialogs when a non-button element is clicked (Improves UX)
    const targetIsButton = e.target.dataset.button
    if (!targetIsButton) emitOne('CLOSE_ANY_OPEN_DIALOG')
  }

  componentDidMount () {
    const checkIfLowWidth = () => window.innerWidth < 770

    dispatcher.on('LANG_SELECT', () => this.forceUpdate())

    // Initial check if property is not set
    if (!window.lowWidth) {
      const isLowWidth = checkIfLowWidth()
      window.lowWidth = isLowWidth
      emitOne('WIDTH_CHANGE', isLowWidth)
      this.setState({ lowWidth: isLowWidth })
    }

    window.addEventListener('resize', () => {
      if (!window.measuring) {
        const isLowWidth = checkIfLowWidth()

        window.measuring = true
        window.lowWidth = isLowWidth

        if (isLowWidth !== this.state.lowWidth) {
          this.setState({ lowWidth: isLowWidth })
          emitOne('WIDTH_CHANGE', isLowWidth)
        }

        setTimeout(() => { window.measuring = false }, 250) // Lowers congestion on resize
      }
    })
  }

  render () {
    return (
      <div onClick={this.globalClickHandler}>
        <LangButton/>
        <MenuButton/>
        <ScrollHint/>
        <Navbar/>
        <Hero/>
        <About/>
        <Divider/>
        <Skills/>
        <Divider/>
        <Projects/>
        <Divider/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
