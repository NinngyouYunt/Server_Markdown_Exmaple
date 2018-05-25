const express = require('express')
const fs = require('fs')
const showdown = require('showdown')
const cors = require('cors')// 

// Starting express
const app = express()
app.use(cors())

// Starting showdown
showdown.setFlavor('github')
const converter = new showdown.Converter()

app.get('/gethtml', (req, res) => {
  // This is async!!!!
  fs.readFile('./all-about-markdown.md', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
    res.send(converter.makeHtml(data))
  })
})

app.get('/getmarkdown', (req, res) => {
  // This is async!!!!
  fs.readFile('./all-about-markdown.md', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
    res.send(data)
  })
})

app.get('/', (req, res) => {
  res.send(':)')
})

app.listen(8082, () => {
  console.log('Running on 8082')
})
