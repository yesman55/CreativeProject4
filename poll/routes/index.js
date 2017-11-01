var express = require('express');
var request = require('request');
var router = express.Router();

var OS_poll = {
  Windows: {
    name: 'Windows',
    votes: 0
  },
  Linux: {
    name: 'Linux',
    votes: 0
  },
  MacOS: {
    name: 'MacOS',
    votes: 0
  }
};

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/OS_poll', function(req, res) {
  console.log("In Poll");
  res.send(OS_poll);
});

// router.post('/pokemon', function(req, res) {
//     console.log("In Pokemon Post");
//     console.log(req.body);
//     pokemon.push(req.body);
//     res.end('{"success" : "Updated Successfully", "status" : 200}');
// }); 

module.exports = router;
