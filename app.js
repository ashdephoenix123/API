require('dotenv').config();
const express = require('express')
const router = require('./routes/route')
require('./db/connect')

const app = express();
app.use('/api/allProducts', router)
const port = process.env.PORT || 8080;

app.get('/', (req, res)=> {
    res.send('add the path /api/allProducts in the link to check')
})

app.listen(port, ()=>{
console.log(`Server is ready on port http://localhost:${port}/api/allProducts`)
})