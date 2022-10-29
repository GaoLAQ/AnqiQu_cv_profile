const { Videos } = require("../models");

module.exports = {
  async getAllVideo(req, res) {
    try {
      const videos = await Videos.create(req.body);
      res.send(videos);
    } catch (error) {
      res.status(500).send({ error: "Can not find any video items" });
    }
  },
  async addVideos(req, res) {
    try {
      const videos = await Videos.create(req.body);
      res.send(videos);
    } catch (error) {
      res.status(500).send({
        error: "Post error",
      });
    }
  },
};
