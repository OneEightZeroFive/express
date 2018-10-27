var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/pay', function(req, res, next) {
  res.send('支付设置');
});

module.exports = router;
