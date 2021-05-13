const express = require('express')
const todoRoute = require('./routes/todos')

const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('view engine' , 'hbs')

srv.use('/todos' , todoRoute)

srv.listen('4865' , ()=> {
    console.log("server started on http://localhost:4865")
})