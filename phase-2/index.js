const express = require('express')
const app = express()
require('dotenv').config()


// port define here.
const port = process.env.ROUTE || 3000

const githubData = {
  "login": "hasmatgit",
  "id": 180703056,
  "node_id": "U_kgDOCsVPUA",
  "avatar_url": "https://avatars.githubusercontent.com/u/180703056?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hasmatgit",
  "html_url": "https://github.com/hasmatgit",
  "followers_url": "https://api.github.com/users/hasmatgit/followers",
  "following_url": "https://api.github.com/users/hasmatgit/following{/other_user}",
  "gists_url": "https://api.github.com/users/hasmatgit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hasmatgit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hasmatgit/subscriptions",
  "organizations_url": "https://api.github.com/users/hasmatgit/orgs",
  "repos_url": "https://api.github.com/users/hasmatgit/repos",
  "events_url": "https://api.github.com/users/hasmatgit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hasmatgit/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2024-09-06T20:15:41Z",
  "updated_at": "2025-09-07T15:58:07Z"
}
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
app.get('/about',(req, res) => {
    res.send("<h1>about</h1>" )
})

//api.github.com/users/hasmatgit
app.get('/github', (req, res) => {
  res.json(githubData)
})

// server listening on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
