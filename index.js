'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/lightweight-charts.standalone.production.js');
} else {
	module.exports = require('./dist/lightweight-charts.standalone.development.js');
}
