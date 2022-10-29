const fs = require("fs");
const path = require("path");
const db = {};
const { Sequelize } = require("sequelize");
const config = require("../config/config");

var sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    console.log("looking for model.....", model);

    sequelize[model.name] = model;
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
