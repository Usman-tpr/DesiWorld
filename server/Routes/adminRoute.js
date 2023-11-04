const { addController , getController , deleteController} = require('../Controllers/adminController')

const express = require('express');
const route = express.Router();

route.post('/address',addController)
route.get('/address',getController)
route.delete('/address/:id',deleteController)

module.exports = route