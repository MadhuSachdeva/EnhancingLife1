//require('dotenv').config()
console.log("Started learning js - 11/12/2023");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('sep_282002@yahoo.com')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at easemytrip.com')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>easemytrio.com</h2>')
})

//app.listen(process.env.PORT, () => {
  app.listen(port, (req,res) => {
  console.log(`Example app listening on port ${port}`)
})