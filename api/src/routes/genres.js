require('dotenv').config();
const { YOUR_API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Genre } = require('../db')
const {name}= req.query


module.exports = router;