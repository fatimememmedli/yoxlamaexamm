const express = require('express')
var bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
var cors = require('cors')
require("./src/config/config")
const port =  3000
const routes = require("./src/routes/router")
app.use(cors())
app.use(bodyParser.json())

app.use("/", routes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})