'use strict'

const createHafas = require('db-hafas')
const test = require('tape')

const estimate = require('.')
const createEstimate = require('./create')

const leipzigHbf = '8010205'
const jenaPararies = '8011956'
const berzhahn = '8000921'

const hafas = createHafas('compute-db-station-weight test')

test('estimate: Leipzig Hbf > Jena Paradies', async (t) => {
	const [
		leipzigHbfWeight,
		jenaParariesWeight,
	] = await Promise.all([
		estimate(leipzigHbf),
		estimate(jenaPararies)
	])
	t.ok(leipzigHbfWeight > jenaParariesWeight)
})

test('estimate: Berzhahn > 0', async (t) => {
	const weight = await estimate(berzhahn)
	t.ok(weight > 0)
})

test('createEstimate: Leipzig Hbf > Jena Paradies', async (t) => {
	const estimate = createEstimate(hafas)

	const [
		leipzigHbfWeight,
		jenaParariesWeight,
	] = await Promise.all([
		estimate(leipzigHbf),
		estimate(jenaPararies)
	])
	t.ok(leipzigHbfWeight > jenaParariesWeight)
})

test('createEstimate: Berzhahn > 0', async (t) => {
	const estimate = createEstimate(hafas)

	const weight = await estimate(berzhahn)
	t.ok(weight > 0)
})
