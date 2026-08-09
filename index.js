'use strict'
const data = require('./data.json')
const { createGeomelonDataset } = require('@geomelon/data-query')
module.exports = createGeomelonDataset(data)
