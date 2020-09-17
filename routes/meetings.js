const express = require('express');
const router = express.Router();
const meetingsCtrl = require('../controllers/meetings');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post("/", checkAuth, meetingsCtrl.create);


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;