module.exports = (sequelize, DataTypes) => {
  const UploadMusic = sequelize.define("UploadMusic", {
    file: DataTypes.STRING,
  });
  return UploadMusic;
};
