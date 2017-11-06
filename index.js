'use strict'

const hafas = require('db-hafas')
const floor = require('floordate')

const hour = 60 * 60 * 1000
const week = 7 * 24 * hour
const nextMonday = () => new Date(+floor(new Date(), 'week') + week + 10 * hour)

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

// Because this estimation only takes a single day into account, it is inaccurate.
// todo: improve it, e.g. using different days of the beak or number of lines
const estimate = (id) => {
	const sumOfDeps = (deps) => {
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
	}

	// Apparently, the DB API does not support querying departures for 1440 min
	// (1 day) at once. Therefore, we split the day into two queries.
	const when1 = nextMonday()
	const when2 = new Date(+when1 + 12 * hour)
	return Promise.all([
		hafas.departures(id, {duration: 12 * 60, when: when1}),
		hafas.departures(id, {duration: 12 * 60, when: when2})
	])
	.then(([firstDeps, lastDeps]) => {
		const sum = sumOfDeps(firstDeps) + sumOfDeps(lastDeps)
		return Math.round(sum * 10) / 10
	})
}

module.exports = estimate
