const withTM = require('next-transpile-modules');

module.exports = withTM(['ui', 'alchemy', 'domains', 'infra', 'pure', 'apollo', 'store'])({
  reactStrictMode: true,
  env: {
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
    ALCHEMY_SECRET_KEY: process.env.ALCHEMY_SECRET_KEY,
    APP_ID: process.env.APP_ID,
  },
});
