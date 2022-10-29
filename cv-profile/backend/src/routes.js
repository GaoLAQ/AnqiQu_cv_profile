const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

const musicController = require("./controllers/musicController");

const videoController = require("./controllers/videoController");

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
};
