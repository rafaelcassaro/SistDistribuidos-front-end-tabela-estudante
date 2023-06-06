const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://127.0.0.1:5000/',
    secure: false,
    localLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
