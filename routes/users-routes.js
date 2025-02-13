const exrpess = require('express');

const userController = require('../controller/users-controllers');

const router = exrpess.Router();


router.get('/', userController.getUsers);


router.post('/signUp', userController.signUp);



router.post('/login', userController.login);




module.exports = router;