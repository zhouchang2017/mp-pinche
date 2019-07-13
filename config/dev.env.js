'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const path = require('path')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../.env') })

const loadEnvs = dotenv.parsed

const envs = Object.keys(loadEnvs).reduce((next, key) => {
  // eslint-disable-next-line no-param-reassign
  next[key] = `"${loadEnvs[key]}"`
  return next
}, {})

module.exports = merge(prodEnv, {
  'process.env': {
    NODE_ENV: '"development"',
    ...envs
  }
})
