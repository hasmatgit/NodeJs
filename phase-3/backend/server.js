import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Server is readyy')
})

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      "id": 1,
      "title": "Programmer Joke",
      "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 2,
      "title": "Math Joke",
      "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone."
    },
    {
      "id": 3,
      "title": "Computer Joke",
      "content": "Why did the computer show up at work late? It had a hard drive!"
    },
    {
      "id": 4,
      "title": "Student Joke",
      "content": "Why did the student eat his homework? Because the teacher said it was a piece of cake!"
    },
    {
      "id": 5,
      "title": "Science Joke",
      "content": "Why can’t you trust atoms? Because they make up everything!"
    }
  ]
  res.json(jokes)
})


app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})