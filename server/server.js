const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', require('./routes/auth'))
server.use('/api', require('./routes/lostAndFound'))

module.exports = server
