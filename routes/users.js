var express = require('express');
var router = express.Router();
var connection = require("../bin/db");
/* GET users listing. */
router.get('/', function(req, res, next) {
  var pre_query = new Date().getTime();

    connection.connect();
    connection.query('SELECT * FROM user_details', function (error, results, fields) {
      if (error) throw error;
      var post_query = new Date().getTime();
      var duration = (post_query - pre_query) / 1000;
      console.log("DURATION TAKEN =====>>>", duration)      
      res.send(results)
    });
     
    connection.end();
  
  
});

module.exports = router;
