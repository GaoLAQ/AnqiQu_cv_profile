module.exports = (sequelize, DataTypes) => {
  const music = sequelize.define("Music", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return music;
};
