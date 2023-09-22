const express = require('express')
const { upload } = require('../config/uploadConfig.js')
const { verifyToken } = require('../config/authConfig.js')
const controller = require('../controllers/userController.js')

const router = express.Router()

//get user
router.get('/api/users/:id', verifyToken, controller.users_id_get)

//update user
router.put('/api/users/:id/edit', verifyToken, upload.single('image'), controller.users_id_edit_put)

//delete user
router.delete('/api/users/:id/delete', verifyToken, controller.users_id_delete)

//search user
router.post('/api/users', verifyToken, controller.users_search_post)

//add / remove friend
router.put('/api/users/:id/:friendId', verifyToken, controller.users_userId_friendId_put)

module.exports = router