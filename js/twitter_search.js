new TWTR.Widget({
  version: 2,
  type: 'search',
  search: '#CISPA',
  interval: 30000,
  title: 'It\'s a double rainbow',
  subject: 'Across the sky',
  width: 220,
  height: 300,
  theme: {
    shell: {
      background: '#df342d',
      color: '#eae2df'
    },
    tweets: {
      background: '#eae2df',
      color: '#444444',
      links: '#df332d'
    }
  },
  features: {
    scrollbar: false,
    loop: true,
    live: true,
    behavior: 'default'
  },
  // stretch out the twitter badge
  ready: function(){
    var height = $(window).height()-120;
    $('.twtr-timeline').css('height', height+'px')
  }
}).render().start();
