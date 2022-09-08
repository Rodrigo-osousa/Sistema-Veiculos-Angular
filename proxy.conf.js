const PROXY_CONFIG = [
  {
    context: ['/veiculos'],
    target: 'http://localhost:8080/',
    source: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
