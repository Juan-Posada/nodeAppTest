const user_service = require('../services/userService')

const testUserAPI = (req, resp) => {
    console.log('testUserAPI')
    resp.status(200).send({
        "status" : "OK",
        "message" : "Estado API user: available"
    })
}

const getAllUsers = async(req, resp) => {
    const users = await user_service.getAllUsers()
    if (users) {
        resp.status(200).send({
            "status" : "OK",
            "message" : "Usuarios",
            "data" : users
        })
    } else {
        resp.status(400).send({
            "status" : "FAILED",
            "message" : "Error al traer usuarios"
        })
    }
}

const getOneUser = async(req, resp) => {
    const id = req.params.id
    const user = await user_service.getOneUser(id)
    if (user) {
        resp.status(200).send({
            "status" : "OK",
            "message" : "Usuario obtenido con éxito",
            "data" : user
        })
    } else {
        resp.status(400).send({
            "status" : "FAILED",
            "message" : "Error al traer el usuario"
        })
    }
}

const saveUser = async(req, resp) => {
    const { body } = req
    const savedUser = await user_service.saveUser(body.name, body.email, body.password)
    if (savedUser) {
        resp.status(201).send({
            "status" : "OK",
            "message" : "Usuario guardado con éxito",
            "data" : savedUser
        })
    } else {
        resp.status(400).send({
            "status" : "FAILED",
            "message" : "Error al guardar el usuario"
        })
    }
}

const updateUser = async(req, resp) => {
    const id = req.params.id
    const { body } = req
    const updatedUser = await user_service.updateUser(id, body.name, body.email, body.pasword)
    if (updatedUser) {
        resp.status(200).send({
            "status" : "OK",
            "message" : "Usuario actualizado con éxito",
            "data" : updatedUser
        })
    } else {
        resp.status(400).send({
            "status" : "FAILED",
            "message" : "Error al actualizar el usuario"
        })
    }
}

const deleteUser = async(req, resp) => {
    const id = req.params.id
    const deletedUser = await user_service.deleteUser(id)
    if (deletedUser) {
        resp.status(200).send({
            "status" : "OK",
            "message" : "Usuario eliminado con éxito",
            "data" : deletedUser
        })
    } else {
        resp.status(400).send({
            "status" : "FAILED",
            "message" : "Error al eliminar el usuario"
        })
    }
}

module.exports = {testUserAPI, getAllUsers, getOneUser, saveUser, updateUser, deleteUser}