'use strict'

const express = require('express')
require('dotenv').config()

const server = new express()

const PORT = process.env.PORT || 3500

server.use(express.static('./public'))

server.get('/',(req,res)=>{
    res.status(200).send('Hello')
})

server.listen(PORT, ()=>{
    console.log(`${PORT}`);
})