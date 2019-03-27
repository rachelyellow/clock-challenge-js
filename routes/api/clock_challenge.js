// const db = require('../../database')

const express = require('express')
const router = express.Router()
const db = require('../../database')

router.get('/', function(req, res) {
  db.select().from('teachers').then(function(data) {
    res.send(data)
  })
})

router.post('/sessions', function(req, res) {
  console.log(req.body)
  // db.insert().returning('*').into('').then(function(data) {
  //   res.send(data)
  // })
  res.send('hello')
})

router.patch('/sessions/:id', function(req, res) {
  const timeOut = new Date
  // db.select().from('sessions')
  // .where({ teacher_id: "form info", time_out: null })
  // .update({ time_out: timeOut })
  // .then(function(data) {
  //   res.send(data)
  // })
})

module.exports = router