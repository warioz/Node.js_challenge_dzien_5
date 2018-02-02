const express = require('express');
const srv = express();

srv.get('/', (req, res) => {
   res.send("OK");
});

srv.get('/:one/:two', (req, res) => {
    // Method 1
    // let [num1, num2] = Object.values(req.params).map(val => parseInt(val));
    // res.send("Numbers add 1: "+ (num1+num2));

    // Method 2
    const numSum = Object.values(req.params).reduce((prev, curr) => parseInt(prev) + parseInt(curr));
    res.send("Numbers add 2: "+ (numSum));
});

srv.listen(3000, () => {
    console.log("Server start.");
});