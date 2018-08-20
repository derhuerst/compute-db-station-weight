'use strict'

const createHafas = require('db-hafas')
const createEstimate = require('hafas-estimate-station-weight')

const weights = require('./lib/weights')

const hafas = createHafas('compute-db-station-weight')
const estimate = createEstimate(hafas, weights)

module.exports = estimate
