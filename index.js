import {createDbHafas as createHafas} from 'db-hafas'
import {createEstimate} from 'hafas-estimate-station-weight'

import weights from './lib/weights.js'

const hafas = createHafas('compute-db-station-weight')
const estimate = createEstimate(hafas, weights)

export {
	estimate as computeWeight,
}
