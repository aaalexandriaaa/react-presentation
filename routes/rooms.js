const express = require('express');
const router = express.Router();
const roomsCtrl = require('../controllers/rooms');

/*---------- Public Routes ----------*/
router.get('/', roomsCtrl.index);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post("/", checkAuth, roomsCtrl.create);



/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;