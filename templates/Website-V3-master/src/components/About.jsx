// About section
import React from 'react'
import Link from './Link'

export default class About extends React.Component {
  render () {
    // On low device widths, hide certain elements to improve UX
    // Styles are computed on render due to possible resizes happening without reload
    const styles = {
      textOverrides: {
        textAlign: window.lowWidth ? 'center' : 'left',
        paddingRight: window.lowWidth ? '12px' : '70px'
      },
      columnOverrides: {
        display: window.lowWidth ? 'none' : 'block'
      },
      imageOverrides: {
        display: window.lowWidth ? 'none' : 'inline'
      }
    }

    return (
      <section className={'section about'} id={'about'}>
        <div className={'container'}>
          <h1 className={'title section-title'}>{window.i18n`about.title`}</h1>
          <div className={'columns'}>
            <div className={'column is-three-quarters about-text'} style={styles.textOverrides}>
              <h2 className={'section-text-title'}>{window.i18n`about.sectionTitle`}</h2>
              <div className={'section-text about-text-column'}>
                <p>{window.i18n`about.p1`}</p>
                <p>{window.i18n`about.p2`}</p>
                <p>{window.i18n`about.p3`}</p>
                <p>{window.i18n`about.p4.l1`}<Link to={'https://github.com/TheSharks'}>TheSharks</Link>{window.i18n`about.p4.l2`}<Link to={'https://github.com/TheSharks/JagTag-JS'}>JagTag-JS</Link>{window.i18n`about.p4.l3`}</p>
                <p>{window.i18n`about.p5.l1`}<Link to={'https://github.com/linuswillner/react-console-emulator'}>react-console-emulator</Link>{window.i18n`about.p5.l2`}<Link to={'https://github.com/linuswillner/tag-replacer'}>tag-replacer</Link>{window.i18n`about.p5.l3`}<Link to={'https://github.com/TheSharks/WildBeast'}>WildBeast</Link>{window.i18n`about.p5.l4`}<Link to={'https://github.com/js-rcon'}>JS-RCON</Link>.</p>
                <p>{window.i18n`about.p6`}</p>
                <p className={'signature'}>- LW</p>
              </div>
            </div>
            <div className={'column'} style={styles.columnOverrides}>
              <figure className={'image about-text-image'} style={styles.imageOverrides}>
                <img src={require('../assets/images/me.jpg')}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
