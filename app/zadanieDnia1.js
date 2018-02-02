const express = require('express');
const srv = express();

srv.use(express.static('./public/przykladStatyczne/'));

class Glosuj {
    constructor(){
        this.vote = {yes: 0, no: 0};
        this.mess = "Dziekuję za głos!";
    }
    
    yes(){
        this.vote.yes++;
        return this.mess;
    }

    no(){
        this.vote.no++;
        return this.mess;
    }

    sum(){
        return `
        Yes: ${this.vote.yes} <br />
        No: ${this.vote.no}
        `
    }
}

// let glosuj = new Glosuj();

let glosuj = {
    ["glos"]() {
        let vote = {yes: 0, no: 0};
        const mess = "Dziekuję za głos!"

        return {
            yes: function() {
                vote.yes++;
                return mess;
            },
            no: function() {
                vote.no++;
                return mess;
            },
            sum: function() {
                return `
                Yes: ${vote.yes} <br />
                No: ${vote.no}
                `
            }
        };
    }
}["glos"]();

srv.get('/', (req, res) => {
   res.send("OK");
});

srv.get('/vote/yes', (req, res) => {
    res.send(glosuj.yes());
});

srv.get('/vote/no', (req, res) => {
    res.send(glosuj.no());
});

srv.get('/vote/check', (req, res) => {
    res.send(glosuj.sum());
});

srv.listen(3000, () => {
    console.log("Server start.");
});