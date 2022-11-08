const { Music } = require("../models");

module.exports = {
  async getAllMusic(req, res) {
    try {
      const music = await Music.findAll({
        limit: 10,
      });
      res.send(music);
    } catch (error) {
      res
        .status(500)
        .send({ error: "An error has occured trying to fetch the song" });
    }
  },
  async addMusic(req, res) {
    try {
      const music = await Music.create(req.body);
      res.send(music);
    } catch (error) {
      res
        .status(500)
        .send({ error: "an error has occured trying to create the song" });
    }
  },
};
