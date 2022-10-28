const withTM = require('next-transpile-modules');

module.exports = withTM(['ui', 'alchemy', 'domains', 'infra', 'supabase', 'pure'])({
  reactStrictMode: true,
});
