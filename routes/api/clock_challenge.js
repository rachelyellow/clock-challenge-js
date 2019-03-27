// const db = require('../../database')

const express = require('express')
const router = express.Router()
const db = require('../../database')

router.get('/', function(req,res) {
  res.send('Hello')
  db.select().from('')
})

module.exports = router