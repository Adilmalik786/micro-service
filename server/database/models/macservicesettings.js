"use strict";
const Sequelize = require('sequelize');

const sequelize = require("../../services/sequelize");
const MacServiceSettings = sequelize.define("macservicesettings", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  category: {
    type: Sequelize.STRING,
  },
  service_name: {
    type: Sequelize.STRING,
  },
  settings: {
    type: Sequelize.JSON,
  },
  last_editor: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
},{
  paranoid: false,
  tablename: 'macservicesettings'
});

module.exports = MacServiceSettings;