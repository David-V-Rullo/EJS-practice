const express = require('express')

const app = express()

//register view engine

app.set('view engine', 'ejs')

app.listen(3001)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})