const Sequelize = require("sequelize");
const Settings = require("../settings/settings");


// TODO: Need to do more customization in Sequelize Service 

const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};
const sequelize = new Sequelize(
  Settings.DB_NAME,
  Settings.DB_USER,
  Settings.DB_PASSWORD,
  {
    benchmark: process.env.NODE_ENV === "development",
    host: Settings.DB_HOST,
    port: Settings.DB_PORT,
    dialect: Settings.DB_DIALECT,
    protocol: Settings.DB_PROTOCOL,
    operators: operatorsAliases,
    pool: {
      min: 5,
      max: 30,
      idle: 10000,
    },
    define: {
      paranoid: true,
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    },
  }
);

module.exports = sequelize;
