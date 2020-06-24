const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    GA: process.env.NODE_ENV !== 'development' ? 'UA-170402487-1' : '',
  },
});
