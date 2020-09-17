const Room = require("../models/rooms");

module.exports = {
  index,
  create,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function create(req, res) {
  Room.create(req.body)
      .then(room => { res.json(room) })
      .catch(err => { res.json(err) })
}