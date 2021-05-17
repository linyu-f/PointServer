var express = require('express');
var router = express.Router();
var db = require('../model/db')

/* GET register listing. */
router.get('/', function(req, res, next) {

});

router.post('/', function(req, res, next) {
  let inform = req.body.params;
  let username = inform.newusername;
  let password = inform.newpassword;
  let newUserSQL = 'INSERT INTO users (user_id,user_name,user_password) VALUES(1002,'+'"'+ username +'"'+ ','+'"'+ password +'"'+ ')'
  let conn = db.connection()
  db.insert(conn,newUserSQL,'',function(insertId){
    console.log(insertId)
  })
  db.close()
  });

module.exports = router;

