const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const apiRoute = require('../routes/api')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)
app.use(cors())

app.use('/api', apiRoute)

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)