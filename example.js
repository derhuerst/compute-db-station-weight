import {computeWeight} from './index.js'

const leipzigHbf = '8010205'

const weight = await computeWeight(leipzigHbf)
console.log('weight of Leipzig Hbf is', weight)
