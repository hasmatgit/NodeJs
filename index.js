const express = require('express')
const app = express()
require('dotenv').config()

// port defien here
const port = process.env.ROUTE || 3000

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
})

app.get('/help/me',(req, res) => {
    res.send("we are always here to help you")
})

app.get('/about/us',(req, res) => {
    res.send("<h1>We are a team of dedicated developers</h1>" )
})



// server listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
