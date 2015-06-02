# Jack-Stack-Redis
<!-- [![Build Status][build-image]][build-url] -->
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Tips][gratipay-image]][gratipay-url]

Connect-Redis module for jack-stack. Enables the storage of user sessions in Redis, rather than the non-production-ready MemoryStore.

## Installation
```bash
$ npm install --save jack-stack-redis
```

## Usage
To use this, you'll need to pass in your [connect-redis configuration](https://github.com/tj/connect-redis#options).

### ES6

```js
// Replace with your actual Redis Config
import jack from 'jack-stack';
import jsRedis from 'jack-stack-redis';

const redisConfig = {
  host: 'localhost',
  port: 6379,
};

jack.use(jsRedis(redisConfig));
```

### ES5

```js
// Replace with your actual Redis Config
var redisConfig = {
  host: 'localhost',
  port: 6379,
};
var jack = require('jack-stack');
var jsRedis = require('jack-stack-redis')(redisConfig);

jack.use(jsRedis);
```

[build-image]: https://travis-ci.org/dncrews/jack-stack-redis.svg?branch=master
[build-url]: https://travis-ci.org/dncrews/jack-stack-redis
[npm-image]: https://img.shields.io/npm/v/jack-stack-redis.svg
[npm-url]: https://www.npmjs.org/package/jack-stack-redis
[downloads-image]: https://img.shields.io/npm/dm/jack-stack-redis.svg
[downloads-url]: https://www.npmjs.org/package/jack-stack-redis
[gratipay-image]: https://img.shields.io/gratipay/dncrews.svg
[gratipay-url]: https://www.gratipay.com/dncrews/
