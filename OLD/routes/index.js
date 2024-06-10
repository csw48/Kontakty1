const express = require('express');
const router = express.Router();
const dbConfig = require('../config/database.config.js');
var path = require('path');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const moment = require('moment');
const uzivatel = require('../Models/uzivatel.js');
const seedDB = require('../public/seeds.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tele', {useMongoClient: true })
  .then(() =>  console.log('Pripojený'))
  .catch((err) => console.error(err));


//seedDB();

router.get("/", function(req, res) {

  uzivatel.find({}, function(err, allUzivatel) {

    if (err) {
      console.log(err);
    } else {

      res.render("user/zoznam", {users: allUzivatel});
    }
  });
});


router.get("/uzivatel/:id", function(req, res) {

  uzivatel.findById(req.params.id).exec(function(err, najdenyUzivatel) {
    if (err) {
      console.log(err);
    } else {

      res.render("user/uzivatel", {user: najdenyUzivatel});

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
