const express = require('express')
const fs = require("fs")
const app = express()

// app.get('/', (req, res) => {
//     throw new Error('BROKEN FILE') // Express will catch this on its own.
//   })

app.get('/', (req, res, next) => {

    fs.readFile('./file.txt', (err, data) => {
      if (err) {
        console.log(err)
        next(err) // Pass errors to Express.
      } else {
        res.send(data.toString())
      }
    })
  })


  app.listen(3001)