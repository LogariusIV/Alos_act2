const express = require('express')
const app = express()
const laliga = require('./laliga.json')

//middlware
app.use(express.json())

app.get('/laliga', (req, res) => {
  res.status(200).json(laliga)
})

app.get('/laliga/:id', (req, res) => {
    // Reading id from the URL
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


app.post('/laliga', (req,res) => {
  laliga.push(req.body)
  res.status(200).json(laliga)
})

app.delete('/book/:id', (req, res) => {
  const id = req.params.id;

  laliga = laliga.filter(i => {
      if (i.id !== id) {
          return true;
      }
      return false;
  });

  res.send('match is deleted');
});

app.listen(3000, () => {
  console.log('Server Started')
})
