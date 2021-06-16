var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/GetAllUsers", UserController.GetAllUsers);
router.get("/SignupUser/:UserName&:UserPassword", UserController.SignUpUser);
router.get("/LoginUser/:UserName&:UserPassword", UserController.LoginUser);


module.exports = router;
