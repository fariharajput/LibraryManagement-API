var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/Getallusers", UserController.GetAllUsers);
router.get("/SignupUser/:UserName&:password", UserController.SignUpUser);
router.get("/LoginUser/:UserName&:password", UserController.LoginUser);


module.exports = router;
