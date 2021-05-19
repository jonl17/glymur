const { PRISMIC_REPOSITORY_NAME, PRISMIC_ACCESS_TOKEN } = process.env

const schemas = {
  page: require('./src/data/schemas/page.json'),
  seo: require('./src/data/schemas/seo.json'),
  contact: require('./src/data/schemas/contact.json'),
}

module.exports = {
  repositoryName: PRISMIC_REPOSITORY_NAME,
  accessToken: PRISMIC_ACCESS_TOKEN,
  defaultLanguage: 'en-us',
  langs: ['en-us'],
  defaultFrontpageTag: 'FRONTPAGE',
  schemas,
}
