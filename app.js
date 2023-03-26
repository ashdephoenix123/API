require('dotenv').config();
const express = require('express')
const router = require('./routes/route')
require('./db/connect')

const app = express();
app.use('/api/allProducts', router)
const port = process.env.PORT || 8080;


app.listen(port, ()=>{
console.log(`Server is ready on port http://localhost:${port}/api/allProducts`)
})