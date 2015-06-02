
var jack = require('jack-stack')
  , app = jack.app;

var session = require('express-session')
  , RedisStore = require('connect-redis')(session);


module.exports = function(redisConfig) {
  return {
    event: 'config',
    handler: handler,
  };

  function handler(config) {
    config.session.getStore = function() {
      return new RedisStore(redisConfig);
    };
  }

}
