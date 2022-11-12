module.exports = (sequelize, DataTypes) => {
  const videos = sequelize.define("Video", {
    description: DataTypes.STRING,
    source: DataTypes.STRING,
    title: DataTypes.STRING,
  });
  return videos;
};
