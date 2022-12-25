# compute-db-station-weight

**Estimate the weight of a [Deutsche Bahn](https://en.wikipedia.org/wiki/Deutsche_Bahn) station using departures.** A small wrapper around [hafas-estimate-station-weight](https://github.com/derhuerst/hafas-estimate-station-weight).

[![npm version](https://img.shields.io/npm/v/compute-db-station-weight.svg)](https://www.npmjs.com/package/compute-db-station-weight)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/compute-db-station-weight.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install compute-db-station-weight
```


## Usage

```js
const computeWeight = require('compute-db-station-weight')

const leipzigHbf = '8010205'

computeWeight(leipzigHbf)
.then((weight) => {
	console.log('weight of Leipzig Hbf is', weight)
})
```

```
weight of Leipzig Hbf is 951.3
```


## Contributing

If you have a question or have difficulties using `compute-db-station-weight`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/compute-db-station-weight/issues).
