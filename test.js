'use strict'

var test = require('tape')
var filter = require('./')

test(function (t) {
  t.deepEquals(filter({a: true, b: false, c: 1}), {
    a: true,
    c: 1
  })
  t.deepEquals(filter({a: 0, b: false, c: ''}), {})
  t.end()
})
