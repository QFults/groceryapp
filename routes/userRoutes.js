const router = require('express').Router()
const db = require('../db')

// User routes here...
router.get('/users/:selector', (req, res) => {
  let query = {}

  if (parseInt(req.params.selector)) {
    query = { id: parseInt(req.params.selector) }
  } else {
    query = { username: req.params.selector }
  }
  
  db.query('SELECT * FROM users WHERE ?', query, (err, data) => {
    if (err) { console.log(err) }
    let user = data[0]
    db.query('SELECT * FROM groceries WHERE ?', { userid: user.id }, (err, groceries) => {
      if (err) { console.log(err) }
      res.json({ user,  groceries })
    })
  })
})

router.post('/users', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, (err, info) => {
    if (err) { console.log(err) }
    res.json(info)
  })
})


module.exports = router
