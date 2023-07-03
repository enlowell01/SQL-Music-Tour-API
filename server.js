// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS  
const bandsControllers = require('./controllers/bands_controllers')
app.use('/bands', bandsControllers)

const eventsControllers = require('./controllers/events_controllers')
app.use('/events', eventsControllers)

const stagesControllers = require('./controllers/stages_controllers')
app.use('/stages', stagesControllers)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})


