var express = require('express');
var request = require('request');
var router = express.Router();

var OS = ['Windows', 0, 'MacOS',0,'Linux',0]; 

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/Windows_poll', function(req, res) {
  console.log("In Windows Poll"); 
  OS[1]++;  
  console.log("Window Votes: " + OS[1]);
  res.send(OS[1]);
});
router.get('/MacOS_poll', function(req,res) {
  console.log("In MacOS_poll");
  OS[3]++;
  console.log("MacOS votes: " + OS[3]);
  res.send(OS[3]);
});

router.get('/Linux_poll', function(req,res) {
  console.log("In Linux_poll");
  OS[5]++;
  console.log("Linux votes: " + OS[5]);
  res.send(OS[5]);
});

// router.post('/pokemon', function(req, res) {
//     console.log("In Pokemon Post");
//     console.log(req.body);
//     pokemon.push(req.body);
//     res.end('{"success" : "Updated Successfully", "status" : 200}');
// }); 

module.exports = router;
