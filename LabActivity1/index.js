const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./User')

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://christine:GODis4ever@cluster0.iuizxd9.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(db => console.log('Database is connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})