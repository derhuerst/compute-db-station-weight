'use strict'

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

module.exports = weights
