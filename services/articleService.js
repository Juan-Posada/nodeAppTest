const db = require('../models');
const category = require('../models/category');

const getAllArticles = async () => {
    try {
        let Articles = await db.Article.findAll({
            // Con esta opción permitimos mostrar los artículos con la información del usuario
            include: {
                model: db.User,
                required: true,
                as: "User",
                attributes: ["id", "name", "email"],
            },
            atributtes: {
                exclude: ["createdAt", "updatedAt"]
            }, 
            include : ["categories"]
        });
        return Articles;
    } catch (error) {
        return error.message || "Fallo al traer artículos"
    }
}

const getArticle = async (id) => {
    try {
        let Article = await db.Article.findByPk(id);
        return Article;
    } catch (error) {
        throw { status: 500, message: error.message || "Fallo al traer artículo" };
    }
};

const createArticle = async (title, content, userId, categoryIds) => {
    try {
        let newArticle = await db.Article.create({
            title,
            content,
            userId
        });
        if (newArticle) {
            await newArticle.setCategories(categoryIds)
        }
        return newArticle;
    } catch (error) {
        return error.message || "El artículo no pudo ser creado";
    }
};

const updateArticle = async (id, title, content, idUser) => {
    try {
        let updatedArticle = await db.Article.update({
            title,
            content,
            idUser
        }, {
            where: {
                id,
            },
        });
        return updatedArticle;
    } catch (error) {
        return error.message || "El artículo no pudo ser actualizado";
    }
};

const deleteArticle = async (id) => {
    try {
        const deletedArticle = await db.Article.destroy({
            where: {
                id,
            },
        });
        return deletedArticle;
    } catch (error) {
        return error.message || "El artículo no pudo ser eliminado";
    }
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};
