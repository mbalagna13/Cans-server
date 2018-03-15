const express = require('express');
const cans = require('../cans')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: cans
  })
})

module.exports = router
