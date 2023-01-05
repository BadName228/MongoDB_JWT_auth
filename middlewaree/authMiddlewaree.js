const jwt = require('jsonwebtoken');
const {secret} = require("../config");

module.exports = function(req, res, next) {
    if (req.method !== 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.autorization.split(" ")[1];
        if (!token) {
            return res.status(400).json({message: "Пользователь не авторизоваен"});
        }
        const decodedData = jwt.verify(tonen, secret);
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Пользователь не авторизоваен"});
    }
}