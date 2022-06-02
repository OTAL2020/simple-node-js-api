const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.json({ Message : "Hello from git repo :)" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})