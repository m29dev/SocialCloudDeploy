const express = require('express')
// const { upload } = require('../config/uploadConfig.js')
const { verifyToken } = require('../config/authConfig.js')
const controller = require('../controllers/chatController.js')

const router = express.Router()

//create chat
router.post('/api/chats/:userId/:friendId', verifyToken, controller.chats_userId_friendId_post)

//read chat
router.get('/api/chats/:userId/:friendId', verifyToken, controller.chats_userId_friendId_get)

// //update chat with new message
// router.put('/api/chats/:userId/:friendId', verifyToken, controller.chats_userId_friendId_put)

module.exports = router