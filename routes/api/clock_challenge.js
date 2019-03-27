// const db = require('../../database')

const express = require('express')
const router = express.Router()
const db = require('../../database/knex') 

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
  res.send(req.body)
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

router.get('/admin', function(req, res) {
  db.select().from('sessions').then(function(data) {
    res.send(data)
  // order by id (created time)
  })
  // console.log('all')
})

router.get('/admin/sessions/:id/edit', function(req, res) {
  // render form to change times or delete session
})

router.patch('/admin/sessions/:id', function(req, res) {
  // edit form submits to this route
})

router.delete('/admin/sessions/:id', function(req, res) {
  // route to delete a session completely
  db('sessions').where({ id: req.params.id }).del().then(function() {
    console.log('deleted!')
  })
})

module.exports = router