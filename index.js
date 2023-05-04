const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


const chefData = require('./data/chef-data.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send( chefData)
})
app.get('/', (req, res) => {
    res.send( chefData)
})

app.listen(port,()=>{
    console.log(` The server is runnig ${port}`)})