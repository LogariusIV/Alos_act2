const express = require('express')
const app = express()
const laliga = require('./laliga.json')

//middlware
app.use(express.json())

app.get('/laliga', (req, res) => {
  res.status(200).json(laliga)
})

app.get('/laliga/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const laligaid = laliga.find(laligaid => laligaid.id === id)
    for (let laligaid of laliga) {
      if (laligaid.id === id) {
          res.json(laligaid);
          return;
      }
  }
    res.status(200).json(laliga)
  })

/**app.get('/laliga/matches', (req, res) => {
  const matches = toString(req.params.matches)  
  const lalimtch = laliga.find(lalimtch => lalimtch.matches === matches)
  res.status(200).json(laliga)
})

app.get('/laliga/score', (req, res) => {
  const score = toString(req.params.score)
  const laliscr = laliga.find(laliscr => laliscr.score === score)
  res.status(200).json(laliga)
})

app.get('/laliga/statistics', (req, res) => {
  const statistics = toString(req.params.statistics)
  const lalista = laliga.find(lalista => lalista.statistics === statistics)
  res.status(200).json(laliga)
})**/

app.post('/laliga', (req,res) => {
  laliga.push(req.body)
  res.status(200).json(laliga)
})

app.listen(3000, () => {
  console.log('Server Started')
})
