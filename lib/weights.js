// see db-hafas/lib/modes
const weights = {
	nationalExpress: 1,
	national: .85,
	regionalExpress: .75,
	regional: .6,
	suburban: .45,
	subway: .45,
	ferry: .4, // todo: how large are ferries in Germany usually?
	tram: .3,
	bus: .25,
	taxi: .15,
}

export default weights
