'use strict'

const _createEstimate = require('hafas-estimate-station-weight')

const weights = require('./lib/weights')

const createEstimate = hafas => _createEstimate(hafas, weights)

module.exports = createEstimate
