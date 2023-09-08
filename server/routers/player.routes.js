const PlayerController = require("../controllers/player.controllers")

console.log(PlayerController)

module.exports = (app) => {
    app.post("/api/players", PlayerController.createPlayer)  // add new player
    app.get("/api/players", PlayerController.getAllPlayers)  // get all players
    app.get("/api/players/:id",PlayerController.getOnePlayer)  // get one players
    app.put("/api/players/:id", PlayerController.updatePlayer)  // update one player
    app.delete("/api/players/:id", PlayerController.deletePlayer)  // delete one player by _id
}