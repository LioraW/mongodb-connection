const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')

app.options('*', corsOptionsRequests)
app.use(cors())
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)


module.exports = app