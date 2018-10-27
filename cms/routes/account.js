var express = require('express');
var router = express.Router();
//如果没有脚手架，需要用body-parser来解析post请求
/* GET users listing. */
router.post('/login', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.p);
  var p = parseInt(req.body.p);
  console.log((p-1)/6-1);
  if(req.body.u==='ly'&&req.body.p==='123'){
    res.send({
      status:"登录成功",

    })
  }
});

module.exports = router;
