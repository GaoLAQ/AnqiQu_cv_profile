const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

const musicController = require("./controllers/musicController");

const videoController = require("./controllers/videoController");
const uploadMusicControllerPolicy = require("./policies/uploadMusicControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.get("/music", musicController.getAllMusic);
  app.post("/music", musicController.addMusic);
  app.get("/videos", videoController.getAllVideo);

  app.post(
    "/uploadMusic",
    uploadMusicControllerPolicy.multerSync().single("file"),
    musicController.uploadMusic
  );
  app.get("/uploadMusic", musicController.fetchMusic);

  app.put("/music/:musicId", musicController.editSingleMusic);
  app.delete("/music/:musicId", musicController.deleteSingleMusic);
};
