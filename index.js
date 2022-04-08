const express = require('express')
const app = express()

//calling body-parser & cors middlware
const bodyParser = require('body-parser')
const cors = require('cors')

// Where we will keep matches results
let La_liga = []

app.use(cors())

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/laliga', (req,res) => {
  
  const liga = req.body

  // Output the matches results to the console for debugging
  console.log(liga)
  La_liga.push(liga)

  res.send('Match result is added to the database')
})

app.get('/laliga', (req, res) => {
  res.status(200).json(La_liga)
})

app.get('/laliga/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id
    
    for (let laligaid of La_liga) {
      if (laligaid.id === id) {
          res.json(laligaid);
          return;
      }
  }
    res.status(404).send('Match result not found')
  })


app.listen(3000, () => {
  console.log('Server Started')
})
