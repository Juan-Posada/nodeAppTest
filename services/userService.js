const db = require('../models')

const getAllUsers = async () => {
    try {
        const allUsers = await db.User.findAll()
        return allUsers
    } catch (error) {
        throw new Error(`Error al traer los usuarios ${error.mesage}`)
    }
    
}

const getOneUser = async (id) => {
    try {
        const user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw new Error(`Error al traer los usuarios ${error.mesage}`)
    }
    
}

const saveUser = async (name, email, password) => {
    try {
        const user = await db.User.create({name, email, password})
        return user
    } catch (error) {
        throw new Error(`Error al guardar el usuarios ${error.message}`)
    }
    
}

const updateUser = async (id, name, email, password) => {
    try {
        const user = await db.User.update(
            {name, email, password},
            {
                where: {
                    id,
                },
            })
        return user
    } catch (error) {
        throw new Error(`Error al actualizar el usuarios ${error.message}`)
    }
    
}

const deleteUser = async (id) => {
    try {
        const user = await db.User.destroy({where: {id,},})
        return user
    } catch (error) {
        throw new Error(`Error al eliminar el usuario ${error.mesage}`)
    }
    
}

module.exports = { getAllUsers, getOneUser, saveUser, updateUser, deleteUser }