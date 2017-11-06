'use strict'

const hafas = require('db-hafas')
const floor = require('floordate')

const hour = 60 * 60 * 1000
const week = 7 * 24 * hour
const nextMonday = () => new Date(+floor(new Date(), 'week') + week + 10 * hour)

const minutesPerDay = 24 * 60

// see db-hafas/lib/modes
const weights = {
	nationalExp: 1,
	national: .85,
	regionalExp: .75,
	regional: .65,
	suburban: .4,
	subway: .4,
	ferry: .4, // todo: how large are ferries in Germany usually?
	tram: .3,
	bus: .25
}

// Because this estimation only takes a single day into account, it is inaccurate.
// todo: improve it, e.g. using different days of the beak or number of lines
const estimate = (id) => {
	return hafas.departures(id, {
		duration: minutesPerDay
	})
	.then((deps) => {
		let weight = 0

		for (let dep of deps) {
			if (!dep.line || !dep.line.product) continue
			const p = dep.line.product
			if (!(p in weights)) {
				console.error(p + ' has no weight associated.')
				continue
			}

			weight += weights[p]
		}

		return weight
	})
}

module.exports = estimate
