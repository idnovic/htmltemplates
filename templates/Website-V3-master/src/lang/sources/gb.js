// English (GB)

module.exports = {
  navbar: { // Navbar
    items: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  hero: { // Hero
    typingTexts: [
      'Student',
      'Tech geek',
      'Freelance developer',
      'Software engineer-to-be'
    ],
    typingTextLowWidth: 'Student, freelance developer and software engineer-to-be from Finland'
  },
  about: { // About
    title: 'ABOUT ME',
    sectionTitle: 'Hello there!',
    p1: `I'm Linus Willner, an 19-year-old student and freelance developer from Finland. Pleasure to meet you!`,
    p2: `I'm an avid tech nerd that enjoys programming in his free time. I mostly develop JavaScript applications for the backend and web applications with common frontend paradigms, such as HTML and CSS.`,
    p3: `When it comes to programming, I'm a self-taught freelance developer. I am also proficient in three languages (Finnish, Swedish and English) and as such tend to write documentation for the projects I contribute to.`,
    p4: {
      l1: `My main freelance position is currently at `,
      l2: `, where I develop and maintain projects such as `,
      l3: `. I do this in my free time as an aside from studying and work.`
    },
    p5: {
      l1: `I have created quite a few programs on my own, such as `,
      l2: ` and `,
      l3: `, ranging from backend applications to websites and full-fledged desktop applications. Some of the major projects I partake in include `,
      l4: ` and `
    },
    p6: `Open source software is close to my heart and I'm always looking for opportunities to help out. If you feel that I could help you with something, please keep on reading!`
  },
  skills: { // Skills
    title: `SKILLS`,
    p1: `I'm a freelance developer with over two years of experience in both open and closed source development. I have worked in team-oriented environments in addition to working on my own.`,
    p2: `I develop websites and web applications (React), JavaScript applications for the backend (Node.js) and desktop applications (Electron). I also have experience in freelance-level DevOps development (Code review, Continuous Integration, etc.).`,
    p3: {
      l1: `Most of the projects I have created or contribute to can be found on my `,
      l2: `GitHub page`,
      l3: ` and I keep all my open source projects on the platform.`
    }
  },
  projects: { // Projects
    title: `PROJECTS`,
    p1: {
      l1: `This is a showcase of projects I have created or contributed to. For the full list, see my `,
      l2: `GitHub page`
    },
    cards: [
      { title: 'tag-replacer', text: 'A Node.js module for replacing template tags in strings. Includes TagScript support.', github: 'https://github.com/linuswillner/tag-replacer' },
      { title: 'JagTag-JS', text: 'A JavaScript port of the JagTag text parsing language, which was originally written in Java.', github: 'https://github.com/TheSharks/JagTag-JS', website: 'https://thesharks.github.io/JagTag-JS' },
      { title: 'react-console-emulator', text: 'A powerful and flexible Unix emulator component for React that I built for JS-RCON.', github: 'https://github.com/js-rcon/react-console-emulator' },
      { title: 'JS-RCON', text: 'An extensive and modern server management interface for Team Fortress 2.', github: 'https://github.com/js-rcon' }
    ]
  },
  contact: { // Contact
    title: `CONTACT`,
    p1: {
      l1: `If you want to reach out to me for any sort of inquiry, be it formal or not, email is usually the best way to do that.`,
      l2: `I read my email frequently and will answer to the best of my ability.`
    },
    p2: {
      l1: `For more informal conversation in the form of instant messaging, my DMs on `,
      l2: `Discord`,
      l3: ` are open.`
    },
    p3: `Finally, if you want to just see what I'm up to, I've left some links to my social media here as well.`,
    email: `Email`
  },
  footer: {
    copyright: `Copyright (c) ${new Date().getFullYear()} Linus Willner. All rights reserved.`,
    tech: {
      l1: `Achieved with `,
      l2: `React`,
      l3: `Sass`,
      l4: `and`,
      l5: `Bulma`
    },
    location: `Created with genuine organic geek.`
  }
}
