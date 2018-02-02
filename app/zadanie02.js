const express = require('express');
const srv = express();

let imie = "";

srv.get('/', (req, res) => {
   res.send("OK");
});

srv.get('/name/set/:imie', (req, res) => {
    imie = req.params.imie;
    res.send("Set imie");
});

srv.get('/name/show', (req, res) => {
    res.send("Imie:" + imie);
});

srv.get('/name/check', (req, res) => {
    res.send("Imie check: "+ (imie == '' ? "no exist" : "exist"));
});

srv.listen(3000, () => {
    console.log("Server start.");
});