const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');
const os = require('os');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const uzivatel = require('../Models/uzivatel.js');
const dbConfig = require('../config/database.config.js');
const seedDB = require('../public/seeds.js');

mongoose.connect(dbConfig.url).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});
seedDB();

router.get("/", function(req, res) {

  uzivatel.find({}, function(err, allUzivatel) {
    if (err) {
      console.log(err);
    } else {

      fetch('http://api.timezonedb.com/v2/get-time-zone?key=ZPVKDPJXZNYA&format=json&by=zone&zone=Europe/Bratislava', {method: "get", agent:new HttpsProxyAgent('http://192.168.31.201:8080')})

      .then(function(response) {
    return response;
    })
    .then(function(myJson) {
    var formated = moment(myJson.time).format('HH:mm:ss')
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(JSON.stringify(formated));
    res.render("user/zoznam", {users: allUzivatel});
    })
        .catch(err => console.log(err))


    }
  });
});

router.get("/uzivatel/:id", function(req, res) {
  uzivatel.findById(req.params.id).exec(function(err, najdenyUzivatel) {
    if (err) {
      console.log(err);
    } else {
      res.render("user/uzivatel", {user: najdenyUzivatel});
      console.log(najdenyUzivatel.name);
    }
  });
});


router.get('/time', function(req, res, next) {
  fetch('http://api.timezonedb.com/v2/get-time-zone?key=ZPVKDPJXZNYA&format=json&by=zone&zone=Europe/Bratislava', {method: "get", agent:new HttpsProxyAgent('http://192.168.31.201:8080')})

  .then(function(response) {
return response;
})
.then(function(myJson) {
var formated = moment(myJson.time).format('HH:mm:ss')
res.setHeader('Access-Control-Allow-Origin', '*');
res.status(200).send(JSON.stringify(formated));
})
    .catch(err => console.log(err))

});


module.exports = router;
