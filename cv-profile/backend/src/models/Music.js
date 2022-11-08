module.exports = (sequelize, DataTypes) => {
  const music = sequelize.define("Music", {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.STRING,
  });
  return music;
};
