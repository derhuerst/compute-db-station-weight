'use strict'

const hafas = require('db-hafas')
const createEstimate = require('hafas-estimate-station-weight')

const weights = require('./lib/weights')

const estimate = createEstimate(hafas, weights)

module.exports = estimate
