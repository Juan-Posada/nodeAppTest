'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Un artículo puede pertenencer a mucchas categorías
      Article.belongsToMany(models.Category, {
        through: 'articleCategories',  
        as: 'categories',              
        foreignKey: 'articleId', 
        otherKey: 'categoryId'    
      });
  


       // Un usuario tiene muchos articulos
      models.User.hasMany(Article, {
        foreignKey: 'userId',             // Clave foránea en el modelo
      });    

    }
  }
  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};