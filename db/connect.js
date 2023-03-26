const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(()=>console.log('DB Connected'))
    .catch((err)=> console.log(err))

    