const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/login', userController.login);
router.get('/management', userController.management);
router.get('/register', userController.register);
router.post('/signup', userController.sigup);
// router.post('/store', userController.store);
// router.get('/:id/edit', userController.edit);
// router.put('/:id', userController.update);
// router.patch('/:id/restore', userController.restore);
// router.delete('/:id', userController.destroy);
// router.delete('/:id/force', userController.forceDestroy);
// router.get('/:slug', userController.show);

module.exports = router;
