const { addController , getController} = require('../Controllers/adminController')

const express = require('express');
const route = express.Router();

route.post('/address',addController)
route.get('/address',getController)

module.exports = route