import {createEstimate as _createEstimate} from 'hafas-estimate-station-weight'

import weights from './lib/weights.js'

const createEstimate = hafas => _createEstimate(hafas, weights)

export {
	createEstimate as createComputeWeight,
}
