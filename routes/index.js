const router = require('express').Router()

router.use('/api', require('./groceryRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router
