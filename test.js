'use strict'

const hafas = require('db-hafas')
const test = require('tape')

const estimate = require('.')
const createEstimate = require('./create')

const leipzigHbf = '8010205'
const jenaPararies = '8011956'
const berzhahn = '8000921'

test('estimate: Leipzig Hbf > Jena Paradies', (t) => {
	Promise.all([
		estimate(leipzigHbf),
		estimate(jenaPararies)
	])
	.then(([leipzigHbfWeight, jenaParariesWeight]) => {
		t.ok(leipzigHbfWeight > jenaParariesWeight)
		t.end()
	})
	.catch(t.ifError)
})

test('estimate: Berzhahn > 0', (t) => {
	estimate(berzhahn)
	.then((weight) => {
		t.ok(weight > 0)
		t.end()
	})
	.catch(t.ifError)
})

test('createEstimate: Leipzig Hbf > Jena Paradies', (t) => {
	const estimate = createEstimate(hafas)

	Promise.all([
		estimate(leipzigHbf),
		estimate(jenaPararies)
	])
	.then(([leipzigHbfWeight, jenaParariesWeight]) => {
		t.ok(leipzigHbfWeight > jenaParariesWeight)
		t.end()
	})
	.catch(t.ifError)
})

test('createEstimate: Berzhahn > 0', (t) => {
	const estimate = createEstimate(hafas)

	estimate(berzhahn)
	.then((weight) => {
		t.ok(weight > 0)
		t.end()
	})
	.catch(t.ifError)
})
