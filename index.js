'use strict'

const hafas = require('db-hafas')
const createEstimate = require('hafas-estimate-station-weight')

// see db-hafas/lib/modes
const weights = {
	nationalExp: 1,
	national: .85,
	regionalExp: .75,
	regional: .6,
	suburban: .45,
	subway: .45,
	ferry: .4, // todo: how large are ferries in Germany usually?
	tram: .3,
	bus: .25
}

const estimate = createEstimate(hafas, weights)

module.exports = estimate
