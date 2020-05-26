const router = require('express').Router()

router.use('/api', require('./groceryRoutes.js'))

module.exports = router
