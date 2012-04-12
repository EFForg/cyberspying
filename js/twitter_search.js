new TWTR.Widget({
  version: 2,
  type: 'search',
  search: '#CISPA',
  interval: 30000,
  title: 'What people are saying:',
  subject: '',
  width: 250,
  height: 300,
  theme: {
    shell: {
      background: '#62c25b',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#444444',
      links: '#1985b5'
    }
  },
  features: {
    scrollbar: false,
    loop: true,
    live: true,
    behavior: 'default'
  }
}).render().start();

