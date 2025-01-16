// models/models.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../config/config'); // Adjust the path to your config file
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];
const sequelize = new (require('sequelize'))(sequelizeConfig);

class User extends Model {
  static associate(models) {
    User.hasMany(models.ProductCategory, {
      foreignKey: 'userId',
      as: 'categories',
    });
    User.hasMany(models.Item, {
      foreignKey: 'userId',
      as: 'items',
    });
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
});

class ProductCategory extends Model {
  static associate(models) {
    ProductCategory.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    ProductCategory.hasMany(models.Item, {
      foreignKey: 'categoryId',
      as: 'items',
    });
  }
}

ProductCategory.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'ProductCategory',
});

class Item extends Model {
  static associate(models) {
    Item.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    Item.belongsTo(models.ProductCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  }
}

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Item',
});

const models = {
  User,
  ProductCategory,
  Item,
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;