'use strict'

const computeWeight = require('.')

const leipzigHbf = '8010205'

computeWeight(leipzigHbf)
.then((weight) => {
	console.log('weight of Leipzig Hbf is', weight)
})
.catch(console.error)
