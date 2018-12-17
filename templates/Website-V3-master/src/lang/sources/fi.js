// Finnish

module.exports = {
  navbar: { // Navbar
    items: [
      { name: 'Koti', href: '#home' },
      { name: 'Tietoja', href: '#about' },
      { name: 'Taitoja', href: '#skills' },
      { name: 'Projekteja', href: '#projects' },
      { name: 'Ota yhteyttä', href: '#contact' }
    ]
  },
  hero: { // Hero
    typingTexts: [
      'Opiskelija',
      'Tekniikkaharrastaja',
      'Freelance-kehittäjä',
      'Tuleva ATK-insinööri'
    ],
    typingTextLowWidth: 'Suomalainen opiskelija, freelance-kehittäjä ja tuleva ATK-insinööri'
  },
  about: { // About
    title: 'TIETOJA',
    sectionTitle: 'Terve!',
    p1: `Nimeni on Linus Willner, ja olen 19-vuotias opiskelija sekä freelance-kehittäjä Suomesta. Mukava tavata!`,
    p2: `Olen todellinen tekniikkanörtti joka nauttii ohjelmoinnista vapaa-ajalla. Kehitän enimmäkseen JavaScript-applikaatioita serverikäyttöön ja web-sovelluksia yleisiä frontend-tekniikoita käyttäen (Esim. HTML ja CSS).`,
    p3: `Ohjelmoinnin saralla olen itseoppinut freelanceri. Osaan myös kolmea kieltä (Suomi, ruotsi ja englanti) minkä vuoksi kirjoitan yleensä dokumentaatiota projekteille joiden kehitykseen osallistun.`,
    p4: {
      l1: `Pääasiallinen freelance-työnantajani on tällä hetkellä `,
      l2: `, jolle kehitän ja ylläpidän projekteja kuten `,
      l3: `. Teen tätä vapaa-ajallani opiskelun ja työn ohella.`
    },
    p5: {
      l1: `Olen kehittänyt jonkin verran omia ohjelmiani, kuten `,
      l2: ` sekä `,
      l3: `, joista löytyy kaikkea backend-applikaatioista verkkosivuihin ja työpöytäohjelmia. Osallistuun muutamaan suuremmankin projektin kehitykseen; esimerkkejä tästä ovat `,
      l4: ` ja `
    },
    p6: `Avoimen lähdekoodin sovellukset ovat sydäntäni lähellä ja etsin aina uusia tilaisuuksia auttaa. Jos olet sitä mieltä että voisin auttaa sinua jossain, jatka ihmeessä lukemista!`
  },
  skills: { // Skills
    title: `TAITOJA`,
    p1: `Olen freelance-kehittäjä jolla on yli kahden vuoden kokemus sekä avoimen että suljetun lähdekoodin kehityksestä. Olen työskennellyt sekä tiimiympäristössä että yksinäni.`,
    p2: `Kehitän suurimmaksi osaksi verkkosivuja sekä web-applikaatioita (React), JavaScript-applikaatioita serverikäyttöön (Node.js) sekä työpöytäohjelmia (Electron). Minulla on myös kokemusta freelance-tason DevOps-kehityksestä (Code review, Continuous Integration, jne.).`,
    p3: {
      l1: `Suurin osa projekteista jotka olen luonut tai joihin osallistunut löytyvät `,
      l2: `GitHub-sivultani`,
      l3: ` ja pidän kaikkia avoimen lähdekoodin ohjelmiani tällä alustalla.`
    }
  },
  projects: { // Projects
    title: `PROJEKTEJA`,
    p1: {
      l1: `Tämä on näyte projekteista jotka olen luonut tai joihin olen osallistunut. Nähdäksesi täyden listan, vieraile `,
      l2: `GitHub-sivullani`
    },
    cards: [
      { title: 'tag-replacer', text: 'Node.js-moduuli placeholder-sanojen korvaamiseen tekstissä. Tukee myös TagScriptiä.', github: 'https://github.com/linuswillner/tag-replacer' },
      { title: 'JagTag-JS', text: 'JavaScriptiin portattu implementaatio JagTag-merkkikielestä.', github: 'https://github.com/TheSharks/JagTag-JS', website: 'https://thesharks.github.io/JagTag-JS' },
      { title: 'react-console-emulator', text: 'Monipuolinen ja kustomoitava Unix-terminaaliemulaattori Reactissa.', github: 'https://github.com/js-rcon/react-console-emulator' },
      { title: 'JS-RCON', text: 'Kattava ja moderni serverinhallintapaneeli Team Fortress 2:lle.', github: 'https://github.com/js-rcon' }
    ]
  },
  contact: { // Contact
    title: `OTA YHTEYTTÄ`,
    p1: {
      l1: `Jos haluat ottaa yhteyttä minuun kysyäksesi jotain, oli se muodollista tai ei, sähköposti on paras tapa siihen.`,
      l2: `Luen sähköpostini usein ja pyrin vastaamaan mahdollisuuksien mukaan.`
    },
    p2: {
      l1: `Epävirallisempaa keskustelua varten yksityisviestini `,
      l2: `Discordissa`,
      l3: ` ovat aina avoinna.`
    },
    p3: `Lopuksi, jos haluat vain seurata mitä teen, olen jättänyt tähän muutaman linkin sosiaalisiin medioihini.`,
    email: `Sähköposti`
  },
  footer: {
    copyright: `Copyright (c) ${new Date().getFullYear()} Linus Willner. Kaikki oikeudet pidätetään.`,
    tech: {
      l1: `Toteutettu `,
      l2: `Reactilla`,
      l3: `Sassilla`,
      l4: `sekä`,
      l5: `Bulmalla`
    },
    location: `Rakennettu aidolla luonnonmukaisesti tuotetulla nörtillä.`
  }
}
