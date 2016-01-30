require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

const strings = {
  title: 'fiTTrail',
  description: 'Keep track of your fitness programme.',
  summary: 'fiTTrail gives you and your doctor a way to keep track of your fitness.',
  image: {
    url: '',
    width: '200',
    height: '200' },
  locale: 'en_US',
  creator: 'github.com/fiTTrail'
}

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: strings.title,
    description: strings.description,
    head: {
      titleTemplate: `${strings.title}: %s`,
      meta: [
        {name: 'description', content: strings.description},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: strings.title},
        {property: 'og:image', content: strings.image.url},
        {property: 'og:locale', content: strings.locale},
        {property: 'og:title', content: strings.title},
        {property: 'og:description', content: strings.description},
        {property: 'og:card', content: strings.summary},
        {property: 'og:site', content: strings.creator},
        {property: 'og:creator', content: strings.creator},
        {property: 'og:image:width', content: strings.image.width},
        {property: 'og:image:height', content: strings.image.height}
      ]
    }
  },

}, environment);
