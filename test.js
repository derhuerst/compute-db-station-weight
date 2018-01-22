'use strict'

const test = require('tape')

const estimateWeight = require('.')

const leipzigHbf = '8010205'
const jenaPararies = '8011956'
const berzhahn = '8000921'

test('Leipzig Hbf > Jena Paradies', (t) => {
	Promise.all([
		estimateWeight(leipzigHbf),
		estimateWeight(jenaPararies)
	])
	.then(([leipzigHbfWeight, jenaParariesWeight]) => {
		t.ok(leipzigHbfWeight > jenaParariesWeight)
		t.end()
	})
	.catch(t.ifError)
})

test('Berzhahn > 0', (t) => {
	estimateWeight(berzhahn)
	.then((weight) => {
		t.ok(weight > 0)
		t.end()
	})
	.catch(t.ifError)
})
