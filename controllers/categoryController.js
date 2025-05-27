// Enlazamos nuestro servicio
const categoryService = require('../services/categoryService')

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories();

    if(allCategories)
        res.status(200).send({ status: "OK", data: allCategories });
    else
        res.status(400).send({ status: "FAILED", data: allCategories });
};

const getCategory = async (req, res) => {
    let id = req.params.CategoryId;
    try {
        const Category = await categoryService.getCategory(id)
        res.status(200).send({ status: "OK", data: Category })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } })
    }
}

const createCategory = async (req, res) => {
    const { body } = req
    const createdCategory = await categoryService.createCategory(body.name)
    
    if(createdCategory)
        res.status(201).send({ status: "OK", data: createdCategory })
    else
        res.status(400).send({ status: "FAILED", data: createdCategory })
}

const updateCategory = async (req, res) => {
    let id = req.params.CategoryId
    const { name } = req.body
    const updatedCategory = await categoryService.updateCategory(id, name)
    
    if(updatedCategory)
        res.status(200).send({ status: "OK", data: updatedCategory })
    else
        res.status(400).send({ status: "FAILED", data: updatedCategory })
}

const deleteCategory = async (req, res) => {
    let id = req.params.CategoryId;
    const deletedCategory = await categoryService.deleteCategory(id)
    
    if(deletedCategory)
        res.status(200).send({ status: "OK", data: deletedCategory })
    else
        res.status(400).send({ status: "FAILED", data: deletedCategory })
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}
