const { Player } = require("../models/player.model");

module.exports.createPlayer = (req, res) => {
  // Mongoose's "create" method is run using our Player model to add a new product to our db's players collection.
  Player.create(req.body) //This will use whatever the body of the client's request sends over
    .then((player) => res.json({ player }))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllPlayers = (req, res) => {
  // Mongoose's "find" method is run using our Player model to get all players from our db's players collection.
  Player.find()
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
};

module.exports.getOnePlayer = (req, res) => {
  // Mongoose's "findOne" method is run using our Player model to get one player from our db's players collection.
  Player.findOne({ _id: req.params.id })
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.updatePlayer = (req, res) => {
  // Mongoose's "findOneAndUpdate" method is run using our Player model to get one player from our db's players collection and update him.
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.deletePlayer = (request, response) => {
  // Mongoose's "deleteOne" method is run using our Player model to delete one player from our db's players collection.
  Player.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => console.log(err));
};
