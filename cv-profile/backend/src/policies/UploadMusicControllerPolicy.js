const multer = require("multer");

module.exports = {
  multerSync() {
    const upload = multer({
      dest: "./uploads/",
    });
    return upload;
  },
};
