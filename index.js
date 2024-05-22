require ('dotenv').config()
const express = require ('express')
const path = require ('path')

const app = express ()
//const port = 3000
const routes = require('./routes/routes.js')

app.use (express.static ('public'))
app.use ('/', routes)


//app.listen (port, ()=> {
    app.listen (process.env.PORT, ()=> {
    console.log (`App rodando na porta ${process.env.PORT}`)
})

