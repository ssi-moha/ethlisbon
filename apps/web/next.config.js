const withTM = require('next-transpile-modules');

module.exports = withTM(['ui', 'alchemy', 'domains', 'infra', 'supabase', 'pure', 'apollo'])({
  reactStrictMode: true,
  env: {
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
  },
});
