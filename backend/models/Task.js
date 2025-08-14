const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    project: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    update: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "created_by",
    },
    modifiedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "modified_by",
    },
  },
  {
    tableName: "task",
    timestamps: true, // enable createdAt and updatedAt
    underscored: true, // snake_case columns (created_at, updated_at)
  }
);

module.exports = Task;
