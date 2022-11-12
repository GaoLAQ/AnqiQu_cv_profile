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
  async editSingleMusic(req, res) {
    console.log("from backend", req.params);
    try {
      await Music.update(req.body, {
        where: {
          id: req.params.musicId,
        },
      });
      res.send(req.body);
    } catch (error) {
      res.status(500).send({
        error: "an error has occured trying to update the music",
      });
    }
  },
  async deleteSingleMusic(req, res) {
    // const music = await Music.findOne({
    //   id: req.params.musicId,
    // });

    // music.destory().then(function () {
    //   res.status(200).json({
    //     message: "User deleted",
    //   });
    // });
    try {
      const deletedMusic = await Music.findOne({
        where: {
          id: req.params.musicId,
        },
      });
      if (deletedMusic) {
        deletedMusic.destroy();
      } else {
        res.status(200).json({
          message: "music is already deleted",
        });
      }
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
