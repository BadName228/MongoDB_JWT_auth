const Router = require('express');
const router = new Router();
const controller = require('../controller/authController');
const {check} = require("express-validator");
const roleMiddleware = require("../middlewaree/roleMiddlewaree");

router.post('/registration',[
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль не должен быть пустым").notEmpty(),
    check("password", "Длина пароля не менее 10 символов").isLength({min: 10, max: 50})
], controller.registration);
router.post('/login', controller.login);
router.post('/users', roleMiddleware(["USER"]), controller.getUsers);

module.exports = router;