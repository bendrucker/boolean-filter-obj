# boolean-filter-obj [![Build Status](https://travis-ci.org/bendrucker/boolean-filter-obj.svg?branch=master)](https://travis-ci.org/bendrucker/boolean-filter-obj) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/boolean-filter-obj.svg)](https://greenkeeper.io/)

> Filter an object, preserving only truthy values


## Install

```
$ npm install --save boolean-filter-obj
```


## Usage

```js
var filter = require('boolean-filter-obj')

filter({a: 1, b: 0, c: false, d: 'foo'})
//=> {a: 1, d: 'foo'}
```

## API

#### `filter(obj)` -> `object`

Returns a new object with only the truthy values.

##### obj

*Required*  
Type: `object`

## License

MIT © [Ben Drucker](http://bendrucker.me)
