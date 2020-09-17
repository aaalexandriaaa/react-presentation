const Room = require("../models/rooms");

module.exports = {
  index,
  create,
};

function index(req, res) {
  Room.find({}).then((rooms) => res.json(rooms));
}

function create(req, res) {
  Room.findById(req.body.meetingRoom)
    .then((room) => {
      room.schedule.push(req.body)
      room.save()
        .then(room => { res.json(room) })
        .catch(err => { res.json(err) })
    })
}