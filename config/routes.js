const express = require('express')
const router = express.Router()

const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoryControl')
const usersController = require('../app/controllers/usersController')

const { authenticateUser } = require('../app/middlewares/authentication')

router.get('/notes', authenticateUser,notesController.list)
router.get('/notes/:id',authenticateUser,notesController.show)
router.post('/notes',authenticateUser, notesController.create)
router.put('/notes/:id',authenticateUser,notesController.update)
router.delete('/notes/:id',authenticateUser, notesController.destroy)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.post('/categories',  authenticateUser,categoriesController.create)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)

router.post('/user/register', usersController.register)
router.post('/user/login', usersController.login)
router.delete('/user/logout', authenticateUser, usersController.logout)
router.get('/user/account', authenticateUser, usersController.account)

module.exports = router