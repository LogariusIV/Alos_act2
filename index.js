const express = require('express')
const app = express()
const laliga = require('laliga.json')

//middlware
app.use(express.json())


app.get('/laliga',(req,res) => {
    res.status(200).json(laliga)
})
  


app.listen(3000, () => {console.log('Server Started')})