const express = require('express')
const router = express.Router()
const clockRoute = require('./clock_challenge')

router.use('/clock_challenge', clockRoute)

module.exports = router