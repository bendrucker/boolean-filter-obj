'use strict'

var partialRight = require('ap').partialRight
var filter = require('filter-obj')
var argument = require('argument-index')

module.exports = partialRight(filter, argument(1, Boolean))
