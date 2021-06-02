var express = require('express');
var router = express.Router();
var db = require('../model/db')

/* GET register listing. */
router.get('/', function (req, res, next) {
  res.send('这是注册界面Get')
});
router.get('/check', function (req, res, next) {
  let inform = req.query;
  let username = infrom.newusername;
  let query3SQL = "select * from users"
  let conn = db.connection()
  db.query3(conn,query3SQL,"",function(resx){
    console.log(resx);
  })
  db.close(conn)
  res.send('这是注册界面check');
});

router.post('/', function (req, res, next) {
  let inform = req.body.params;
  let username = inform.newusername;
  let password = inform.newpassword;
  let isExistUserSQL = "select user_name from users";
  let conn = db.connection()
  // db.query1(conn, isExistUserSQL, '', function (resx) {
  //   for (let i = 0; i < resx.length; i++) {
  //     if (resx[i].user_name == username) {
  //       res.send({
  //         state: "failed",
  //         message: "用户名重复了"
  //       })
  //       break;
  //     }
  //   }
  // })
  // db.close(conn)


  let newUserSQL = 'INSERT INTO users (user_id,user_name,user_password) VALUES(1002,'+'"'+ username +'"'+ ','+'"'+ password +'"'+ ','+'"'+ new Date().format('yyyy-MM-ddhh:mm:ss')+'"'+ ')';

  db.insert(conn,newUserSQL,'',function(res){
    let result = res;
    console.log(res)
  })
  db.close(conn)
});

module.exports = router;
