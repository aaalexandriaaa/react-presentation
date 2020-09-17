const Room = require("../models/rooms");

module.exports = {
  index,
  create,
};

function index(req, res) {
  Room.find({}).then((rooms) => res.json(rooms));
}

function create(req, res) {
  Room.create(req.body)
    .then(room => { res.json(room) })
    .catch(err => { res.json(err) })
}