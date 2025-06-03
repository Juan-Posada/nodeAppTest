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
        through: 'articleCategories',  // NOMBRE exacto de la Tabla intermedia
        as: 'categories',              // Nombre del alias para la relación
        foreignKey: 'articleId', // 👈 minúsculas y snake_case | ERROR CORREGIDO
        otherKey: 'categoryId'    // 👈 minúsculas y snake_case  | ERROR CORREGIDO
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