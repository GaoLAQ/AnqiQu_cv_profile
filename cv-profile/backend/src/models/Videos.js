module.exports = (sequelize, DataTypes) => {
  const videos = sequelize.define("videos", {
    description: DataTypes.STRING,
    source: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
  });
  return videos;
};
