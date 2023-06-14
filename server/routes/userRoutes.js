const express = require('express');
const userController = require('../controllers/userController');
const validationMiddleware = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', validationMiddleware.validateUser, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id',  userController.deleteUser);

module.exports = router;
