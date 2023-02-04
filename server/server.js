const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(
    cors({
      origin: "*",
    })
  );  
const posts = [
    {
        username: "Lib",
        title: "Post 1",
        id: 1
    },
    {
        username: "Bil",
        title: "Post 2",
        id:2
    }
]
app.get('/user', (req, res) => {
    res.json(posts)
})
app.listen(process.env.PORT)
