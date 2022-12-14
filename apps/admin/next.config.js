const withTM = require('next-transpile-modules');

module.exports = withTM([
  'ui',
  'alchemy',
  'domains',
  'infra',
  'supabase',
  'pure',
  'apollo',
  'form',
])({
  reactStrictMode: true,
  env: {
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
    APP_ID: process.env.APP_ID,
  },
  images: {
    domains: ['assets.poap.xyz', 'www.poap.xyz', 'poap.xyz', 'kqjytgxbtetzewipikax.supabase.co'],
  },
});
