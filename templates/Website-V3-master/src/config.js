// Global configuration file

export const config = {
  // Common variables
  common: {
    // Sections on the page
    sections: [
      'home',
      'about',
      'skills',
      'projects',
      'contact'
    ]
  },
  // Hero section
  hero: {
    // Typing delay
    typingDelay: 1000
  },
  // Contact section
  contact: {
    // Social media icons
    icons: [
      { link: 'https://github.com/linuswillner', iconClassName: 'fab fa-github' },
      { link: 'https://linkedin.com/in/linuswillner', iconClassName: 'fab fa-linkedin' },
      { link: 'https://twitter.com/linuswillner', iconClassName: 'fab fa-twitter' },
      { link: 'https://instagram.com/linuswillner', iconClassName: 'fab fa-instagram' }
    ]
  }
}
