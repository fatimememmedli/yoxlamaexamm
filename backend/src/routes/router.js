const express = require('express')
const router = express.Router()
const Controller = require("./../controllers/controller")

// define the home page route
router.get('/products', Controller.getAllData)
router.post('/products', Controller.postData)
router.delete('/products/:id', Controller.deleteData)
// define the about route


module.exports = router