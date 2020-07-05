const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  env: {
    GA: process.env.NODE_ENV !== 'development' ? 'UA-170402487-1' : '',
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
