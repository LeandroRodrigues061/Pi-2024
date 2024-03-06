const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req,res) {
    console.log("ta faladooo")
    return res.send("faala fi")
});

app.listen(8081);