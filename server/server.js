//---------express-----------
const express = require('express')
const app = express()

//---------cors-----------
// allows local requests from the browser
const cors = require('cors')
app.use(cors())

//---------Middleware-----------
app.use(express.json(), express.urlencoded({ extended: true }))

//to load .env variables
require("dotenv").config()

//to import configuration of database and establish connection
require('./config/mongoose.config')

//to import routes
require('./routers/player.routes')(app)

const port = process.env.PORT


app.listen(port, () => console.log(`>>>>>>>>>>>>>>Server is running on port: ${port}`))